import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, TextField, Container } from '@mui/material';
import './TaskManager.css';



function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
    const [newTask, setNewTask] = useState({ name: '', description: '' });
    const [editingIndex, setEditingIndex] = useState(-1);

    const addTask = () => {
        if (editingIndex >= 0) {
            const updatedTasks = tasks.map((task, index) => {
                if (index === editingIndex) {
                    return newTask;
                }
                return task;
            });
            setTasks(updatedTasks);
            setEditingIndex(-1);
        } else {
            setTasks([...tasks, newTask]);
        }
        setNewTask({ name: '', description: '' }); 
        setShowAddTask(false); 
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        setEditingIndex(index);
        setNewTask(tasks[index]);
        setShowAddTask(true);
    };


    return (
        <Container>
            <Box sx={{ my: 4, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary" onClick={() => setShowAddTask(!showAddTask)}>
                    Add New Task
                </Button>
            </Box>
            {showAddTask && (
                <Box sx={{ my: 2 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={newTask.name}
                        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    />
                    <Button variant="contained" color="primary" onClick={addTask}>
                        Add Task
                    </Button>
                </Box>
            )}
            {tasks.map((task, index) => (
                <Card key={index} sx={{ my: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {task.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {task.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="primary" onClick={() => editTask(index)}>
                            Edit
                        </Button>
                        <Button  variant="contained" size="small" color="secondary"  sx={{'&:hover': {backgroundColor: '#ff0000',}
        }} onClick={() => deleteTask(index)}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
}


export default TaskManager;

