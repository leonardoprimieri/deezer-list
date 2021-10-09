export function addSongToFavorites(song) {
  return {
    type: "ADD_SONG_TO_FAVORITES",
    payload: {
      song,
    },
  };
}
