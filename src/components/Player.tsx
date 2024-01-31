// components/DelayedButton.tsx
"use client";
import './player.css';



import React, { useState } from 'react';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultAudioLayout, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component
import DelayButton from './DelayedButton'


export function Player() {
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
 
  return (
    <>
      <MediaPlayer
        playsinline
        // load="visible"
        className="player"
        title="Ecos da Identidade."
        src="https://www.youtube.com/embed/vjYp418oTzo"
        aspectRatio="16/9"
        crossorigin
        onPlay={handlePlay}
        onPause={handlePause}
        
      >
        <MediaProvider>
          <Poster
            className="vds-poster"
            src="pnl.jpeg"
            alt="Play!"
          />
        </MediaProvider>
        <DefaultAudioLayout icons={defaultLayoutIcons} /> 
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
      <ProgressBar isPlaying={isPlaying} />
      <DelayButton isPlaying={isPlaying} />
    </>
  );
}
