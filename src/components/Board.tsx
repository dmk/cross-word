import { boardAtoms } from '@/state/board';
import TileComponent from './Tile';

const BoardComponent = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(15, 42px)`, gap: '0' }}>
      {boardAtoms.map((row, x) =>
        row.map((tileAtom, y) =>
          <div
            key={`${x}-${y}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TileComponent x={x} y={y} />
          </div>
        )
      )}
    </div>
  );
};

export default BoardComponent;
