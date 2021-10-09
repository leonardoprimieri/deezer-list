import produce from "immer";

const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem("@deezerFilter:Favorites")) ?? [],
  isInList: false,
};

function song(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_SONG_TO_FAVORITES": {
        const { song } = action.payload;

        const songInFavoritesIndex = draft.favorites.findIndex((item) => item.song.id === song.id);

        if (songInFavoritesIndex === -1) {
          draft.favorites.push({
            song,
          });
        }

        localStorage.setItem("@deezerFilter:Favorites", JSON.stringify(draft.favorites));

        break;
      }

      default: {
        return state;
      }
    }
  });
}

export default song;
