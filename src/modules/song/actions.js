export function setCurrentPlayerSong(song) {
  return {
    type: "SET_CURRENT_PLAYER_SONG",
    payload: {
      song,
    },
  };
}

export function pauseSong(song) {
  return {
    type: "PAUSE_SONG",
    payload: { song },
  };
}
