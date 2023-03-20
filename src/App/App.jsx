import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import "swiper/swiper.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Footer } from "../components";
import Routes from '../config/Routes';

import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}></Header>
          <Routes></Routes>
          <Footer></Footer>
        </>
      )} />

    </BrowserRouter>
  );
}

export default App;
