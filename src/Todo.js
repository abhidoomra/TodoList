import React, { useState } from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from '@material-ui/core'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // get from material ui modal search in google for stling modal
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.text.id).set({
            todo: input
        }, { merge: true })
        setInput('');
        setOpen(false);
    }


    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className={classes.paper}>
                    <h1>hi MODEL</h1>
                    <input placeholder={props.text.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List className="todo_list">
                {/* <ListItemAvatar>
            </ListItemAvatar> */}
                <ListItem>
                    <ListItemText primary={props.text.todo} secondary={props.text.todo} />
                </ListItem>
                <Button color="primary" variant="contained" onClick={e => setOpen(true)}>EDIT</Button>
                <DeleteIcon cursor="pointer" color="secondary" onClick={event => db.collection('todos').doc(props.text.id).delete()} />

            </List>
        </>
    )
};

export default Todo;
