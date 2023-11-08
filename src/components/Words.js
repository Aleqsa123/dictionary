//Shows Phonebook Persons list according to Filter

const Words = (props) => {
    if (props.newSearch !== ''){
        return (    
            <div>
                {props.wordsToShow.map((word)=> {
                    return <p key={word.id}>{word.geoword} - {word.ironword} </p>})}
            </div>)
    } else { return <div> </div> }
  
}



export default Words;

//If needed I will use to add delete button after each words in "p" tag
/*<button onClick={
                            (event) => {if (window.confirm(`Delete ${word.geoword}?`)) 
                            {props.deleteWord(event, word.id)}
                        }
                            }>delete</button>*/