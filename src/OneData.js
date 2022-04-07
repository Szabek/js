function OneData(props) {
console.log(props)
    
    return (
        <div className="card m-5">
            <img className="card-img-top" src={props.oneData.image} alt={props.oneData.cardTitle}/>
            <div className="card-body">
                <h5 className="card-title">{props.oneData.cardTitle}</h5>
                <p className="card-text">{props.oneData.cardDescription}</p>
                <a href={props.oneData.button.url} className="btn btn-primary">{props.oneData.button.label}</a>
            </div>
        </div>
    );
}

export default OneData;
