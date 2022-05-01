import './styles.css';

const ButtonSearchCatalog = () => {
  return (
    <div className="btn-container">
      <div className="btn-text-field">
        <p>Digite sua busca</p>
      </div>
      <div>
      <button className="btn btn-icon-search">
          <h6>BUSCAR</h6>
        </button>
      </div>
    </div>
  );
};

export default ButtonSearchCatalog;
