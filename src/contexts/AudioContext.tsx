'use client';

import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
  startAudio: () => void;
}

const AudioCtx = createContext<AudioContextType>({
  isPlaying: false,
  isMuted: false,
  togglePlay: () => {},
  toggleMute: () => {},
  startAudio: () => {},
});

export function useAudio() {
  return useContext(AudioCtx);
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio('/audio/somebody-new.wav');
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const startAudio = useCallback(() => {
    if (!hasStarted && audioRef.current) {
      audioRef.current.play().catch(() => {});
      setHasStarted(true);
    }
  }, [hasStarted]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <AudioCtx.Provider value={{ isPlaying, isMuted, togglePlay, toggleMute, startAudio }}>
      {children}
    </AudioCtx.Provider>
  );
}
