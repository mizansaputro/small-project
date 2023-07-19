import React, { FC, useMemo, useState, useEffect } from "react";
import { Box, Grid, ListItem, Typography, TextField , FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";
import { TodoBoxCardContainer, TodoBoxNotificationFailed, TodoBoxNotificationSuccess, TodoCreateTaskBoxForm, TodoCreateTaskBoxTitle } from "./style";
import { blue, grey } from "@mui/material/colors";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


const TodoCreateTask: FC = () => {
    const [status, setStatus] = useState<string>('');
    const [task, setTask] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>('');

    const handlerStatusSelect = (event): void => {
        const statusSelected = event.target.value;
        setStatus(statusSelected);
    }
    const handlerTaskInput = (event):void => {
        const taskInput = event.target.value;
        setTask(taskInput)
    }
    const handlerSelectedDue = (newDue): void  => {
        const getNewDueMonth = dayjs(newDue).format('MM');
        const getNewDueDay = dayjs(newDue).format('DD');
        const getNewDueYear = dayjs(newDue).format('YYYY');
        const getNewDueString = `${getNewDueMonth}/${getNewDueDay}/${getNewDueYear}`
        setSelectedDate(getNewDueString);
    }
    const handlerClickSubmit = () => {
        if (status.length!==0 && task.length!==0 && selectedDate.length!==0){
            axios.post('http://localhost:3004/todos', {
                status: status,
                task: task,
                due: selectedDate,
            });
            setMsg("New Task Added");
            setTimeout(()=>{
                setMsg('');
                
            }, 3000);
            
        }else{
            setMsg("Failed To Add New Task");
            
        }
        setTimeout(()=>{
            setMsg('');
            
        }, 3000);
    }
    useEffect(()=> {
        if (status?.length !==0 && task?.length!==0 && selectedDate?.length!==0){
            setIsActiveBtn(true);
        }
    }, [task, status, selectedDate])

    return (
        <Box 
            sx={TodoBoxCardContainer} 
            data-testid="addTaskBox"
        >
            {
                msg.length!==0 && msg==="New Task Added"?  
                <Box sx={TodoBoxNotificationSuccess}>
                    {msg}
                </Box>
                :""
            }
            {
                msg.length!==0 && msg==="Failed To Add New Task"?
                <Box sx={TodoBoxNotificationFailed}>
                    {msg}
                </Box>:""
            }
            
            <Box sx={TodoCreateTaskBoxTitle}>
                <Typography 
                    variant="h4" 
                    data-testid="title_addTask"
                >
                    Add New Task
                </Typography>    
            </Box>
            <FormControl fullWidth sx={TodoCreateTaskBoxForm}>
                <InputLabel id="status-label">Status</InputLabel>
                <TextField
                    select
                    id="status"
                    value={status}
                    label="Status"
                    required={true}
                    onChange={event => handlerStatusSelect(event)}
                    sx={{'&:hover': {
                        cursor: 'pointer',
                    }}}
                    data-testid="select_status"
                >
                    <MenuItem value={"Not Started"} data-testid="option_status_notStarted">Not Started</MenuItem>
                    <MenuItem value={"In Progress"} data-testid="option_status_inProgress">In Progress</MenuItem>
                    <MenuItem value={"Done"} data-testid="option_status_done">Done</MenuItem>
                </TextField>
                <TextField 
                    id="task" 
                    label="Task" 
                    variant="outlined" 
                    required={true} 
                    sx={{marginTop: 5}} 
                    onChange={event=> handlerTaskInput(event)}
                    data-testid="input_task"
                />
                <Box sx={{mt:10}} data-testid="select_datepicker">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="MM/DD/YYYY"
                            value={selectedDate}
                            onChange={(newDue) => {
                            handlerSelectedDue(newDue);
                            }}
                            renderInput={(params) => <TextField {...params}/>}
                        />
                    </LocalizationProvider>
                </Box>
                <Button 
                    variant="contained" 
                    sx={{
                        mt: 10,
                        backgroundColor: isActiveBtn? "":"grey",
                        '&:hover': {
                            bgcolor: isActiveBtn? "":grey[400]
                        } 
                    }} 
                    onClick={handlerClickSubmit}
                    data-testid="btn_submit"
                >
                    Submit
                </Button>
            </FormControl>
        </Box>
    );
}

export default TodoCreateTask;
