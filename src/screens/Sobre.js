import { Header } from './../common-components/Header/Header.js';
import { Card } from '../common-components/Card/Card.js';
import { TitleTwo } from '../common-components/TitleTwo/TitleTwo.js';
import { Description } from '../common-components/Description/Description.js';
import { Button } from '../common-components/Button/Button.js';
import { SearchCep } from '../common-components/SearchCep/SearchCep.js';
import { Footer } from '../common-components/Footer/Footer.js';
import { Link } from 'react-router-dom';

export function Sobre({ cep, logradouro, bairro, localidade, uf }) {
    return (
    <div>
        <Header />
        <Card>
            <TitleTwo>Sobre Você</TitleTwo>
            <Description>Seu CEP</Description>
            <SearchCep />
            <Button to={`/mostracep`}>Clique aqui</Button>
        </Card>
        <Footer />
    </div>
    );
}