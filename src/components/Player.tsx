// components/DelayedButton.tsx
"use client";
import './player.css';


import { useState } from 'react';
import { MediaPlayer, MediaProvider, Poster, isYouTubeProvider,
  type MediaProviderAdapter,
} from '@vidstack/react';
import { defaultLayoutIcons, DefaultAudioLayout, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import ProgressBar from './ProgressBar';
import DelayButton from './DelayedButton'


export function Player() {


  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  
  return (
    <div className="player-container">
      <div className="video-and-progress-container">
        <MediaPlayer
          playsinline
          aspectRatio="16/9"
          load="visible"
          className="player" // Garante que o player utilize a classe correta para responsividade
          title="Ecos da Identidade."
          src="https://player.vimeo.com/video/909150840?h=f98a95c701"
          crossorigin
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <MediaProvider>
            <Poster className="vds-poster" src="https://vls-zeta.vercel.app/clicktoplay.gif" alt="Play!" />
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

