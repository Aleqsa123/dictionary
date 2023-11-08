// Filters words according to given string

const Filter = (props) => {
    return (
        <div>
            Enter Georgian word you want to translate: <input 
            id = "translate"
            value = { props.newSearch }
            onChange = { props.handleSearch }
            />
         </div>
    )
}

export default Filter