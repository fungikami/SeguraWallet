// global styles
import PropTypes from 'prop-types';

// styles
import 'scss/style.scss';
import 'styles/globals.css';

// third-party
import { Provider } from 'react-redux';

// project import
import NavigationScroll from 'layout/NavigationScroll';
// import RTLLayout from 'components/ui-component/RTLLayout';
import Locales from 'components/ui-component/Locales';
import Snackbar from 'components/ui-component/extended/Snackbar';

import { store } from 'store';
import ThemeCustomization from 'themes';

// import { ConfigProvider } from 'contexts/ConfigContext';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { FirebaseProvider as AuthProvider } from '../contexts/FirebaseContext';
// import { Auth0Provider as AuthProvider } from '../contexts/Auth0Context';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';

const Noop = ({ children }) => <> {children} </>;

Noop.propTypes = {
  children: PropTypes.node
};

// ==============================|| APP ||============================== //

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      {/* <ConfigProvider> */}
      <ThemeCustomization>
        {/* <RTLLayout> */}
        <Locales>
          <NavigationScroll>
            <AuthProvider>
              <>
                {getLayout(<Component {...pageProps} />)}
                <Snackbar />
              </>
            </AuthProvider>
          </NavigationScroll>
        </Locales>
        {/* </RTLLayout> */}
      </ThemeCustomization>
      {/* </ConfigProvider> */}
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default App;
