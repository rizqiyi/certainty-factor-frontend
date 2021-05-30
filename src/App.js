import React from "react";
import { AuthProvider } from "./context/auth_context";
import { MainProvider } from "./context/main_context";
import Navigations from "./routes/navigation";

const App = () => {
  return (
    <AuthProvider>
      <MainProvider>
        <Navigations />
      </MainProvider>
    </AuthProvider>
  );
};

export default App;
