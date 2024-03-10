"use client";

import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styles from "./page.module.css";
import BoardComponent from '@/components/Board';
import PlayerLettersComponent from '@/components/PlayerLetters';

export default function Home() {
  return (
    <RecoilRoot>
      <main className={styles.main}>
        <h1>Scrabble-UA</h1>

        <DndProvider backend={HTML5Backend}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <PlayerLettersComponent />
            <BoardComponent />
          </div>
        </DndProvider>
      </main>
    </RecoilRoot>
  );
}
