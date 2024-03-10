import { RecoilState, atom } from 'recoil';

import { Tile } from '@/types/Tile';
import { defaultBoardModifiers } from '@/utils/board';

export const boardSize = 15; // Scrabble board is 15x15

// Tile Atom Factory Function
export function createTileAtom(x: number, y: number): RecoilState<Tile> {
  return atom<Tile>({
    key: `tile-${x}-${y}`,
    default: {
      letter: null,
      multiplier: defaultBoardModifiers[x][y],
    },
  });
}

export const boardAtoms: RecoilState<Tile>[][] =
  Array.from({ length: boardSize }, (_, x) =>
    Array.from({ length: boardSize }, (_, y) =>
      createTileAtom(x, y)
    )
  );
