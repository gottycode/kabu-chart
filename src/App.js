import "./App.scss";
import Header from "./components/UI/Header";
import Sidebar from "./components/UI/Sidebar";
import Main from "./components/UI/Main";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
