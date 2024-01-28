import './player.css';


import {
  MediaPlayer,
  MediaProvider,
  Poster,
  isYouTubeProvider,
  type MediaProviderAdapter
  

} from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
  
} from '@vidstack/react/player/layouts/default';



export function Player() {
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }

  return (
    
    <>
    
      <MediaPlayer
        autoplay
        load="visible"
        className="player"
        title="Sprite Fight"
        src={"https://youtu.be/iNsiQHRw2iE?si=Gtvkx4nrcChcNS6y"}
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