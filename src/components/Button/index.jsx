import { Container } from "./styles";

export function Button({ icon: Icon, title, remove }) {
    return (
        <Container remove={ remove }>
            { Icon && <Icon size={16} /> }
            { title }
        </Container>
    );
};