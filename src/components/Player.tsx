// components/DelayedButton.tsx
"use client";
import './player.css';



import { useEffect, useRef, useState } from 'react';
import { MediaPlayer, MediaProvider, Poster, isYouTubeProvider,isHLSProvider, 
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent
} from '@vidstack/react';
import { defaultLayoutIcons, DefaultAudioLayout, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component
import DelayButton from './DelayedButton'


export function Player() {

  let player = useRef<MediaPlayerInstance>(null),
    [src, setSrc] = useState('');

      function onProviderChange(provider: MediaProviderAdapter | null) {
        if (isYouTubeProvider(provider)) {
          provider.cookies = true;
        }
      }
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
 
  return (
    <div className="player-container">
      <div className="video-and-progress-container">
        <MediaPlayer
          playsinline
          load="visible"
          className="player"
          title="Ecos da Identidade."
          src="https://www.youtube.com/embed/9DNZscmpDz4"
          aspectRatio="16/9"
          crossorigin
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <MediaProvider>
            <Poster className="vds-poster" src="pnl.jpeg" alt="Play!" />
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