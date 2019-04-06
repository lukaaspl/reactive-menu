import React from 'react';

const QuantityForm = props => {
    const { id, changeProductQuantity, quantity } = props;

    return (
        <React.Fragment>
            <i className="fas fa-minus-circle quantityChanger" onClick={() => changeProductQuantity(id, "-")} />
            <span>{quantity}</span>
            <i className="fas fa-plus-circle quantityChanger" onClick={() => changeProductQuantity(id, "+")} />
        </React.Fragment>
    )
}

export default QuantityForm;