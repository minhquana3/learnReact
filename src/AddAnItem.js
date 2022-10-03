import React, {useState} from 'react'

function AddAnItem({onAddItem}) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(text);
    setText('');
    console.log(text);
  }
  const handleTextInput = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" id="fname" name="fname" onChange={(e)=>{setText(e.target.value)}}/>
        <input type="submit"/>
        </form>
    </div>
  )
}

export default AddAnItem; 