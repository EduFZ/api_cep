import { Header } from './../common-components/Header/Header.js';
import { Card } from '../common-components/Card/Card.js';
import { TitleTwo } from '../common-components/TitleTwo/TitleTwo.js';
import { Description } from '../common-components/Description/Description.js';
import { Button } from '../common-components/Button/Button.js';
import { SearchCep } from '../common-components/SearchCep/SearchCep.js';
import { Footer } from '../common-components/Footer/Footer.js';
import { SearchEndereco } from '../common-components/SearchEndereco/SearchEndereco.js';
import { SearchRua } from '../common-components/SearchRua/SearchRua.js';
import { SearchNum } from '../common-components/SearchNum/SearchNum.js';
import { SearchBairro } from '../common-components/SearchBairro/SearchBairro.js';
import { SearchCidade } from '../common-components/SearchCidade/SearchCidade.js';
import { SearchEstado } from '../common-components/SearchEstado/SearchEstado.js';


export function Endereco() {
    
    return (
        <>
        <Header />
        <Card>
        <TitleTwo>Seu Endereço</TitleTwo>
        <br />
        
        <Description>CEP</Description>
        <SearchEndereco>{}</SearchEndereco>

        <Description>Rua</Description>
        <SearchRua />

        <Description>Número</Description>
        <SearchNum />

        <Description>Bairro</Description>
        <SearchBairro />

        <Description>Cidade</Description>
        <SearchCidade />

        <Description>Estado</Description>
        <SearchEstado />

        </Card>
        <Footer /></>

    );
}