import React from "react";
import { AuthProvider } from "./context/auth_context";
import Navigations from "./routes/navigation";

const App = () => {
  return (
    <AuthProvider>
      <Navigations />
    </AuthProvider>
  );
};

export default App;
