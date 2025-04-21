import { createRoot } from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import { GlobalStyles } from './styles/GlobalStyles';
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <GlobalStyles />
    <App />
  </CartProvider>
);