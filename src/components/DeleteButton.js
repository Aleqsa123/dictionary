const DeleteButton = (props) => {
    return (
        <button onClick={
            (event) => {if (window.confirm(`Delete ${word.geoword}?`)) 
            {props.deleteWord(event, word.id)}
        }
            }>delete</button>
    )
}

export default DeleteButton;