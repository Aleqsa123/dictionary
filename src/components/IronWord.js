const IronWord = (props) => {
    return (
        <div>
        Enter Iron translation of entered Georgian word: <input 
          id = "ironWord"
          value = { props.newIronWord }
          onChange = { props.handleIronWordChange }
        />
      </div>
    )
}

export default IronWord