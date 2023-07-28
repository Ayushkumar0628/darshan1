import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Home from "./Home";
import Shows from "./Shows";
import Contact from "./Contact";
import Error from "./Error";
import Nav from "./components/Nav";
import Login from "./Login";
import Footer from "./components/Footer";
import Showlisting from "./Admin_component/Showlisting";
import AddShow from "./Admin_component/AddShow";
import Updateshow from "./Admin_component/Updateshow";
import Adminlogin from "./Admin_component/Addlogin";
import SingleVideo from "./SingleVideo";





function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " orange",
      helper: "red",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "orange",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
    <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shows" element={<Shows/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/singlevideo/:id" element={<SingleVideo/>}></Route>
          <Route path="*" element={<Error/>}></Route>
          <Route path="/showlisting" element={<Showlisting/>}></Route>
          <Route path="/show/add" element={<AddShow/>}></Route>
          <Route path='/show/edit/:code' element={<Updateshow/>}></Route>
          <Route path='/adminlogin' element={<Adminlogin/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

      </ThemeProvider>
      </Provider>

    </>
  );
}

export default App;


// json-server --watch src/Data/db.json --port 7000

// https://show-79ll.onrender.com/show
