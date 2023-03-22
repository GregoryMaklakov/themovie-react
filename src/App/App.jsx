import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import "swiper/swiper.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Footer } from "../components";
import { Router } from '../config/Router';


export const App = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}></Header>
          <Router>
          </Router>
          <Footer></Footer>
        </>
      )} />
    </BrowserRouter>
  );
}
