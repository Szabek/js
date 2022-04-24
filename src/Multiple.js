const Multiple = ({name, number}) => (<header><h2>{name}</h2>
    <h3>
        <ul>{Array.from(Array(number + 1).keys()).map(element => {
            return (<li className="list-group-item">{element}</li>);
        })}</ul>
    </h3>
</header>);
export default Multiple;
