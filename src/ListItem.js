import React from 'react';
import Item from './Item';

const ListItem = props => {
    const products = props.items.map(item => (
        <Item
            id={item.id}
            name={item.name}
            ingredients={item.ingredients}
            quantity={item.quantity}
            price={item.price}
            active={item.active}
            changeState={props.changeState}
            changeProductQuantity={props.changeProductQuantity}
        />
    ));

    return (
        <table className="menu-table" cellspacing="0">
            <tr>
                <th>Nr</th>
                <th>Nazwa</th>
                <th>Ilość</th>
                <th>Cena</th>
                <th>Wartość</th>
            </tr>
            {products}
        </table>
    )
}

export default ListItem;