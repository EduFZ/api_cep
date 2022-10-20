import React from 'react';
import { useForm } from 'react-hook-form';
import { Footer } from '../common-components/Footer/Footer';
import { Header } from '../common-components/Header/Header';
import styled from 'styled-components';
import { Colors, BorderRadius, FontSizes, FontFamilies } from '../shared/DesignTokens';
import { Card } from '../common-components/Card/Card';
import { Button } from '../common-components/Button/Button';
import { TitleTwo } from '../common-components/TitleTwo/TitleTwo';


export function MostraCep() {

    

    const { register, handleSubmit, setValue, setFocus } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            // register({ name: 'address', value: data.logradouro });
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
        });
    }

    const Input = styled.input`
    display: flex;
    width: 50%;
    height: 5vh;
    margin: 2vh 0 2vh 0;
    padding: 0 0 0 1vw;
    background-color: ${Colors.WHITE};
    border-radius: ${BorderRadius.BORDER_ALL};
    font-size: ${FontSizes.ONE};
    font-family: ${FontFamilies.PRIMARY};
    border: 1px solid ${Colors.ORANGE_ONE};
    outline: none;
    background: ${Colors.WHITE};
`;

    return (

        <>

        <Header />

        <Card>

        <TitleTwo>Digite seu CEP</TitleTwo> <br />

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                CEP:
                <Input type="text" {...register("cep")} onBlur={checkCEP} />
            </label>
            <label>
                Rua:
                <Input type="text" {...register("address")} />
            </label>
            <label>
                Número:
                <Input type="text" {...register("addressNumber")} />
            </label>
            <label>
                Bairro:
                <Input type="text" {...register("neighborhood")} />
            </label>
            <label>
                Cidade:
                <Input type="text" {...register("city")} />
            </label>
            <label>
                Estado:
                <Input type="text" {...register("uf")} />
            </label>
            <Button>Enviar</Button>
        </form>

        </Card>

        <Footer />

        </>
        
    );


    

}