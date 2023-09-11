import React from 'react';
import Player from './Player';
import players from './Players';

export default function PlayerList() {
  return (
    <div>
      {players.players.map((player, index) => {
        return <Player  props={player} />;
      })}
    </div>
  );
}
