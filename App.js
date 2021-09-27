import React from "react";
import StartPoint from "./StartPoint";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from './src/configs/state-management/reducer'; 
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <StartPoint />
    </Provider>
  );
}
