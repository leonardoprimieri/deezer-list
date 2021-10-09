const INITIAL_STATE = { song: {}, isPlaying: false };

function song(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_CURRENT_PLAYER_SONG": {
      const { song } = action.payload;

      return { ...state, song, isPlaying: true };
    }

    case "PAUSE_SONG": {
      const { song } = action.payload;

      return { ...state, song, isPlaying: false };
    }
    default: {
      return state;
    }
  }
}

export default song;
