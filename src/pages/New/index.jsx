import { Container, Form, Tags, Buttons } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { BackBtn } from "../../components/BackBtn";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

export function New() {
    return (
        <Container>
            <Header />

            <Section>
                <BackBtn />

                <Form>
                    <h2>Novo filme</h2>

                    <div>
                        <Input placeholder="Título" />

                        <Input placeholder="Sua note (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <h3>Marcadores</h3>

                    <Tags>
                        <MovieItem value="Terror" />

                        <MovieItem isNew value="" placeholder="Novo marcador" />
                    </Tags>

                    <Buttons>
                        <Button title="Excluir filme" remove />

                        <Button title="Salvar alterações" />
                    </Buttons>
                </Form>
            </Section>
        </Container>
    );
};