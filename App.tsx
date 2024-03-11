import React from 'react';
import AppNavigators from './src/navigation/AppNavigators';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GluestackUIProvider config={config}>
          <AppNavigators />
        </GluestackUIProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
