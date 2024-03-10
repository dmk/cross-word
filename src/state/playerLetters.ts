// Then, define the atom for the player's letters:
import { PlayerLetter } from '@/utils/playerLetter';
import { atom } from 'recoil';

export const playerLettersState = atom<PlayerLetter[]>({
  key: 'playerLetters',
  default: ['F', 'E', 'G', 'C', 'E', 'B', 'T', 'A'],
});
