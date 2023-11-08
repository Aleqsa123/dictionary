import GeoWord from "./GeoWord.js";
import IronWord from "./IronWord.js";
import AddButton from "./AddButton.js";

const LexiconForm = (props) => {
    return (
        <form>
        <GeoWord newGeoWord={props.newGeoWord} handleGeoWordChange={props.handleGeoWordChange}/>
        <IronWord newIronWord={props.newIronWord} handleIronWordChange={props.handleIronWordChange}/>
        <AddButton addWord = {props.addWord} />



      </form>
    )
}

export default LexiconForm;