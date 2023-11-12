//Shows Phonebook Persons list according to Filter
import styled from 'styled-components';

const Par = styled.p`
  font-size: 1em;
  text-align: left;
  color: black;
  margin: 10px;
  margin-left: 15px;
`;

const Words = (props) => {
    if (props.newSearch !== ''){
        return (    
            <div>
                {props.wordsToShow.map((word)=> {
                    return <Par key={word.id}>{word.geoword} - {word.ironword} </Par>})}
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