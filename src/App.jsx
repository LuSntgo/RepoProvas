import { Grommet } from 'grommet';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from './pages';

import { theme } from './styles/theme';

function App() {
  return (
    <Grommet theme={theme}>
      <BrowserRouter><Pages /></BrowserRouter>
    </Grommet>
  );
}

export default App;
