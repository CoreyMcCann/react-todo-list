import { IconButton, InputAdornment } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Add Todo" 
                variant="outlined" 
                onChange={handleChange}
                value={text}
                slotProps = {{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="create todo" edge="end" type="submit">
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}  
            />
            </form>
        </ListItem>
    )
}