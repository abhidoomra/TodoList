import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function todo(props) {
    return (
        <List className="todo_list">
            {/* <ListItemAvatar>
            </ListItemAvatar> */}
            <ListItem>
                <ListItemText primary={props.text.todo} secondary={props.text.todo} />
            </ListItem>
            <DeleteIcon color="secondary" onClick={event => db.collection('todos').doc(props.text.id).delete()} />

        </List>
        // <di v>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default todo;
