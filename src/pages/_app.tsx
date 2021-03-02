import { UserProvider } from '../contexts/UserContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider avatar="" name="">
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
