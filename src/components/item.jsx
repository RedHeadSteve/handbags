import bag_1 from "../assets/bag_1.png"
import bag_2 from "../assets/bag_2.png"
import bag_3 from "../assets/bag_3.png"
import bag_4 from "../assets/bag_4.png"

export default function Item(props) {
    let image;
    if (props.img === "bag_1") {
        image = bag_1
    } else if (props.img === "bag_2") {
        image = bag_2
    } else if (props.img === "bag_3") {
        image = bag_3
    } else {
        image = bag_4
    }
        return (
        <>
            <article>
                <span>{props.label}</span>
                <img src={image} alt={props.name}/>
                <p>{props.name}</p>
                <h4>{props.price}</h4>
            </article>
        </>
    )
}