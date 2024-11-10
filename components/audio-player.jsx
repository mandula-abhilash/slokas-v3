'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function AudioPlayer({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', () => setIsLoaded(true));
      audioRef.current.addEventListener('error', () => setError(true));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadeddata', () => setIsLoaded(true));
        audioRef.current.removeEventListener('error', () => setError(true));
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (!isLoaded || error) return;
    
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!isLoaded || error) return;
    
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleSliderChange = (value) => {
    if (!isLoaded || error) return;
    
    const time = (value[0] / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(value[0]);
  };

  if (error) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlayPause}
        disabled={!isLoaded || error}
        className="h-8 w-8"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      
      <Slider
        value={[progress]}
        max={100}
        step={1}
        className="flex-1"
        onValueChange={handleSliderChange}
        disabled={!isLoaded || error}
      />

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        disabled={!isLoaded || error}
        className="h-8 w-8"
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>

      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}