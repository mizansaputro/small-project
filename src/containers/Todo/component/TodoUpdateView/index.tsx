import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/system'
import React, { FC, useEffect, useState } from 'react'
import { Props } from './interface'
import { TodoBoxBlockForm, TodoBoxCardContainer, TodoBoxFlexForm, TodoBoxNotificationSucces, TodoBtnClose, TodoBtnUpdate } from './style'
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';

const TodoUpdateView: FC<Props> = ({todoItem, setTodoItem, isCloseBtnClick, setIsCloseBtnClick, isItemUpdated, setIsItemUpdated}) => {
    const [status, setStatus] = useState<string>("");
    const [task, setTask] = useState<string>("");
    const [due, setDue] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    
    const handlerBtnClose = (): void => {
        setIsCloseBtnClick(true);
    }
    const handlerUpdateDue = (newDue): void  => {
        const getNewDueMonth = dayjs(newDue).format('MM');
        const getNewDueDay = dayjs(newDue).format('DD');
        const getNewDueYear = dayjs(newDue).format('YYYY');
        const getNewDueString = `${getNewDueMonth}/${getNewDueDay}/${getNewDueYear}`
        setDue(getNewDueString);
    }
    const handlerUpdateStatus = (event): void => {
        const getNewStatus = event.target.value;
        setStatus(getNewStatus);
    }
    const handlerUpdateTask = (event): void => {
        const getNewTask = event.target.value;
        setTask(getNewTask);
    }
    const isBtnActive = ():boolean => {
        if (task!==todoItem?.task && task?.length!==0 || status!==todoItem?.status || due!==todoItem?.due){
            setIsItemUpdated(true);
            return true;
        }else{
            return false;
        }
    }
    const updateItemInDb = async () => {
        await axios.put(`http://localhost:3004/todos/${todoItem?.id}`, {
                id: todoItem?.id,
                status: status,
                task: task,
                due: due
        })
        setTodoItem({
            id: todoItem?.id,
            status: status,
            task: task,
            due: due
        });
        
    }
    const handlerClickUpdateBtn = () => {
        setMsg("Task is Updated!")
        setTimeout(()=>{
            setMsg('');
        }, 3000);
        updateItemInDb();
        setIsItemUpdated(false);
    }
    useEffect(() => {
        setStatus(todoItem?.status)
        setTask(todoItem?.task)
        setDue(todoItem?.due)
    }, [todoItem])
    
    return ( 
    <Box>
        <Box sx={msg.length!==0? TodoBoxNotificationSucces:{display: "none"}}>{msg}</Box>
        <Button sx={TodoBtnClose} onClick={handlerBtnClose} data-testid="btn_closeUpdate">X</Button>
        <Typography variant="h4" data-testid="title_update">View & Update</Typography>
        <Box sx={TodoBoxCardContainer}>
            <FormControl>
                <Box sx={TodoBoxFlexForm}>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status"
                        value={status}
                        label="Status"
                        required={true}
                        sx={{
                            width: 180,   
                            '&:hover': {
                                cursor: 'pointer',
                            }
                        }}
                        onChange={event => handlerUpdateStatus(event)}
                        data-testid="select_update_status"
                    >
                        <MenuItem value={"Not Started"}  data-testid="option_update_status_1">Not Started</MenuItem>
                        <MenuItem value={"In Progress"} data-testid="option_update_status_2">In Progress</MenuItem>
                        <MenuItem value={"Done"} data-testid="option_update_status_3">Done</MenuItem>
                    </Select>
                    <Box sx={{width: 180, ml: 10}} data-testid="select_update_datepicker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date"
                                value={due}
                                onChange={(newDue) => {
                                handlerUpdateDue(newDue);
                                }}
                                renderInput={(params) => <TextField {...params}/>}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>
                <Box sx={TodoBoxBlockForm}>
                    <Typography>Task</Typography>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        placeholder={"Task Input.."}
                        value={task}
                        style={{ width: 400, borderRadius: 10 }}
                        onChange={event=> handlerUpdateTask(event)} 
                        data-testid="input_update_task"
                    />
                </Box>
                {
                    isBtnActive()? <Button sx={TodoBtnUpdate} onClick={handlerClickUpdateBtn}>Update</Button>:""
                }
            </FormControl>
        </Box>
    </Box>
  )
}

export default TodoUpdateView
