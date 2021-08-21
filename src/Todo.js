import React, { useState } from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal, Input } from '@material-ui/core'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    // get from material ui modal search in google for stling modal
    paper: {
        position: 'absolute',
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        left: '25vw',
        textAlign: 'center'
    },
    close: {
        position: 'absolute',
        top: '0',
        right: '0',
        cursor: "pointer"
    },
    center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    // stodo: {
    //     border: '2px solid blue',
    //     margin: '10px'
    // }
}));


function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    const handleClose = () => {
        setInput("");
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.text.id).set({
            todo: input
        }, { merge: true })
        // prevent overriding
        setInput('');
        setOpen(false);
    }


    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className={classes.paper}>
                    <h1>EDIT TASK</h1>
                    <p>Recent Todo: <b>{props.text.todo}</b></p>
                    <Input placeholder={props.text.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button variant="contained" color="primary" size="small" disabled={!input} onClick={updateTodo}>Update Todo</Button>
                    <CloseIcon className={classes.close} color="secondary" fontSize="large" onClick={handleClose} />
                </div>
            </Modal>
            <List className="todo_list" >
                {/* className={classes.stodo} > */}
                {/* <ListItemAvatar>
            </ListItemAvatar> */}
                <ListItem >
                    <ListItemText primary={props.text.todo} secondary={props.text.todo} />
                </ListItem>
                <div className={classes.center}>
                    <Button color="primary" variant="contained" onClick={e => setOpen(true)}>EDIT</Button>
                    <DeleteIcon cursor="pointer" color="secondary" onClick={event => db.collection('todos').doc(props.text.id).delete()} />
                </div>
            </List>
        </>
    )
};

export default Todo;
