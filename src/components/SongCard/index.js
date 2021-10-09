import { FiHeart, FiPause, FiPlay } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCurrentPlayerSong, pauseSong } from "../../modules/song/actions";
import { timeFormatter } from "../../utils/timeFormatter";
import { useSelector } from "react-redux";

import { CardActions, CardDescription, CardTitle, Container } from "./styles";
import { addSongToFavorites } from "../../modules/favorites/actions";

export function SongCard({ song, isFavoritePage }) {
  const { song: songData, isPlaying } = useSelector((state) => state.song);

  const dispatch = useDispatch();

  function handleSetCurrentPlayerSong(song) {
    dispatch(setCurrentPlayerSong(song));
  }

  function handlePauseSong(song) {
    dispatch(pauseSong(song));
  }

  function handleAddSongToFavorites(song) {
    dispatch(addSongToFavorites(song));
  }

  return (
    <Container>
      <img src={song.album.cover_big} alt={song.album.title} />

      <CardTitle>{song.title}</CardTitle>
      <CardDescription>{song.artist.name}</CardDescription>

      <CardActions>
        <div>
          {isPlaying && songData.title === song.title ? (
            <button onClick={() => handlePauseSong(song)}>
              <FiPause size={18} />
            </button>
          ) : (
            <button onClick={() => handleSetCurrentPlayerSong(song)}>
              <FiPlay size={18} />
            </button>
          )}

          {!isFavoritePage && (
            <button onClick={() => handleAddSongToFavorites(song)}>
              <FiHeart size={18} />
            </button>
          )}
        </div>

        {timeFormatter(song.duration)}
      </CardActions>
    </Container>
  );
}
