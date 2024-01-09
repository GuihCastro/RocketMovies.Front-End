import { Link } from "react-router-dom";

import { Container, Brand, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
    return (
        <Container>
            <Brand>
                RocketMovies
            </Brand>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <Link to="/profile">Guilherme Castro</Link>
                    <Link to="/">sair</Link>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/GuihCastro.png" alt="Foto de perfil do usuário" />
                </Link>
            </Profile>
        </Container>
    );
};