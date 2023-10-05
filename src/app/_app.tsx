

import { Provider } from "react-redux";
import store from '../stores/store';
import "../assets/styles/modules/tailwind.css"
import { appWithTranslation } from 'next-i18next';


interface AppProps {
  Component: React.ComponentType;
  pageProps: any; // You can replace 'any' with the actual type of your PageProps if you have one.
}

function MyApp({ Component, pageProps }: AppProps) {

  return (

    
    <>
 
      <Provider store={store}>
     
        <Component {...pageProps} />
    
    </Provider>
    </>



  );
}

export default  appWithTranslation(MyApp);
