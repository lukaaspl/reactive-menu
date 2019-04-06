import React from 'react';

const Summary = props => {
    const activeItems = props.items.filter(item => item.active);
    let deliveryCost = props.settings.deliveryCost;
    const freeDeliveryFrom = props.settings.freeDeliveryFrom;

    let orderedProducts = 0;
    activeItems.forEach(item => orderedProducts += item.quantity);

    let orderValue = 0;
    activeItems.forEach(item => orderValue += (item.price * item.quantity));

    let freeDelivery = false;
    let neededToHaveFreeDelivery = freeDeliveryFrom - orderValue;

    if (neededToHaveFreeDelivery <= 0) {
        freeDelivery = true;
        deliveryCost = 0;
    }

    let totalOrderValue = (orderValue + deliveryCost).toFixed(2);

    return (
        <div className="summary">
            <div className="ordered-products-no">
                Liczba zamówionych produktów: <strong>{orderedProducts}</strong>
                {orderedProducts > 0 &&
                    <button className="payment-btn" onClick={props.paymentView}>Przejdź do płatności</button>}
            </div>

            <div className="order-summary">
                <p>Suma zamówienia: <strong>{orderValue.toFixed(2)} PLN</strong></p>

                {
                    !freeDelivery ?
                        (<p>Koszt dostawy: <strong>{freeDelivery ? 0 : deliveryCost.toFixed(2)} PLN</strong></p>) :
                        (<p className="free-delivery">
                            <i class="fas fa-star"></i>
                            Dostawa GRATIS!
                        </p>)
                }


                {
                    !freeDelivery &&
                    <p style={{ fontSize: "11px", color: "darkred" }}><strong>{neededToHaveFreeDelivery.toFixed(2)} PLN</strong> do darmowej dostawy</p>
                }

                <p className="order-total-value">
                    Łącznie do zapłaty: {orderValue > 0 ? totalOrderValue : orderValue} PLN
                </p>
            </div>
        </div>
    )
}

export default Summary;