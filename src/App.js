import { Endereco } from './screens/Endereco';
import { Sobre } from './screens/Sobre';
import { NotFound } from './screens/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';

export function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/endereco/:cep' element={<Endereco />} />
          <Route path='/' element={<Sobre />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;