import { Input } from "../../components/Input"
import { FiSearch } from "react-icons/fi"

import { Link } from "react-router-dom"
import { Container, Brand, Profile, Search } from "./styles"

export function Header() {
  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Profile>
        <div>
          <strong>Mayk Brito</strong>
          <Link to="/create">sair</Link>
        </div>

        <Link to="/profile">
          <img
            width={56}
            height={56}
            src="https://github.com/maykbrito.png"
            alt="Foto do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}
