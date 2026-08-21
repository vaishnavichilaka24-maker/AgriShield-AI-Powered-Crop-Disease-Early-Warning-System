import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  User, 
  Bot, 
  RefreshCw, 
  Leaf, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { DiagnosisResult, SupportedLanguage } from '../types';
import { useTranslation } from '../i18n/useTranslation';

interface AgronomistChatProps {
  currentDiagnosis?: DiagnosisResult | null;
  currentLanguage: SupportedLanguage;
  initialQuestion?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const AgronomistChat: React.FC<AgronomistChatProps> = ({
  currentDiagnosis,
  currentLanguage,
  initialQuestion
}) => {
  const { t } = useTranslation(currentLanguage);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: t.botInitialGreeting,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update initial greeting when language changes if only 1 message
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].sender === 'bot') {
        return [{
          id: 'msg-1',
          sender: 'bot',
          text: t.botInitialGreeting,
          timestamp: 'Just now'
        }];
      }
      return prev;
    });
  }, [t.botInitialGreeting]);

  useEffect(() => {
    if (initialQuestion) {
      handleSendMessage(initialQuestion);
    }
  }, [initialQuestion]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const quickQuestions = [
    t.quickQ1,
    t.quickQ2,
    t.quickQ3,
    t.quickQ4
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ask-agronomist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          cropContext: currentDiagnosis?.crop || 'Tropical Field Crops',
          diseaseContext: currentDiagnosis?.diseaseName || 'General Plant Health',
          language: currentLanguage
        })
      });

      const data = await res.json();
      const botMsg: Message = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'bot',
        text: data.answer || 'Thank you for your question. Always ensure proper personal protective equipment when applying farm treatments.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Agronomist API error:', err);
      const errorMsg: Message = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'bot',
        text: 'Sorry, I had trouble connecting to the agronomy database. Please check your connection and try asking again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="agronomist-ai-chat" className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-indigo-950 to-slate-950 text-white rounded-2xl p-6 border border-indigo-800/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-extrabold bg-indigo-500 text-white px-2 py-0.5 rounded">
              {t.extensionOfficerBadge}
            </span>
            <span className="text-xs text-indigo-200">&bull; {t.multilingualAgronomy}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {t.askSeniorAgronomistHeading}
          </h2>
          <p className="text-xs text-indigo-200/90 max-w-xl mt-1">
            {t.agronomistSubheading}
          </p>
        </div>

        {currentDiagnosis && (
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/15 text-xs text-indigo-100 max-w-xs shrink-0">
            <p className="font-semibold text-emerald-300">{t.activeCropContext}:</p>
            <p className="font-bold text-white truncate">{currentDiagnosis.crop} &bull; {currentDiagnosis.diseaseName}</p>
          </div>
        )}
      </div>

      {/* Main Chat Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[520px]">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isUser 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-indigo-600 text-white'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed space-y-1 shadow-xs ${
                  isUser 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className={`block text-[10px] text-right ${isUser ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-xs text-xs text-slate-500 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                <span>{t.consultingDatabase}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick prompt pills */}
        <div className="bg-white px-4 py-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="font-bold text-slate-500 shrink-0">{t.suggested}:</span>
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(q)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-900 text-slate-700 whitespace-nowrap transition-colors border border-slate-200 shrink-0 cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-white border-t border-slate-200">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.askQuestionPlaceholder}
              className="flex-1 text-xs rounded-xl border border-slate-300 px-3.5 py-2.5 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none text-slate-800"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.send}</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
