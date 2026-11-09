function Box(props) {
    return (
        <div>
            <p>{props.text}</p>

            <button onClick={props.onClick}>Kattints ide!</button>
        </div>
    );
}

export default Box;
