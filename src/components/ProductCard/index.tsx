import './styles.css';

import ProductImg from 'assets/images/product.png';
import ButtonBuyCatalog from 'components/ButtonBuyCatalog';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h3>Audi Supra TT</h3>
                <div className="card-description-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
            </div>
            <div className="card-button-container">
            <ButtonBuyCatalog />
            </div>
        </div>
    );
}

export default ProductCard;