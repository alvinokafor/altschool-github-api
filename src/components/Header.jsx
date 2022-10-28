import '../styles/Header.css'

function Header({ name, username, bio}) {
  return (
    <header>
      <div className="user-bio">
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{bio}</p>
      </div>

      <div className="joined">
        <p>Joined 21 Jan 2022</p>
      </div>
    </header>
  );
}

export default Header;
