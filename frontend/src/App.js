import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import { Provider } from "react-redux";
import { PrivateRoute } from "./components";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";
import Dashboard from "./pages/Dashboard";
import Createtask from "./pages/Createtask";
import Store from "./pages/Store";
import Profile from "./pages/Profile";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            >
              <Route path="" element={<Dashboard />} />
              <Route path="createtask" element={<Createtask />} />
              <Route path="store" element={<Store />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
