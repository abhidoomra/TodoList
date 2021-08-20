import './App.css';
import Todo from './Todo'
import React, { useState, useEffect } from 'react'
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to database and fetch new todos as they added or removed

  useEffect(() => {
    //when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault(); // stop refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput(''); //clear up the input after clicking to button
  }
  return (
    <div className="App">
      <h1>Todo App </h1>
      <form>
        {/* <input  /> */}
        <FormControl>
          <InputLabel>Enter TODO</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add List</Button>
      </form>


      <ul>
        {todos.map(todo => (
          // <li>{todo}</li>
          <Todo text={todo} />
        )
        )}
      </ul>
    </div>
  );
}

export default App;
