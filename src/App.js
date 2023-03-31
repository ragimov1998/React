import "./App.css";
// import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import Oz from "./ayribiwey/oz";
// import Portfolios from "./component/Portfolios";
// import Blog from "./component/Blog";
import Header from "./component/Header";
import Home from "./component/Home";
// import Journey from "./component/Journey";
// import { Ragimov } from "./Ragimov";

function App() {
  const HeaderList = ['Home','About','Contact','Block','Journey']
  return (
  <>
  <Header list={HeaderList}></Header>
  {/* <Ragimov></Ragimov>; */}
  {/* <Blog></Blog> */}
  {/* <Portfolios></Portfolios> */}
  {/* <Oz></Oz> */}
  {/* <Contact></Contact> */}
  {/* <Journey></Journey> */}
  <Home></Home>
  <Footer></Footer>
  </>
  )
}

export default App;
