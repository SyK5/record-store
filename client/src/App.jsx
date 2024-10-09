import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";

import RecordsList from "./components/RecordsList";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/records" element={<RecordsList />} />
        <Route path="/records/:genre" element={<RecordsList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
