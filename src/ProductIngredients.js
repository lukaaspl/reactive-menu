import React from 'react';

const ProductIngredients = props => {
    let ingredients = props.ingredients.split(',');

    ingredients = ingredients.map((ingredient, index) => {
        if (index === ingredients.length - 1)
            return <span>{ingredient.trim()}</span>

        return <span>{ingredient.trim()},</span>
    })

    return ingredients;
}

export default ProductIngredients;