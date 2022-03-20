import React from "react";

import { UIContextProvider } from "./lib/context/UIContext/UIContextProvider";
import { AuthContextProvider } from "./lib/context/AuthContext/AuthContextProvider";
import { ConfirmationContextProvider } from "./lib/context/ConfirmationContext/ConfirmationContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";

//Partials
import { Header } from "./components/partials/Header/Header";
import { Footer } from "./components/partials/Footer/Footer";
import { Routes } from "./routes/Routes";
import { ToastContainer } from "react-toastify";

//Styles
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

const config = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App container">
      <ToastContainer {...config} />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <UIContextProvider>
            <ConfirmationContextProvider>
              <Routes />
            </ConfirmationContextProvider>
          </UIContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
