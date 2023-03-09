import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import { Provider } from "react-redux";
import { PrivateRoute } from "./components";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";
import TodoDash from "./components/Dasboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<TodoDash />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
