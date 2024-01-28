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

export function Player() {
  return (
    <>
      <MediaPlayer
        // autoplay
        load="visible"
        className="player"
        title="Ecos da Identidade."
        src="https://www.youtube.com/embed/bUqi5kupCNU" // Substitua '_cMxraX_5RE' pelo ID do vídeo do YouTube
        aspectRatio="16/9"
        crossorigin
      >
        <MediaProvider>
          <Poster
            className="vds-poster"
            src="play.gif"
            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
          />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </>
  );
}
