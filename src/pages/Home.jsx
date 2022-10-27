import Header from "../components/Header";
import UserImage from "../components/UserImage";
import AccountInfo from "../components/AccountInfo";
import UserInfo from "../components/UserInfo";
import "../styles/Home.css";

function Home() {
  return (
    <section className="homeContainer flex">
      <div>
        <UserImage />
      </div>

      <div className="content">
        <Header />
        <AccountInfo />
        <UserInfo />
      </div>
    </section>
  );
}

export default Home;
