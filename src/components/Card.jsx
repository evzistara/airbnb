import Star from "../assets/star.png"


function Card(props){
    return(
<div className="card">
        <div className="card--image">
            <img src={props.img} alt="Katie Zaferes" />

            <div className="badge">
                <p>{props.status}</p>
            </div>
        </div>
    
        <div className="card--info">
            <div className="card--stats">
            <img src={Star} />
            <span >{props.score}</span><span className="gray"> ({props.reviewNumber}) USA</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">From ${props.price}
            </span> / person
            </p>
        </div>
</div>
    )
}

export default Card;