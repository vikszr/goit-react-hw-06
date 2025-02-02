import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {contactsReducer} from "./contactsSlice.js";
import {filtersReducer} from "./filtersSlice.js";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
