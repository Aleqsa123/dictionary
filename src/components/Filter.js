// Filters words according to given string
import styled from 'styled-components';

const Input = styled.input`
    width: 300px;
    height: 45px;
    border: 2px solid blueviolet;
    margin-top: 10px;
    border-radius: 30px;
    font-size: 1.5rem;
    padding-left: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  text-align: left;
  color: black;
  margin-left: 15px;
`;

const Filter = (props) => {
    return (
        <Div>
            Enter Georgian word you want to translate: <Input 
            id = "translate"
            value = { props.newSearch }
            onChange = { props.handleSearch }
            />
         </Div>
    )
}

export default Filter