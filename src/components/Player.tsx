// components/DelayedButton.tsx
"use client";
import './player.css';



import { useRef, useState } from 'react';
import { MediaPlayer, MediaProvider, Poster, isYouTubeProvider,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
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
          className="player" // Garante que o player utilize a classe correta para responsividade
          title="Ecos da Identidade."
          src="https://www.youtube.com/embed/4tUU66blhuY"
          crossorigin
          ref={player}
          onPlay={handlePlay}
          onPause={handlePause}
          onProviderChange={onProviderChange}
        >
          <MediaProvider>
            <Poster className="vds-poster" src="ecos.png" alt="Play!" />
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