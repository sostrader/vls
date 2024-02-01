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

  // useEffect(() => {
  //   // Initialize src.
  //   changeSource('youtube');

  //   // Subscribe to state updates.
  //   return player.current!.subscribe(({ paused, viewType }) => {
  //     // console.log('is paused?', '->', paused);
  //     // console.log('is audio view?', '->', viewType === 'audio');
  //   });
  // }, []);


  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
 
  return (
    <>
      <MediaPlayer
        playsinline
        load="visible"
        className="player"
        title="Ecos da Identidade."
        src="youtube/9DNZscmpDz4"
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
