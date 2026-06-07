"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export function useGameAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };
    
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('pointerdown', initAudio, { once: true });
      window.addEventListener('keydown', initAudio, { once: true });
      
      if (window.speechSynthesis) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('pointerdown', initAudio);
        window.removeEventListener('keydown', initAudio);
        if (window.speechSynthesis) {
          window.speechSynthesis.onvoiceschanged = null;
        }
      }
    };
  }, []);

  // Advanced Tone Generator for complex synthetic sounds
  const playAdvancedTone = useCallback((freqs: number[], type: OscillatorType, duration: number, vol = 0.1, sweep = false) => {
    if (isMuted || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(vol, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    gainNode.connect(ctx.destination);

    freqs.forEach(freq => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      if (sweep) {
        osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);
      }
      osc.connect(gainNode);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    });
  }, [isMuted]);

  const playClick = useCallback(() => {
    // Sharp high-tech click (two high frequencies)
    playAdvancedTone([800, 1200], 'sine', 0.05, 0.05);
  }, [playAdvancedTone]);

  const playHover = useCallback(() => {
    // Quick tech scan blip
    playAdvancedTone([600], 'triangle', 0.05, 0.03);
  }, [playAdvancedTone]);

  const playSuccess = useCallback(() => {
    if (isMuted || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    
    // Bright Major 7th chord arpeggio for a very satisfying win sound
    setTimeout(() => playAdvancedTone([523.25], 'sine', 0.3, 0.1), 0);   // C5
    setTimeout(() => playAdvancedTone([659.25], 'sine', 0.3, 0.1), 80);  // E5
    setTimeout(() => playAdvancedTone([783.99], 'sine', 0.3, 0.1), 160); // G5
    setTimeout(() => playAdvancedTone([987.77], 'sine', 0.5, 0.1), 240); // B5
    setTimeout(() => playAdvancedTone([1046.50, 523.25], 'sine', 0.8, 0.15), 320); // C6 + C5
  }, [isMuted, playAdvancedTone]);

  const playError = useCallback(() => {
    // Heavy downward sawtooth sweep (classic error buzzer)
    playAdvancedTone([150, 100], 'sawtooth', 0.4, 0.05, true);
  }, [playAdvancedTone]);

  const speak = useCallback((text: string) => {
    if (isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.rate = 1.1; // Slightly faster
    utterance.pitch = 0.5; // Deep, robotic pitch
    utterance.volume = 0.8;

    const voices = voicesRef.current.length ? voicesRef.current : window.speechSynthesis.getVoices();
    // Prioritize voices that sound like a clean male AI interface (e.g. JARVIS)
    const preferredVoice = voices.find(v => 
      v.name.includes('David') || 
      v.name.includes('Mark') || 
      v.name.includes('Alex') ||
      v.name.includes('Daniel') ||
      v.name.includes('Google UK English Male') ||
      (v.name.includes('Google') && v.name.includes('Male')) ||
      v.name.includes('Fred')
    );
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      if (next && typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return next;
    });
  }, []);

  return {
    isMuted,
    toggleMute,
    playClick,
    playHover,
    playSuccess,
    playError,
    speak
  };
}
