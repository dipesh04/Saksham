// import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Landing_Page from "./components/Landing/Landing";
// function RequireAuth({ children }) {
//   var token = localStorage.getItem("authToken");
//   console.log(token);
//   if (token == null) {
//     localStorage.removeItem("userType");
//     localStorage.removeItem("userId");
//     return <Navigate to="/login" />;
//   } else {
//     var id = localStorage.getItem("userId");
//     if (id == null) {
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userType");
//       return <Navigate to="/login" />;
//     }
//     const details = jwt_decode(localStorage.getItem("authToken"));
//     var exp = details.exp * 1000;
//     if (new Date(exp) < new Date() || details.id != id) {
//       localStorage.removeItem("userId");
//       localStorage.removeItem("userType");
//       localStorage.removeItem("authToken");
//       return <Navigate to="/login" />;
//     } else {
//       return children;
//     }
//   }
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Landing_Page/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;