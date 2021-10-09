import { useEffect, useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

import { SongCard } from "../../components/SongCard";

import { api } from "../../services/api";
import {
  Container,
  Content,
  LoadingMessage,
  LoadMoreButton,
  SearchContainer,
  SearchInput,
} from "./styles";
export function Home() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [musicSearch, setMusicSearch] = useState("");
  const [limit, setLimit] = useState(10);

  const audioRef = useRef(null);

  const { song, isPlaying } = useSelector((state) => state.song);

  useEffect(() => {
    async function getSongs() {
      const { data } = await api.get("/chart", {
        params: {
          index: 1,
          limit,
        },
      });

      setSongs(data);
      setIsLoading(false);
    }
    getSongs();
  }, [limit]);

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
      {song && <audio src={song.preview} autoPlay ref={audioRef} />}
      <SearchContainer>
        <SearchInput>
          <label htmlFor="musicSearch">
            <FiSearch color="#ccc" size={22} />
            <input
              type="search"
              id="musicSearch"
              value={musicSearch}
              onChange={({ target }) => setMusicSearch(target.value)}
              placeholder="Search a song..."
            />
          </label>
        </SearchInput>
      </SearchContainer>
      <Content>
        {isLoading ? (
          <LoadingMessage>carregando...</LoadingMessage>
        ) : (
          songs.tracks.data
            .filter((item) => item.title.toUpperCase().includes(musicSearch.toUpperCase()))
            .map((song) => <SongCard song={song} key={song.id} />)
        )}
      </Content>
      <LoadMoreButton onClick={() => setLimit(limit + 10)}>Carregar mais</LoadMoreButton>
    </Container>
  );
}
