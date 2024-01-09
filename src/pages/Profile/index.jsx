import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
// import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";
import { BackBtn } from "../../components/BackBtn";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return (
        <Container>
            <header>
                <BackBtn />
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/GuihCastro.png" alt="Imagem de avatar do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input type="text" placeholder="Nome" icon={FiUser} />

                <Input type="email" placeholder="E-mail" icon={FiMail} />

                <Input type="password" placeholder="Senha atual" icon={FiLock} />

                <Input type="password" placeholder="Nova senha" icon={FiLock} />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
};