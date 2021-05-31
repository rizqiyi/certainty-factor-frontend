import React from "react";
import { AuthProvider } from "./context/auth_context";
import { MainProvider } from "./context/main_context";
import Navigations from "./routes/navigation";

const App = () => {
  return (
    // apply semua provider ke navigations
    // yang mana navigations disini berisi semua component
    <AuthProvider>
      <MainProvider>
        <Navigations />
      </MainProvider>
    </AuthProvider>
  );
};

export default App;
