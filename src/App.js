import "./App.scss";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";

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
