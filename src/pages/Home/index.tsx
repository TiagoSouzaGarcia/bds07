import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
      </div>
      <Link to="/GitHubApiSearch">
        <button className="btn btn-secondary btn-lg start-button">
          Começar
        </button>
      </Link>
    </div>
  );
};

export default Home;
