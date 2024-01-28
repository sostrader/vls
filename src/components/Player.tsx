import './player.css';


import {
  MediaPlayer,
  MediaProvider,
  Poster,
  

} from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
  
} from '@vidstack/react/player/layouts/default';

import { textTracks } from './tracks';


export function Player() {

  return (
    <>
      <MediaPlayer
        autoplay
        load="visible"
        className="player"
        title="Sprite Fight"
        src={"video.mp4"}
        aspectRatio="16/9"
        crossorigin
      
      >
        <MediaProvider>
          <Poster
            className="vds-poster"
            src="https://crieseudestino.com/wp-content/uploads/elementor/thumbs/o-que-é-pnl-1080-nyhzbfmlas0vzsdl7yblmtffx02y7ue8vkhcfhcdio.jpg"
            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
          />
         
        </MediaProvider>

        
        <DefaultVideoLayout
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>

    </>
  );
}