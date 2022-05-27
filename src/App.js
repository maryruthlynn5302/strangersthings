import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";
//api key, I understand the process on what we are supposed  to do with this, but I really am unsure on how.
// My worked with my cousin and we just did the firebase config instead. export const API = "https://strangers-things.herokuapp.com/api/2022-ftb-et-web-pt"
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/article/:id" element={<Article/>} />
          <Route
            path="/"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>
            }
          />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
