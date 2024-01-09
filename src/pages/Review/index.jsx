import { FiClock } from "react-icons/fi";

import { Container, Info, Tags } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { BackBtn } from "../../components/BackBtn";
import { Tag } from "../../components/Tag";

export function Review() {
    return (
        <Container>
            <Header />

            <Section>
                <BackBtn />

                <h2>Hereditário</h2>

                <Info>
                    <img src="https://github.com/GuihCastro.png" alt="Foto de perfil do usuário" />

                    <span>Por Guilherme Castro</span>

                    <FiClock />

                    <span>08/01/23 às 10:00</span>
                </Info>

                <Tags>
                    <Tag title="Terror" />

                    <Tag title="Horror" />

                    <Tag title="Goétia" />
                </Tags>

                <p>
                    "Hereditário" é um filme de terror psicológico dirigido por Ari Aster, lançado em 2018. O enredo gira em torno da família Graham, que após a morte da avó, começa a desvendar segredos sombrios e perturbadores sobre suas origens familiares. O filme explora temas como hereditariedade, trauma e cultos ocultos, com uma narrativa complexa e muitos elementos de suspense.<br /><br />

                    A cinematografia é notável, com cenas intensas e uma atmosfera constantemente opressiva. A atuação, especialmente de Toni Collette no papel principal, é elogiada por sua intensidade e capacidade de transmitir emoções complexas.<br /><br />

                    "Hereditário" recebeu elogios por sua originalidade e por desafiar as convenções do gênero de terror. No entanto, algumas pessoas acharam a narrativa densa e o final polarizador, resultando em reações mistas da audiência. O filme é conhecido por suas imagens perturbadoras e pela capacidade de criar um clima de horror psicológico duradouro. Sua natureza única e provocadora o tornou um filme que gerou muita discussão na comunidade cinematográfica.<br /><br />
                </p>
            </Section>
        </Container>
    )
}