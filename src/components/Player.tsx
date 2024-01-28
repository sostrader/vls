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
        autoplay
        load="visible"
        className="player"
        title="Sprite Fight"
        src={"https://s3.sostrader.com.br/vsl/video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=TBRLPL8LL8M7W5WK0UNH%2F20240128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240128T160502Z&X-Amz-Expires=43200&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJUQlJMUEw4TEw4TTdXNVdLMFVOSCIsImV4cCI6MTcwNjUwMDU4MywicGFyZW50IjoidHJhZGVycGVkcm9zbyJ9.s0vXQ1mVsiSCFAyWQq7GA05pwOHrxXFzr0-Dqd8gGKK8NtsuiHaSLJ72aMNDGBviaPM9GHDAG1QL0dWXI0qxiQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=cb98032e55c4056f20d04c90c24bb871705abded9481b9c6c9433be799e2442a"}
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