import React from 'react';
import QuantityForm from './QuantityForm';
import ProductIngredients from './ProductIngredients';

const Item = props => {
    const { id, name, ingredients, quantity, price, active, changeState, changeProductQuantity } = props;
    const productPrice = price.toFixed(2);
    const productTotalValue = (productPrice * quantity).toFixed(2);

    return (
        <React.Fragment>
            <tr className={active ? "selected" : null}>
                <td className="product-no">{id}</td>

                <td
                    onClick={() => changeState(id)}
                    className={active ? "product-name selected" : "product-name"}
                >
                    {active && <i class="fas fa-check-circle"></i>}
                    {name}
                </td>

                <td className="product-quantity">
                    {(active && quantity) ?
                        <QuantityForm
                            id={id}
                            changeProductQuantity={changeProductQuantity}
                            quantity={quantity}
                        />
                        : <span style={{ opacity: "0.3" }}>-</span>}
                </td>

                <td className="product-price">{productPrice} PLN</td>

                <td className="product-total-value">
                    {productTotalValue > 0 ? <strong>{productTotalValue} PLN</strong> : <span style={{ opacity: "0.3" }}>-</span>}
                </td>

            </tr>
            <tr>
                <td className="ingredients" colspan="5">
                    <ProductIngredients ingredients={ingredients} />
                </td>
            </tr>
        </React.Fragment>
    )
}

export default Item;