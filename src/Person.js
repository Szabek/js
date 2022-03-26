function Person(props) {
    
    return (
        <div className="card m-5">
            <img className="card-img-top" src={props.person.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.person.cardTitle}</h5>
                <p className="card-text">{props.person.cardDescription}</p>
                <a href={props.person.button.url} className="btn btn-primary">{props.person.button.label}</a>
            </div>
        </div>
    );
}

export default Person;