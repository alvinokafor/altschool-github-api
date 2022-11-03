import useFetch from "../hooks/useFetch";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import UserImage from "../components/UserImage";
import AccountInfo from "../components/AccountInfo";
import UserInfo from "../components/UserInfo";
import AvatarLoader from "../components/loader/AvatarLoader";
import HomeLoader from "../components/loader/HomeLoader";
import "../styles/Home.css";

function Home() {

  //fetches data from the api
  const { data: profile } = useFetch(
    "https://api.github.com/users/alvinokafor"
  );

  return (
    <>

      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page that contains github profile details of user"/>
        <link rel="canonical" href="/" />
      </Helmet>

      {/* checks if data coming from the api is populatd with info or available */}
      {Object.keys(profile).length > 0 && (
        <section className="homeContainer flex">
          <div>
            <UserImage userImg={profile.avatar_url} />
          </div>

          <div className="content">
            <Header
              name={profile.name}
              username={profile.login}
              bio={profile.bio}
            />

            <AccountInfo
              repos={profile.public_repos}
              followers={profile.followers}
              following={profile.following}
            />

            <UserInfo
              location={profile.location}
              twitter={profile.twitter_username}
              github={profile.html_url}
              company={profile.company}
            />
          </div>
        </section>
      )}

      {/* if data isn't yet available, display a loading state */}
      {Object.keys(profile).length === 0 && (
        <section className="homeContainer flex">
          <div>
            <AvatarLoader />
          </div>

          <div className="content">
            <HomeLoader />
            <HomeLoader />
            <HomeLoader />
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
