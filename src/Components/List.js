
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
        return data.map((item, id) => {
            return <li key={id} className="list-group-item d-flex justify-content-between align-items-center mt-4">
                {item.name} - Stock: {item.quantity} - Price: {item.price}
                <button type="button" id={`${item.id}`} className={`${item.quantity}` ? 'btn btn-primary' : 'btn btn-primary not-allowed'}>Add to Cart</button>
            </li>
        })
    }

    if (props.name === 'shoppingCart') {
        return data.map((item, id) => {
            return <li key={id} class="list-group-item d-flex justify-content-between" aria-current="true">
                ${item.name} - Amount: ${item.quantity} - Total Price: ${item.price}
                <button type="button" id={item.id} class="btn btn-primary">Remove 1</button>
            </li>
        })
    }
}

