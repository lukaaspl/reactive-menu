import React from 'react';

const Payment = props => {
    return (
        <React.Fragment>
            <h1>Opłać swoje zamówienie</h1>
            <a href="#" class="back-to-order" onClick={props.menuView}>Wróć do zamówienia</a>
        </React.Fragment>
    )
}

export default Payment;