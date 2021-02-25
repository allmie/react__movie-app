import Header from "Components/Header";
import HomeComponent from "Pages/Home";
import GlobalStyles from "Components/GlobalStyles";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HomeComponent />
      <GlobalStyles />
      <Footer />
    </div>
  );
};

export default App;
