import Star from "../assets/star.png"


function Card(props){

    let badgeText;
    if(props.item.openSpots === 0) {
        badgeText ="SOLD OUT"
    } else if (props.item.place === "online") {
        badgeText = "ONLINE"
    }
    return(
<div className="card">
        <div className="card--image">
            <img src={props.item.img} alt="Katie Zaferes" />

            {badgeText && <div className="badge">
                <p>{badgeText}</p>
        

            </div>}
        </div>
    
        <div className="card--info">
            <div className="card--stats">
            <img src={Star} />
            <span >{props.item.score}</span><span className="gray"> ({props.item.reviewNumber}) {props.item.place}</span>
            </div>
            <p>{props.item.name}</p>
            <p><span className="bold">From ${props.item.price}
            </span> / person
            </p>
        </div>
</div>
    )
}

export default Card;