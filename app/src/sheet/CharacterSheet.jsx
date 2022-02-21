import { useState } from 'react'
import './CharacterSheet.css'
const sheet = require('./data/sheet.json')

function CharacterSheet() {
  const [character, setCharacter] = useState([sheet])
  console.log(character)

  return (
    <div className='app'>
      <h1>Character Sheet</h1>
      {/**
       * // TODO: This should map out a useState object
       */}
      {character.map((character, key) => (
        <form key={key}>
          <fieldset>
            <label htmlFor='characterName'>Character Name:</label>
            <input type='text' id='characterName' />
            <br />
            <label htmlFor='classLevel'>Class & Level:</label>
            <input type='text' id='classLevel' />
            <br /> <label htmlFor='race'>Race:</label>
            <input type='text' id='race' />
            <br />
            <label htmlFor='alignment'>Alignment:</label>
            <select id='alignment'>
              <option value='Lawful Good'>Lawful Good</option>
              <option value='Lawful Neutral'>Lawful Neutral</option>
              <option value='Lawful Evil'>Lawful Evil</option>
              <option value='Neutral Good'>Neutral Good</option>
              <option value='True Neutral'>True Neutral</option>
              <option value='Neutral Evil'>Neutral Evil</option>
              <option value='Chaotic Good'>Chaotic Good</option>
              <option value='Chaotic Neutral'>Chaotic Neutral</option>
              <option value='Chaotic Evil'>Chaotic Evil</option>
            </select>
            <br />
            <label htmlFor='experience'>Experience:</label>
            <input type='number' id='experience' />
          </fieldset>
        </form>
      ))}
    </div>
  )
}

export default CharacterSheet
