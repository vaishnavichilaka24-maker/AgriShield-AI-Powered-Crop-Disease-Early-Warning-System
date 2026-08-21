import React, { useState, useMemo } from 'react';
import { 
  BlogPost, 
  SupportedLanguage, 
  CropType 
} from '../types';
import { 
  INITIAL_BLOG_POSTS, 
  BLOG_CATEGORIES 
} from '../data/blogData';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  Heart, 
  Share2, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Wrench, 
  Lightbulb, 
  User, 
  MapPin, 
  ArrowLeft,
  PlusCircle,
  X,
  Send,
  MessageSquare,
  ThumbsUp,
  Leaf,
  Filter
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import confetti from 'canvas-confetti';

interface BlogViewProps {
  currentLanguage: SupportedLanguage;
  onAskAgronomistTopic: (question: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  currentLanguage,
  onAskAgronomistTopic
}) => {
  const { t } = useTranslation(currentLanguage);
  
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  
  // Voice readout state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  
  // Submission modal for farmer story
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<BlogPost['category']>('Organic Recipes');
  const [newCrop, setNewCrop] = useState<string>('Rice (Padi)');
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesCrop = selectedCrop === 'All' || post.cropTag === selectedCrop;
      const matchesSearch = searchQuery.trim() === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesCrop && matchesSearch;
    });
  }, [posts, selectedCategory, selectedCrop, searchQuery]);

  // Handle Like
  const handleToggleLike = (postId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const isLiked = likedPosts[postId];
    setLikedPosts(prev => ({ ...prev, [postId]: !isLiked }));
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));

    if (!isLiked) {
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {
        // Safe confetti fallback
      }
    }
  };

  // Handle Audio Readout
  const handleToggleAudio = (article: BlogPost) => {
    if (isPlayingAudio) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const textToRead = article.audioScript || `${article.title}. ${article.subtitle}. ${article.excerpt}.`;
        const utterance = new SpeechSynthesisUtterance(textToRead);
        
        // Map language
        const langMap: Record<SupportedLanguage, string> = {
          en: 'en-US',
          id: 'id-ID',
          hi: 'hi-IN',
          te: 'te-IN',
          ta: 'ta-IN',
          bn: 'bn-BD',
          mr: 'mr-IN',
          sw: 'sw-KE',
          es: 'es-ES',
          vi: 'vi-VN',
          fr: 'fr-FR',
          pt: 'pt-BR',
          ar: 'ar-SA'
        };
        utterance.lang = langMap[currentLanguage] || 'en-US';
        utterance.rate = 0.95;

        utterance.onend = () => {
          setIsPlayingAudio(false);
        };
        utterance.onerror = () => {
          setIsPlayingAudio(false);
        };

        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      } else {
        alert('Voice audio reader is not supported in this browser.');
      }
    }
  };

  // Stop audio on unmount or article close
  const handleCloseArticle = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setActiveArticle(null);
  };

  // Handle Share
  const handleShare = (article: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin} - AgriShield Farm Guide: ${article.title}`);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2500);
    }
  };

  // Handle Submit Farmer Story
  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const createdPost: BlogPost = {
      id: `blog-community-${Date.now()}`,
      title: newTitle.trim(),
      subtitle: `Farmer Experience & Field Guide from ${newLocation || 'Local Farm'}`,
      excerpt: newContent.trim().slice(0, 160) + '...',
      content: newContent.trim(),
      category: newCategory,
      cropTag: newCrop,
      author: {
        name: newAuthor.trim() || 'Community Farmer',
        role: 'Verified Smallholder Farmer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        location: newLocation.trim() || 'Agricultural District'
      },
      coverImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1200&q=80',
      publishedDate: 'Just now',
      readTimeMinutes: 3,
      likes: 1,
      tags: ['Farmer Story', 'Field Experience', 'Local Wisdom'],
      keyTakeaways: [
        'Shared directly from practical smallholder farming operations.',
        'Validated through hands-on crop care and seasonal observation.'
      ]
    };

    setPosts([createdPost, ...posts]);
    setIsSubmitModalOpen(false);
    setNewTitle('');
    setNewContent('');
    setNewAuthor('');
    setNewLocation('');
    setActiveArticle(createdPost);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  // ==========================================
  // FULL ARTICLE DETAIL VIEW
  // ==========================================
  if (activeArticle) {
    const isLiked = likedPosts[activeArticle.id];

    return (
      <div className="max-w-4xl mx-auto pb-16 animate-in fade-in duration-200">
        {/* Back navigation & Quick Actions */}
        <div className="flex items-center justify-between gap-3 mb-6 bg-emerald-950/40 p-3 rounded-2xl border border-emerald-800/60 backdrop-blur-sm">
          <button
            onClick={handleCloseArticle}
            className="flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white px-3 py-1.5 rounded-xl hover:bg-emerald-800/50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Audio Voice Narration */}
            <button
              onClick={() => handleToggleAudio(activeArticle)}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                isPlayingAudio 
                  ? 'bg-amber-500 text-amber-950 border-amber-400 animate-pulse' 
                  : 'bg-emerald-900/80 text-emerald-200 hover:bg-emerald-800 border-emerald-700/60'
              }`}
              title="Listen to Spoken Audio Guide"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Pause Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-400" />
                  <span>Listen Voice Guide</span>
                </>
              )}
            </button>

            {/* Like */}
            <button
              onClick={(e) => handleToggleLike(activeArticle.id, e)}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                isLiked 
                  ? 'bg-rose-500 text-white border-rose-400' 
                  : 'bg-emerald-900/80 text-emerald-200 hover:bg-emerald-800 border-emerald-700/60'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{activeArticle.likes}</span>
            </button>

            {/* Share */}
            <button
              onClick={() => handleShare(activeArticle)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors cursor-pointer"
              title="Share Guide Link"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>

        {copyFeedback && (
          <div className="mb-4 bg-emerald-700 text-white text-xs font-medium px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Article link copied to clipboard! You can share it with your farmer group.</span>
          </div>
        )}

        {/* Hero Article Header */}
        <article className="bg-emerald-950/80 border border-emerald-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Cover image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-emerald-900">
            <img 
              src={activeArticle.coverImage} 
              alt={activeArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                {activeArticle.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/90 text-emerald-200 border border-emerald-700 backdrop-blur-sm">
                {activeArticle.cropTag}
              </span>
            </div>

            {/* Bottom Title inside image gradient */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-3 text-xs text-emerald-300 font-medium mb-1.5">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTimeMinutes} min read
                </span>
                <span>•</span>
                <span>{activeArticle.publishedDate}</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                {activeArticle.title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Subtitle / Excerpt Lead */}
            <p className="text-base sm:text-lg text-emerald-100/90 font-medium leading-relaxed border-l-4 border-emerald-500 pl-4 bg-emerald-900/30 py-2 rounded-r-xl">
              {activeArticle.subtitle}
            </p>

            {/* Author Profile Bar */}
            <div className="flex items-center justify-between gap-4 p-4 bg-emerald-900/50 rounded-2xl border border-emerald-800/80">
              <div className="flex items-center gap-3">
                <img 
                  src={activeArticle.author.avatar} 
                  alt={activeArticle.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{activeArticle.author.name}</h4>
                  <p className="text-xs text-emerald-300">{activeArticle.author.role}</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {activeArticle.author.location}
                  </p>
                </div>
              </div>

              {/* Ask Agronomist direct action */}
              <button
                onClick={() => onAskAgronomistTopic(`I am reading the guide "${activeArticle.title}". Can you give me more specific tips for my local farm?`)}
                className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-amber-950 font-bold text-xs px-3.5 py-2 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ask AI Agronomist</span>
              </button>
            </div>

            {/* Required Materials & Tools (if available) */}
            {activeArticle.materialsOrTools && activeArticle.materialsOrTools.length > 0 && (
              <div className="bg-emerald-900/40 border border-emerald-700/60 rounded-2xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-emerald-400" />
                  Required Materials & Tools
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeArticle.materialsOrTools.map((mat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step-by-Step Preparation / Action Guide */}
            {activeArticle.steps && activeArticle.steps.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  Step-by-Step Field Instructions
                </h3>

                <div className="space-y-4">
                  {activeArticle.steps.map((step) => (
                    <div 
                      key={step.stepNumber}
                      className="bg-emerald-900/30 border border-emerald-800/80 rounded-2xl p-5 hover:border-emerald-700 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0">
                          {step.stepNumber}
                        </div>
                        <div className="space-y-2 flex-1">
                          <h4 className="font-bold text-white text-base leading-snug">
                            {step.title}
                          </h4>
                          <p className="text-sm text-emerald-100/90 leading-relaxed">
                            {step.description}
                          </p>
                          {step.tip && (
                            <div className="flex items-start gap-2 text-xs text-amber-200 bg-amber-950/40 border border-amber-700/50 p-2.5 rounded-xl mt-2">
                              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <span><strong className="text-amber-300">Pro Tip:</strong> {step.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Takeaways Card */}
            {activeArticle.keyTakeaways && activeArticle.keyTakeaways.length > 0 && (
              <div className="bg-gradient-to-br from-emerald-900/70 to-teal-900/60 border border-emerald-600/60 rounded-2xl p-5 shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  Key Takeaways for Maximum Yield
                </h3>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Body Text */}
            <div className="prose prose-invert max-w-none text-emerald-100/90 text-sm sm:text-base leading-relaxed space-y-4 border-t border-emerald-800/80 pt-6">
              <h3 className="text-lg font-bold text-white">Scientific Agronomy Deep-Dive</h3>
              <p className="whitespace-pre-line">{activeArticle.content}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-emerald-800/80">
              <Tag className="w-4 h-4 text-emerald-400" />
              {activeArticle.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs bg-emerald-900 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-700/60 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Bottom Floating Bar in Article: Ask Agronomist */}
            <div className="p-5 bg-gradient-to-r from-emerald-900 to-teal-900 rounded-2xl border border-emerald-600/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Have questions about this technique?</h4>
                <p className="text-xs text-emerald-200">Our multilingual AI Agronomist can adapt this recipe for your specific soil type and rainfall.</p>
              </div>
              <button
                onClick={() => onAskAgronomistTopic(`I need guidance on applying "${activeArticle.title}" for my field in ${activeArticle.cropTag}.`)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-emerald-950 font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask AI Agronomist</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // ==========================================
  // BLOG LIST / FEED VIEW
  // ==========================================
  const featuredArticle = posts[0];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      
      {/* Hub Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950 border border-emerald-800 p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-emerald-200 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Crop Care Blog & Agronomy Knowledge Hub</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Field-Tested Guides, Bio-Remedies & Prevention Protocols
          </h1>

          <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
            Empowering smallholder farmers with peer-reviewed organic pesticide recipes, disease early-warning tactics, chemical safety rules, and local case studies.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/40 transition-transform active:scale-95 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Share Farm Experience / Recipe</span>
            </button>

            <button
              onClick={() => onAskAgronomistTopic("What are the best organic disease prevention practices for rice and vegetables?")}
              className="flex items-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-700 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Ask AI for a Custom Article</span>
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <Leaf className="w-96 h-96 text-emerald-300" />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-emerald-950/80 border border-emerald-800/80 p-4 rounded-2xl shadow-xl space-y-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes, diseases, neem, rice blast, pest control..."
              className="w-full pl-10 pr-4 py-2.5 bg-emerald-900/60 border border-emerald-700/70 rounded-xl text-sm text-white placeholder-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Crop Filter Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-emerald-400 shrink-0" />
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full md:w-48 bg-emerald-900/80 border border-emerald-700/70 text-xs font-semibold text-emerald-100 py-2.5 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
            >
              <option value="All">All Crops</option>
              <option value="Rice (Padi)">Rice (Padi)</option>
              <option value="Maize / Corn (Jagung)">Maize / Corn</option>
              <option value="Tomato (Tomat)">Tomato</option>
              <option value="Chili / Pepper (Cabai)">Chili / Pepper</option>
              <option value="Other / General">General Farming</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-emerald-500 text-emerald-950 shadow-md font-bold' 
                    : 'bg-emerald-900/50 hover:bg-emerald-800 text-emerald-300 border border-emerald-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Article Card (if matching filter and search is empty) */}
      {!searchQuery && selectedCategory === 'All' && selectedCrop === 'All' && featuredArticle && (
        <div 
          onClick={() => setActiveArticle(featuredArticle)}
          className="group relative bg-emerald-950/90 border border-emerald-800 hover:border-emerald-600 rounded-3xl overflow-hidden shadow-2xl transition-all hover:shadow-emerald-900/30 cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image banner */}
            <div className="lg:col-span-6 relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={featuredArticle.coverImage} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 lg:bg-gradient-to-r lg:from-transparent lg:to-emerald-950" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-amber-950 uppercase tracking-wide shadow-md">
                  Featured Masterclass
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-800 text-emerald-200 border border-emerald-700">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTimeMinutes} min read
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-emerald-200/90 line-clamp-3 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              {/* Author & Read CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-emerald-800/80">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={featuredArticle.author.avatar} 
                    alt={featuredArticle.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-emerald-400"
                  />
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{featuredArticle.author.name}</p>
                    <p className="text-[10px] text-emerald-400 leading-tight">{featuredArticle.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>Read Guide</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Blog Posts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <span>Farm Articles ({filteredPosts.length})</span>
          </h2>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-emerald-950/40 rounded-3xl border border-dashed border-emerald-800 space-y-3">
            <BookOpen className="w-12 h-12 text-emerald-500/50 mx-auto" />
            <h3 className="text-base font-bold text-white">No articles found matching your filter</h3>
            <p className="text-xs text-emerald-300 max-w-md mx-auto">
              Try adjusting your search query or selecting a different crop category.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedCrop('All'); setSearchQuery(''); }}
              className="mt-2 px-4 py-2 bg-emerald-800 text-emerald-200 text-xs font-bold rounded-xl hover:bg-emerald-700 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const isLiked = likedPosts[post.id];
              return (
                <div
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="group bg-emerald-950/80 border border-emerald-800/90 hover:border-emerald-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-emerald-900/20 transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-48 w-full overflow-hidden bg-emerald-900">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-800/95 text-emerald-100 border border-emerald-600/70 shadow-md">
                          {post.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 text-xs text-emerald-300 font-medium bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
                        {post.readTimeMinutes} min read
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-2.5">
                      <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                        {post.cropTag}
                      </div>

                      <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-emerald-200/80 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-5 pt-0">
                    <div className="flex items-center justify-between pt-3 border-t border-emerald-800/80 text-xs">
                      <div className="flex items-center gap-2">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-emerald-400"
                        />
                        <span className="text-emerald-300 truncate max-w-[110px]">{post.author.name}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => handleToggleLike(post.id, e)}
                          className={`flex items-center gap-1 transition-colors ${
                            isLiked ? 'text-rose-400 font-bold' : 'text-emerald-400 hover:text-white'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                          <span>{post.likes}</span>
                        </button>

                        <span className="font-bold text-emerald-400 group-hover:text-white flex items-center gap-0.5">
                          Read
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SUBMIT FARMER STORY MODAL */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-emerald-950 border border-emerald-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-emerald-800 pb-3">
              <div className="flex items-center gap-2 text-emerald-300">
                <PlusCircle className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-base">Share Your Farm Recipe or Story</h3>
              </div>
              <button 
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-emerald-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitStory} className="space-y-4 text-xs">
              <div>
                <label className="block text-emerald-300 font-semibold mb-1">Article / Recipe Title *</label>
                <input 
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g., How I eliminated chili thrips with fermented wood ash solution"
                  className="w-full p-2.5 bg-emerald-900 border border-emerald-700 rounded-xl text-white placeholder-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full p-2.5 bg-emerald-900 border border-emerald-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <option value="Organic Recipes">Organic Recipes</option>
                    <option value="Disease Prevention">Disease Prevention</option>
                    <option value="Soil Health">Soil Health</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Farmer Guide">Farmer Guide</option>
                  </select>
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">Crop Type</label>
                  <select
                    value={newCrop}
                    onChange={(e) => setNewCrop(e.target.value)}
                    className="w-full p-2.5 bg-emerald-900 border border-emerald-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <option value="Rice (Padi)">Rice (Padi)</option>
                    <option value="Maize / Corn (Jagung)">Maize / Corn</option>
                    <option value="Chili / Pepper (Cabai)">Chili / Pepper</option>
                    <option value="Tomato (Tomat)">Tomato</option>
                    <option value="Other / General">General Farming</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">Your Name / Farm Name</label>
                  <input 
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g., Farmer Budi / Green Valley Farm"
                    className="w-full p-2.5 bg-emerald-900 border border-emerald-700 rounded-xl text-white placeholder-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-semibold mb-1">Location / Village</label>
                  <input 
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g., Subang Basin, West Java"
                    className="w-full p-2.5 bg-emerald-900 border border-emerald-700 rounded-xl text-white placeholder-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-emerald-300 font-semibold mb-1">Content & Instructions *</label>
                <textarea 
                  required
                  rows={5}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Describe the materials used, dilution ratio, timing of application, and observed results on your crop..."
                  className="w-full p-2.5 bg-emerald-900 border border-emerald-700 rounded-xl text-white placeholder-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-emerald-800">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 text-emerald-300 hover:text-white font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold px-5 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Publish Article</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
