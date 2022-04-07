function AllData(props) {
    console.log(props)

    const allData = props.allData;
    const listItems = allData.map((oneData) =>
        <div className="card m-5">
            <img className="card-img-top" src={oneData.image} alt={oneData.cardTitle}/>
            <div className="card-body">
                <h5 className="card-title">{oneData.cardTitle}</h5>
                <p className="card-text">{oneData.cardDescription}</p>
                <a href={oneData.button.url} className="btn btn-primary">{oneData.button.label}</a>
            </div>
        </div>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}

export default AllData;
