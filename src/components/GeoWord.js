const GeoWord = (props) => {
    return (
        <div>
        Enter new Georgian word: <input 
          id = "geoWord"
          value = { props.newGeoWord }
          onChange = { props.handleGeoWordChange }
          />
      </div>
    )
}

export default GeoWord