import { useRecoilState } from 'recoil';

import { boardAtoms } from '@/state/board';
import { DroppableTile } from './DroppableTile';
import { DraggableLetter } from './DraggableLetter';

type TileProps = {
  x: number;
  y: number;
};

const bgColors = {
  DL: 'rebeccapurple',
  TL: 'dodgerblue',
  DW: 'sandybrown',
  TW: 'mediumseagreen',
  default: 'black'
};


const TileComponent = ({ x, y }: TileProps) => {
  const [tile, setTile] = useRecoilState(boardAtoms[x][y]);

  const placeLetter = (letter: string) => {
    setTile((prevTile) => ({ ...prevTile, letter }));
  };

  return (
    tile.letter === null ? (
      <DroppableTile
        x={x} y={y}
        placeLetter={placeLetter}
        bg={bgColors[tile.multiplier || 'default']}
      />
    ) : (
      // TODO: make separate component for this and fix styling
      <div style={{
        backgroundColor: bgColors[tile.multiplier || 'default'],
        height: '42px',
        width: '42px',
        border: '0.5px solid #222',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div
          style={{
            fontWeight: 'bold',
            borderRadius: '4px',
            padding: '10px',
            width: '36px',
            height: '36px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            backgroundColor: '#ccc',
            color: '#333',
          }}
        >
          {tile.letter}
        </div>
      </div>
    )
  )
};

export default TileComponent;
