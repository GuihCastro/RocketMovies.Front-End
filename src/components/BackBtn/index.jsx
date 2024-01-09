import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

export function BackBtn() {
    return (
        <Container to="/">
            <FiArrowLeft />
            Voltar
        </Container>
    );
};