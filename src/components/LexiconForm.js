import GeoWord from "./GeoWord.js";
import IronWord from "./IronWord.js";
import AddButton from "./AddButton.js";
import styled from "styled-components";

const Header = styled.h2`
  font-size: 1em;
  text-align: center;
  color: green;
  margin: 15px;
`
const Form = styled.form`
  border: 2px solid blueviolet;
  border-radius: 30px;
  background-color: goldenrod;
  margin-top: 30px;
`

const LexiconForm = (props) => {
    return (
        <Form>
        <Header> add a new translation </Header>
        <GeoWord newGeoWord={props.newGeoWord} handleGeoWordChange={props.handleGeoWordChange}/>
        <IronWord newIronWord={props.newIronWord} handleIronWordChange={props.handleIronWordChange}/>
        <AddButton addWord = {props.addWord} />
      </Form>
    )
}

export default LexiconForm;