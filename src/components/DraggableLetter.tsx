import { useDrag } from 'react-dnd';

type PlayerLetterProps = {
  letter: string;
};

export const DraggableLetter = ({ letter }: PlayerLetterProps) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "letter",
    item: { letter },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: 'bold',
        cursor: isDragging ? 'none' : 'pointer',
        border: '1px solid #333',
        borderRadius: '4px',
        padding: '10px',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        backgroundColor: '#ccc',
        color: '#333',
        marginBottom: '0.5rem'
      }}
    >
      {letter}
    </div>
  );
};
