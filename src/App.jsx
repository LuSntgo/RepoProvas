import { Grommet } from 'grommet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { theme } from './styles/theme';
import SignIn from './pages/signIn';
import Homepage from './pages/homepage';
import SignUp from './pages/signUp';

function App() {
  return (
    <AuthProvider> 
      <Grommet theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </Grommet>
    </AuthProvider> 
  );
}

export default App;
