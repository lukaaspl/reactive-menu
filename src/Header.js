import React from 'react';
import InfoLabel from './InfoLabel';

const Header = props => {
    const orderedProducts = props.items.filter(item => item.active).length;

    return (
        <React.Fragment>
            <header>
                <h1>Pizzeria Romana - <span>najlepsza pizza w mieście!</span></h1>
            </header>
            <InfoLabel view={props.view} isVisible={!orderedProducts} settings={props.settings} />
        </React.Fragment>
    )
}

export default Header;