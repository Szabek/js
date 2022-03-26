function Planets(props) {
    const planets = props.planets;
    const listItems = planets.map((planet) =>
        <li className="list-group-item">{planet}</li>
    );
    return (
        <ul className="list-group m-5">
            {listItems}
        </ul>
    );
}

export default Planets;