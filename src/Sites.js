function Sites(props) {
    const sites = props.sites;
    const listItems = sites.map((site) =>
        <li className="nav-item">
            <a className="nav-link" href={site.link} >{site.description}</a>
        </li>
    );
    return (
        <ul className="nav">
            {listItems}
        </ul>
    );
}

export default Sites;