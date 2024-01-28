// page.tsx
import '@vidstack/react/player/styles/base.css';
import { Player } from '../components/Player';
import DelayedButton from '../components/DelayedButton';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-center p-24">
      <Player />
      <DelayedButton />
    </main>
  );
}
