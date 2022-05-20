import ReactDOM from 'react-dom/client';
import { ContextProvider } from './context';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />{' '}
  </ContextProvider>
);

reportWebVitals();
