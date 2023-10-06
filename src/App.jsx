import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'escuderoemanuel',
    name: 'Emanuel Escudero',
    isFollowing: false,
  },
  {
    userName: 'Cristiano',
    name: 'El Bicho CR7',
    isFollowing: true,
  },
  {
    userName: 'RiverPlate',
    name: 'Club Atlético River Plate',
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
