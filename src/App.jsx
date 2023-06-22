import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/:user_id" exact element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
