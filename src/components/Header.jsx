import '../styles/Header.css'

function Header() {
  return (
    <header>
      <div className="user-bio">
        <h2>Alvin Okafor</h2>
        <p>@alvinokafor</p>
        <p>Frontend Engineer, UX Engineer</p>
      </div>

      <div className="joined">
        <p>Joined 21 Jan 2022</p>
      </div>
    </header>
  );
}

export default Header;
