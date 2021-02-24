import Header from "Components/Header";
import HomeComponent from "Pages/Home";
import GlobalStyles from "Components/GlobalStyles";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Movie page</h1>
      <HomeComponent />
      <GlobalStyles />
    </div>
  );
};

export default App;
