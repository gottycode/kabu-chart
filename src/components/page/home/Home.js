import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import HomeNav from "./HomeNav";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <HomeNav />
    </div>
  );
};

export default Home;
