// import { Provider } from "react";
// import store from '../stores/store';
// //@ts-ignore
// interface appAll{
//     Component:string
// }
// function MyApp ({Component:appAll,PageProps}){
//     return (
//         <Provider store={store}>
//             <Component {...PageProps } />
//         </Provider>
//     );
// }
// export default MyApp

import { Provider } from "react";
import store from '../stores/store';

interface AppProps {
  Component: React.ComponentType;
  pageProps: any; // You can replace 'any' with the actual type of your PageProps if you have one.
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
