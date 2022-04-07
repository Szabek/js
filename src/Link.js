function Link(props) {

    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link.link}>{props.link.description}</a>
        </li>
    );
}

export default Link;
