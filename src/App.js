import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import AppRoutes from "./routes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;