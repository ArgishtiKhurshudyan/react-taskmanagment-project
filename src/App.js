import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleBoard from "./pages/SingleBoard";
import { ContextProvider } from "./state";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContext } from "./state/AuthContext";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div>
      <AuthContext>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/boards/:boardId" element={<SingleBoard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<PrivateRoute ><Profile /></PrivateRoute>} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </AuthContext>
    </div>
  );
}

export default App;
