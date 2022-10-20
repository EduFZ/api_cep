import { Endereco } from './screens/Endereco';
import { Sobre } from './screens/Sobre';
import { NotFound } from './screens/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { MostraCep } from './screens/MostraCep';


export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/endereco/:cep' element={<Endereco />} />  Não utilizado */}
          {/* <Route path='/' element={<Sobre />} />  Não utilizado */}
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<MostraCep />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;