import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

//Redux external imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Redux local imports
import rootReducer from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Redux
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
