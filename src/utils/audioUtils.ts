/**
 * Helper to play 24kHz raw PCM or WAV audio from Gemini TTS
 * with graceful fallback to browser Web Speech API in native localized languages.
 */

let activeAudioCtx: AudioContext | null = null;
let activeSourceNode: AudioBufferSourceNode | null = null;

export function stopAudioPlayback() {
  if (activeSourceNode) {
    try {
      activeSourceNode.stop();
    } catch {
      // ignore
    }
    activeSourceNode = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export async function playPcmAudio(base64Data: string, sampleRate = 24000): Promise<void> {
  stopAudioPlayback();

  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Convert 16-bit PCM little-endian to Float32
  const int16Array = new Int16Array(bytes.buffer);
  const float32Array = new Float32Array(int16Array.length);
  for (let i = 0; i < int16Array.length; i++) {
    float32Array[i] = int16Array[i] / 32768.0;
  }

  const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContextClass) {
    throw new Error('AudioContext not supported');
  }

  if (!activeAudioCtx || activeAudioCtx.state === 'closed') {
    activeAudioCtx = new AudioContextClass({ sampleRate });
  }

  if (activeAudioCtx.state === 'suspended') {
    await activeAudioCtx.resume();
  }

  const audioBuffer = activeAudioCtx.createBuffer(1, float32Array.length, sampleRate);
  audioBuffer.copyToChannel(float32Array, 0);

  const source = activeAudioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(activeAudioCtx.destination);
  activeSourceNode = source;

  return new Promise((resolve) => {
    source.onended = () => {
      activeSourceNode = null;
      resolve();
    };
    source.start();
  });
}

export function speakWithBrowserSpeech(
  text: string, 
  langCode: string = 'en', 
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  const langMap: Record<string, string> = {
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

  utterance.lang = langMap[langCode] || 'en-US';
  utterance.rate = 0.92; // slightly slower for farm field clarity
  utterance.pitch = 1.0;

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
  return true;
}
