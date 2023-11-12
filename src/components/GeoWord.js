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

const GeoWord = (props) => {
    return (
        <Div>
        Enter new Georgian word: <Input 
          id = "geoWord"
          value = { props.newGeoWord }
          onChange = { props.handleGeoWordChange }
          />
      </Div>
    )
}

export default GeoWord