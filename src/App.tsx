import './App.css';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
