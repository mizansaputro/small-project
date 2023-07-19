import React, { FC, useMemo, useState, useEffect, Fragment } from "react";
import { Box, Grid, ListItem, Typography, Button } from "@mui/material";

import {
    TodoBoxCardContainer,
    TodoBtnDelete,
    TodoBtnUpdate,
    TodoGridColumnContainer, 
    TodoGridColumnHeader,
    TodoGridColumnHeaderText,
    TodoGridColumnRow,
    TodoGridColumnRowText,
} from "./style";
import { TodoItemInterface } from "@containers/Todo/interface";
import { Props } from "./interface";
import Stack from "@mui/material/Stack";
import axios from "axios";


const TodoColumnView: FC<Props> = ({todoItems, isDeleteClick, setIsDeleteClick, isUpdateClick, setIsUpdateClick, todoItem, setTodoItem, isCloseBtnClick, setIsCloseBtnClick}) => {
    const [idDelete, setIdDelete] = useState();
    const [idUpdate, setIdUpdate] = useState();

    const deleteItemTodoInDb = async (id) => {
        await axios.delete(`http://localhost:3004/todos/${id}`);
        setIsDeleteClick(false);
        setIdDelete(undefined);
    }
    const getItemTodoInDb = async (id) => {
        await axios.get(`http://localhost:3004/todos/${id}`)
            .then(res => setTodoItem(res.data));
        setIdUpdate(undefined);
    }
    const handlerClickDelete = (item) => {
        setIsDeleteClick(true);
        setIdDelete(item)
    }
    const handlerClickUpdate = (item) => {
        setIsCloseBtnClick(false);
        setIsUpdateClick(true);
        setIdUpdate(item)
    }

    const renderRowItem = (item: string, key:number, xs: number, md:number) => {
        return (
            <Grid 
                item 
                xs={xs} 
                md={md}
                key={Math.random()}
            >
                <ListItem sx={TodoGridColumnRow}>
                    <Typography 
                        sx={TodoGridColumnRowText} 
                        data-testid={`row-${item}-${key}`} 
                    >
                        {item}
                    </Typography>
                </ListItem>
            </Grid>
        );
        
    }
    const renderActionGrid = (item: number, key: number) => {
        return (
            <Grid
                item
                xs={5} 
                md={10}
                key={key}
            >
                <Stack spacing={1} sx={TodoGridColumnRow}>
                    <Button 
                        sx={TodoBtnUpdate} 
                        size="small" 
                        variant="text"
                        onClick={() => handlerClickUpdate(item)}>
                        Update
                    </Button>
                    <Button sx={TodoBtnDelete} size="small" variant="text"
                        onClick={() => handlerClickDelete(item)}>
                            Delete
                    </Button>
                </Stack>        
            </Grid>
        );
    } 

    const renderRowItems = (item: TodoItemInterface, key: number) => {
        return (
            <Fragment key={key}>
                { renderRowItem(item.status, item.id, 5, 10)}
                { renderRowItem(item.task, item.id, 10, 20) }                    
                { renderRowItem(item.due, item.id, 5, 10)}
                { renderActionGrid(item.id, item.id)}
            </Fragment>
        );
    }
    useEffect(() => {
        if (idDelete!==undefined){
            deleteItemTodoInDb(idDelete);
        }
        if (idUpdate!==undefined){
            getItemTodoInDb(idUpdate);
        }
    }, [isDeleteClick, idDelete, isUpdateClick, idUpdate]);
    return (
        <Box sx={TodoBoxCardContainer}>
            <Grid 
                container 
                spacing={0} 
                columns={{
                    xs: 25,
                    md: 50
                }}
                sx={TodoGridColumnHeader}
                data-testid='column_header'
            >   
                <Grid item xs={5} md={10}>
                    <ListItem>
                        <Typography 
                            sx={TodoGridColumnHeaderText}
                            data-testid="header_status" 
                        >
                            Status
                        </Typography>
                    </ListItem>
                </Grid>
                <Grid item xs={10} md={20}>
                    <ListItem >
                        <Typography 
                            sx={TodoGridColumnHeaderText}
                            data-testid="header_task"
                        >
                            Task
                        </Typography>
                    </ListItem>
                </Grid>
                <Grid item xs={5} md={10}>
                    <ListItem >
                        <Typography 
                            sx={TodoGridColumnHeaderText}
                            data-testid="header_due"
                        >
                            Due
                        </Typography>
                    </ListItem>
                </Grid>
                <Grid item xs={5} md={10}>
                    <ListItem >
                        <Typography 
                            sx={TodoGridColumnHeaderText}
                            data-testid="header_actions"
                        >
                            Actions
                        </Typography>
                    </ListItem>
                </Grid>
            </Grid>
            <Box sx={TodoGridColumnContainer}>
                <Grid 
                    container 
                    spacing={0} 
                    columns={{
                        xs: 25,
                        md: 50
                    }}
                    key={Math.random()}
                >
                    {
                        todoItems?.map((item) => renderRowItems(item, item.id))
                    }
                </Grid>
            </Box>
        </Box>
    );
}

export default TodoColumnView;
