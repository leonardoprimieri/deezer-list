import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { SongCard } from "../../components/SongCard";
import { Container, Wrapper } from "./styles";

export function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);
  const { song, isPlaying } = useSelector((state) => state.song);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Container>
      <h1>Your favorite songs</h1>
      {favorites.length === 0 && <span>Seems like you don't have any favorite songs</span>}

      <Wrapper>
        {song && <audio src={song.preview} autoPlay ref={audioRef} />}

        {favorites?.length > 0 &&
          favorites.map(({ song }) => <SongCard isFavoritePage song={song} key={song.id} />)}
      </Wrapper>
    </Container>
  );
}
