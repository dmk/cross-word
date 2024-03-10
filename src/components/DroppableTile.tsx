import chroma from 'chroma-js';
import { useDrop } from 'react-dnd';
import { useRecoilState } from 'recoil';

import { boardAtoms } from '@/state/board';

type BoardTileProps = {
  x: number;
  y: number;
  bg: string;
  placeLetter: (letter: string) => void;
};

export const DroppableTile = ({ x, y, bg, placeLetter }: BoardTileProps) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "letter",
    drop: (item: { letter: string }) => placeLetter(item.letter),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [tile] = useRecoilState(boardAtoms[x][y]);

  return (
    <div
      ref={dropRef}
      style={{
        width: '42px', // or whatever your tile size is
        height: '42px',
        backgroundColor: isOver ? chroma(bg).brighten(0.5).hex() : bg,
        cursor: 'pointer',
        border: '0.5px solid #222',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      {tile.letter}
    </div>
  );
};
