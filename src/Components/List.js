import React from 'react'
import PropTypes from 'prop-types';

export function List(props) {
    return <div className={props.container}>
        <div className={props.style} role="alert">
            <ul className="list-group" id={props.id}>
                <li className="list-group-item active" aria-current="true">{props.header}</li>
                {props.children}
            </ul>
        </div>
    </div>
}

export function ListItem(props) {
    const data = props.data;
    if (props.name === 'groceries') {
        return data.map((grocery, id) => {
            return <li key={id} className="list-group-item d-flex justify-content-between align-items-center mt-4">
                {grocery.name} - Stock: {grocery.quantity} - Price: {grocery.price}
                <button type="button" id={`${grocery.id}`} className={`${grocery.quantity}` ? 'btn btn-primary' : 'btn btn-primary not-allowed'}>Add to Cart</button>
            </li>
        })
    }

    if (props.name === 'shoppingCart') {
        return data.map((grocery, id) => {
            return <li key={id} class="list-group-item d-flex justify-content-between" aria-current="true">
                ${grocery.name} - Amount: ${grocery.quantity} - Total Price: ${grocery.price}
                <button type="button" id={grocery.id} class="btn btn-primary">Remove 1</button>
            </li>
        })
    }
}


List.propTypes = {
    container: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}