import "../styles/UserInfo.css";

function UserInfo({ location, twitter, github, company}) {
  return (
    <section className="user-info flex">
      <div className='info-div'>
        <div className="location">
          <i className="fa-solid fa-location-dot location-icon"></i>
          <span>{location}</span>
        </div>

        <div className="github">
          <i className="fa-solid fa-link"></i>
          <span> 
            <a href={github}>Github profile</a>
          </span>
        </div>

       
      </div>

      <div className="info-div">
      <div className="twitter">
          <i className="fa-brands fa-twitter"></i>
          <a href={`https:/twitter.com/${twitter}`}><span>@{twitter}</span></a>
        </div>

        <div className="company">
          <i className="fa-solid fa-building"></i>
          <span>Not available</span>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
