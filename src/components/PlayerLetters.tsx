import { useRecoilState } from 'recoil';
import { playerLettersState } from '@/state/playerLetters'; // Adjust the import path as necessary
import { PlayerLetter } from '@/utils/playerLetter';
import { DraggableLetter } from './DraggableLetter';

const PlayerLettersComponent = () => {
  const [letters, setLetters] = useRecoilState(playerLettersState);

  // Function to remove a letter from the player's set (e.g., when placing it on the board)
  const useLetter = (letter: PlayerLetter) => {
    setLetters((currentLetters) => currentLetters.filter(l => l !== letter));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginRight: '2rem',
    }}>
      {letters.map((letter, index) => (
        <DraggableLetter key={`player-letter-${index}`} letter={letter} />
      ))}
    </div>
  );
};

export default PlayerLettersComponent;
