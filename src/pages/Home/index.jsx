import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Title } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Movie } from "../../components/Movie";

export function Home() {
    return (
        <Container>
            <Header />

            <Title>
                <h2>Meus filmes</h2>

                <Link to="/new">
                    <FiPlus />
                    Adicionar filme
                </Link>
            </Title>

            <Section>
                <Movie data={{
                    title: "Hereditário",
                    description: "Hereditário é um filme de terror psicológico dirigido por Ari Aster, lançado em 2018. O enredo gira em torno da família Graham, que após a morte da avó, começa a desvendar segredos sombrios e perturbadores sobre suas origens familiares. O filme explora temas como hereditariedade, trauma e cultos ocultos, com uma narrativa complexa e muitos elementos de suspense. A cinematografia é notável, com cenas intensas e uma atmosfera constantemente opressiva. A atuação, especialmente de Toni Collette no papel principal, é elogiada por sua intensidade e capacidade de transmitir emoções complexas. Hereditário recebeu elogios por sua originalidade e por desafiar as convenções do gênero de terror. No entanto, algumas pessoas acharam a narrativa densa e o final polarizador, resultando em reações mistas da audiência. O filme é conhecido por suas imagens perturbadoras e pela capacidade de criar um clima de horror psicológico duradouro. Sua natureza única e provocadora o tornou um filme que gerou muita discussão na comunidade cinematográfica.",
                    tags: [
                        { id: 1, name: "Terror" },
                        { id: 2, name: "Horror" },
                        { id: 3, name: "Goétia" }
                    ]
                }} />

                <Movie data={{
                    title: "Hereditário",
                    description: "Hereditário é um filme de terror psicológico dirigido por Ari Aster, lançado em 2018. O enredo gira em torno da família Graham, que após a morte da avó, começa a desvendar segredos sombrios e perturbadores sobre suas origens familiares. O filme explora temas como hereditariedade, trauma e cultos ocultos, com uma narrativa complexa e muitos elementos de suspense. A cinematografia é notável, com cenas intensas e uma atmosfera constantemente opressiva. A atuação, especialmente de Toni Collette no papel principal, é elogiada por sua intensidade e capacidade de transmitir emoções complexas. Hereditário recebeu elogios por sua originalidade e por desafiar as convenções do gênero de terror. No entanto, algumas pessoas acharam a narrativa densa e o final polarizador, resultando em reações mistas da audiência. O filme é conhecido por suas imagens perturbadoras e pela capacidade de criar um clima de horror psicológico duradouro. Sua natureza única e provocadora o tornou um filme que gerou muita discussão na comunidade cinematográfica.",
                    tags: [
                        { id: 1, name: "Terror" },
                        { id: 2, name: "Horror" },
                        { id: 3, name: "Goétia" }
                    ]
                }} />

                <Movie data={{
                    title: "Hereditário",
                    description: "Hereditário é um filme de terror psicológico dirigido por Ari Aster, lançado em 2018. O enredo gira em torno da família Graham, que após a morte da avó, começa a desvendar segredos sombrios e perturbadores sobre suas origens familiares. O filme explora temas como hereditariedade, trauma e cultos ocultos, com uma narrativa complexa e muitos elementos de suspense. A cinematografia é notável, com cenas intensas e uma atmosfera constantemente opressiva. A atuação, especialmente de Toni Collette no papel principal, é elogiada por sua intensidade e capacidade de transmitir emoções complexas. Hereditário recebeu elogios por sua originalidade e por desafiar as convenções do gênero de terror. No entanto, algumas pessoas acharam a narrativa densa e o final polarizador, resultando em reações mistas da audiência. O filme é conhecido por suas imagens perturbadoras e pela capacidade de criar um clima de horror psicológico duradouro. Sua natureza única e provocadora o tornou um filme que gerou muita discussão na comunidade cinematográfica.",
                    tags: [
                        { id: 1, name: "Terror" },
                        { id: 2, name: "Horror" },
                        { id: 3, name: "Goétia" }
                    ]
                }} />
            </Section>
        </Container>
    );
};