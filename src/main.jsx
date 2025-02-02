import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./App.jsx";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App/>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
