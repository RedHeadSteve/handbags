export default function Button(props) {
    return(
        <>
            <button disabled={props.disabled}>
                {props.name}
            </button>
        </>
    )
}