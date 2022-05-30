import './GlobalStyle/style.css';
import Template from './Components/Template';
import { AuthProvider } from './Components/hook/context';

const App = () => {
  return (
    <AuthProvider>
      <Template />
    </AuthProvider>
  );
};

export default App;
