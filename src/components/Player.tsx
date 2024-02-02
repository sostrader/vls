// components/DelayedButton.tsx
"use client";
import './player.css';


import { useState } from 'react';
import { MediaPlayer, MediaProvider, Poster, isHLSProvider,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';
import { defaultLayoutIcons, DefaultAudioLayout, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import ProgressBar from './ProgressBar';
import DelayButton from './DelayedButton'


export function Player() {
  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) {
    if (isHLSProvider(provider)) {
      // Default development URL.
      provider.library = 'https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.js';
      // Default production URL.
      provider.library = 'https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.min.js';
    }
  }
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  
  return (
    <div className="player-container">
      <div className="video-and-progress-container">
        <MediaPlayer
        onProviderChange={onProviderChange}
          autoplay
          playsinline
          aspectRatio="16/9"
          load="visible"
          className="player" // Garante que o player utilize a classe correta para responsividade
          title="Ecos da Identidade."
          src="/video/play.m3u8"
          crossorigin
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <MediaProvider>
            <Poster className="vds-poster" src="cover.png" alt="Play!" />
          </MediaProvider>
          <DefaultAudioLayout icons={defaultLayoutIcons} />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
        <ProgressBar isPlaying={isPlaying} />
      </div>
      <div className="delayed-button-container">
        <DelayButton isPlaying={isPlaying} />
      </div>
    </div>
  );
}

