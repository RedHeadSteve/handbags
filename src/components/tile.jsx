import brand from "../assets/brand.png"
import story from "../assets/our_story.png"

export default function Tile(props) {
    let image;
    if (props.img === "brand") {
        image = brand
    } else {
        image = story
    }

    if (props.img !== undefined) {
        return (
            <>
                <section>
                    <img src={image} alt={props.img}/>
                </section>
            </>
        )
    } else if (props.paragraph2 !== undefined) {
        return (
            <>
                <section>
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                    <p>{props.paragraph2}</p>
                </section>
            </>
        )
    } else {
        return (
            <>
                <section>
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                </section>
            </>
        )
    }
}