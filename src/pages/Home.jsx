import Header from "../components/Header";
import UserImage from "../components/UserImage";
import AccountInfo from "../components/AccountInfo";
import UserInfo from "../components/UserInfo";
import AvatarLoader from "../components/loader/AvatarLoader";
import HomeLoader from "../components/loader/HomeLoader";
import "../styles/Home.css";

function Home({ profile }) {
  return (
    <>
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
