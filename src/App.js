import { useState, useEffect } from 'react';
import Title from './components/Title.js';
import Filter from './components/Filter.js';
import LexiconForm from './components/LexiconForm.js';
import Words from './components/Words.js';
import Notification from './components/Notification.js';
import Footer from './components/Footer.js';
import service from './services/lexicon.js';

const App = () => {
  const [words, setWords] = useState([]) //persons, setPersons

  //fetches data from server
  useEffect(() => {service
    .getAll()
    .then(initialList => {
      setWords(initialList)
      })
  }, [])

  //Adds new word (geoword and ironword) to the lexicon
  const addWord = (event) => {
    event.preventDefault()
    const newWord = {geoword: newGeoWord, ironword: newIronWord}
    //find if entered name equals to existed name - caseInsensitive
    if (words.some((element) => element.geoword.toLowerCase() === newGeoWord.toLowerCase() )){
      //if new name exists, set window confirm
      if (window.confirm( `${ newWord.geoword } is already added to dictionary, replace the translation with a new one?`)){
        //create new array for useState hook  
        const changedWord = words.map( (word) => {
            if (newWord.geoword.toLowerCase() === word.geoword.toLowerCase()) {
              //update (return) existed name's name and number - caseInsensitive
              return {...word, geoword: newWord.geoword, ironword: newWord.ironword}
            } else { return word } 
          })
          setWords(changedWord)
          //find updated geoword's (Object's) id for PUT method
          const id = words.filter((word) => {return newWord.geoword.toLowerCase() === word.geoword.toLowerCase()})[0].id;
          service
            .updateWord(newWord, id)
            .catch(error => {
              setMessage(
                `Information of ${newWord.geoword} has already been removed from server`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
              setWords(words.filter(word => word.id !== id))
            })
    }
    //Add new geoword if entered geoword not equals to existed geoword
    }else{service
      .addWord(newWord)
      .then(returnedWord => {
        setWords(words.concat(returnedWord))
      })
      .catch(error => {
        // this is the way to access the error message
        setMessage(`${error.response.data.error}`)
      })}
      setnewGeoWord('')
      setnewIronWord('')
      //Confirmation message after adding person to the phonebook
      setMessage(
        `Added ${newWord.geoword} `
      )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
  }

  const [message, setMessage] = useState(null)

    //Deletes word from the lexicon - not needed at the moment
/*    const deleteWord = (event, id) => {
      event.preventDefault()
      const deletedWord = words.filter((word) => {return word.id !== id})
      setWords(deletedWord)
      service
        .deleteWord(id)
      }
      */

  const [newGeoWord, setnewGeoWord] = useState('')

  // Takes geoword's value from the form
  const handleGeoWordChange = (event) => {
    setnewGeoWord(event.target.value);
  }

  const [newIronWord, setnewIronWord] = useState('')

  // Takes ironwords's value from the form
  const handleIronWordChange = (event) => {
    setnewIronWord(event.target.value);
  }

  const [newSearch, setNewSearch] = useState('')  

  //Takes value from searchbar and sets showAll's state to false 
  const handleSearch = (event) => {
    setNewSearch(event.target.value.toLowerCase());
  }

  //Show only persons from searchbar
  const wordsToShow = words.filter((word) => word.geoword.toLowerCase().includes(newSearch));

  return (
    <div>
      <Title />
      <Notification message = { message } />
      <Filter newSearch = { newSearch } handleSearch = { handleSearch }/>

      <h2> </h2>
      <Words wordsToShow = { wordsToShow } newSearch = { newSearch } />

      <LexiconForm newGeoWord = { newGeoWord } 
                  handleGeoWordChange = { handleGeoWordChange } 
                  newIronWord = { newIronWord } 
                  handleIronWordChange = { handleIronWordChange } 
                  addWord = { addWord } 
                  />
      <Footer />

    </div>
  )
}

export default App