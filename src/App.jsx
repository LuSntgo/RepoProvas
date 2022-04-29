import { Grommet } from 'grommet';
import ToastAnimated from '../src/component/ui-lib/ui-lib';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { theme } from './styles/theme';
import SignIn from './pages/signIn';
import Homepage from './pages/homepage';
import SignUp from './pages/signUp';
import Search from './pages/search';

function App() {
  return (
    <AuthProvider> 
      <Grommet theme={theme}>
        <ToastAnimated />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </Grommet>
    </AuthProvider> 
  );
}

export default App;
