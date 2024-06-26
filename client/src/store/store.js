import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";
 import themeSlice from "../theme/themeSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
// import { version } from "mongoose";
const rootReducer = combineReducers({
  user: userSlice,
   theme:themeSlice
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
