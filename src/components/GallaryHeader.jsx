export default function  ()  {
  return (
    <header>
      <img
        className="symbol"
        src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
        alt=""
      ></img>
      <nav>
        <ul className="nav-bar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </nav>
      <a className="contact" href="#">
        <button>Contact</button>
      </a>
    </header>
  );
};

