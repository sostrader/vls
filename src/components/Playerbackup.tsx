import {
  MediaPlayer,
  MediaProvider,
  isYouTubeProvider,
  type MediaProviderAdapter
} from '@vidstack/react';

function Player() {
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      // Configurações específicas para o provedor do YouTube, se necessário
    }
  }

  return (
    <MediaPlayer onProviderChange={onProviderChange}>
      <MediaProvider
        // Inclua a URL do vídeo do YouTube aqui
        src="https://youtu.be/iNsiQHRw2iE?si=Gtvkx4nrcChcNS6y"
      />
      {/* Outros componentes, como Poster, se necessário */}
    </MediaPlayer>
  );
}
