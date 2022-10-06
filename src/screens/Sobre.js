import { Header } from './../common-components/Header/Header.js';
import { Card } from '../common-components/Card/Card.js';
import { TitleTwo } from '../common-components/TitleTwo/TitleTwo.js';
import { Description } from '../common-components/Description/Description.js';
import { Button } from '../common-components/Button/Button.js';
import { SearchCep } from '../common-components/SearchCep/SearchCep.js';

export function Sobre() {
    return (
    <div>
        <Header />
        <Card>
            <TitleTwo>Sobre Você</TitleTwo>
            <Description>Seu CEP</Description>
            <SearchCep />
            <Button>Clique aqui</Button>
        </Card>
    </div>
    );
}