import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  text-align: left;
  color: black;
  margin-left: 15px;
`;

const Input = styled.input`
    width: 300px;
    height: 45px;
    border: 2px solid blueviolet;
    margin-top: 10px;
    border-radius: 30px;
    font-size: 1.5rem;
    padding-left: 20px;
`;

const IronWord = (props) => {
    return (
        <Div>
        Enter Ossetian translation of the word: <Input 
          id = "ironWord"
          value = { props.newIronWord }
          onChange = { props.handleIronWordChange }
        />
      </Div>
    )
}

export default IronWord