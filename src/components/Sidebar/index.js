import { Link } from "react-router-dom";
import { Container, Content, Logo } from "./styles";

import { FiHeadphones, FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";

export function Sidebar() {
  const { song, isPlaying } = useSelector((state) => state.song);
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo>
            <h1>Deezer Musics</h1>
            <FiHeadphones size={26} />
          </Logo>
        </Link>

        {song.title && isPlaying && <span>Playing now: {song.title}</span>}

        <Link to="/favorites">
          <FiHeart size={18} /> Favorite Songs
        </Link>
      </Content>
    </Container>
  );
}
