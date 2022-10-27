import "../styles/UserInfo.css";

function UserInfo() {
  return (
    <section className="user-info flex">
      <div className='info-div'>
        <div className="location">
          <i className="fa-solid fa-location-dot location-icon"></i>
          <span>Nigeria</span>
        </div>

        <div className="github">
          <i className="fa-solid fa-link"></i>
          <span> 
            <a href="https://github.com/alvinokafor">Github Link</a>
          </span>
        </div>

       
      </div>

      <div className="info-div">
      <div className="twitter">
          <i className="fa-brands fa-twitter"></i>
          <span>@retrosearth</span>
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
