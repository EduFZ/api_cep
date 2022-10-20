import styled from "styled-components";
import { Colors, Shadows, BorderRadius, FontSizes, FontWeights, FontFamilies } from "../../shared/DesignTokens";

const Input = styled.option`
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

export function SearchEstado() {
    return (
        <>

            <select name="estado">
                <option selected="" value="">Selecione o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
            </select>

        </>
    );
}