
export function List(props) {
    return <div className={props.container}>
        <div className={props.style} role="alert">
            <ul className="list-group" id={props.id}>
                <li className="list-group-item active" aria-current="true">{props.header}</li>
            </ul>
        </div>
    </div>
}