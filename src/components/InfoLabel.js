import React from 'react';

const InfoLabel = props => {
    const deliveryCost = props.settings.deliveryCost.toFixed(2);
    const freeDeliveryFrom = props.settings.freeDeliveryFrom.toFixed(2);

    if (props.view === "menu") {
        return (
            <div className="info-label">
                <div className="action-info" style={props.isVisible ? { opacity: 1 } : { opacity: 0 }}>
                    <i class="fas fa-question-circle"></i>
                    <span>Kliknij na nazwę produktu, aby dodać do zamówienia.</span>
                </div>

                <div className="delivery-info">
                    <div>
                        <i class="fas fa-truck"></i>
                        <span>
                            Koszt dostawy: <strong>{deliveryCost} PLN</strong> (GRATIS od <strong>{freeDeliveryFrom} PLN</strong>)
                    </span>
                    </div>
                </div>
            </div>
        )
    } else
        return null;
}

export default InfoLabel;