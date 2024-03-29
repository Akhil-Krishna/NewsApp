function Card(props){
    return (
        <div className="card">
            <div className="image">
                <img src={props.item.urlToImage!=null?props.item.urlToImage:"https://t4.ftcdn.net/jpg/00/86/97/33/360_F_86973387_gfJzaJBSRE5vOk9TtYETLZc9yCgQaT26.jpg"} alt="" />
            </div>
            <div className="rest">
            <h3>{props.item.title}</h3><br />
           <p>{props.item.description?.substring(0,150)}... <a href={props.item.url} target="_blank">read more</a></p>
            <br />
            <p style={{color:"gray"}}>Author: {props.item.author}</p>
            </div>
        </div>
    )
}

export default Card;