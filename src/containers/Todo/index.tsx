import React, { FC, useMemo, useState, useEffect } from "react";
import { Backdrop, Box, Tab, Tabs, Typography } from "@mui/material";


import {
    TodoBoxContainer, 
    TodoBoxContainerHidden, 
    TodoTabContainer,
} from "@containers/Todo/style";

import { getTodosData } from "./config";
import { TodoItemInterface } from "./interface";
import TodoColumnView from "./component/TodoColumnView";
import TodoCreateTask from "./component/TodoCreateTask";
import TodoUpdateView from "./component/TodoUpdateView";

const Todo: FC = () => {
    const [todoItems, setTodoItems] = useState<TodoItemInterface[]>();
    const [tabIndex, setTabIndex] = useState<number>(1);
    const [isDeleteClick, setIsDeleteClick] = useState<boolean>(false);
    const [isUpdateClick, setIsUpdateClick] = useState<boolean>(false);
    const [isCloseBtnClick, setIsCloseBtnClick] = useState<boolean>(false);
    const [isItemUpdated, setIsItemUpdated] = useState<boolean>(false)
    const [todoItem, setTodoItem] = useState<TodoItemInterface>();

    const handleTabChange = (event, newTabIndex): void => {
        setTabIndex(newTabIndex);
    };

    useEffect(() => {
        getTodosData().then(res => setTodoItems(res));
    }, [tabIndex, isDeleteClick, todoItem, isItemUpdated]);

    return (
        <Box 
            sx={TodoBoxContainer} 
            data-testid="page_container"
        >
            <Box>
                <Box sx={TodoTabContainer}>
                    <Tabs value={tabIndex} onChange={handleTabChange}>
                        <Tab 
                            label="View Task" 
                            value={1} 
                            data-testid="tab_view"
                        />
                        <Tab 
                            label="Add Task" 
                            value={2}
                            data-testid="tab_addTask"
                        />
                    </Tabs>
                </Box>
                <Box sx={{ padding: 5  }}>
                    {tabIndex === 1 && (
                    <Box sx={TodoBoxContainer} >
                        <Box data-testid="box_column">
                            <TodoColumnView 
                                todoItems={todoItems} 
                                isDeleteClick={isDeleteClick} 
                                setIsDeleteClick={setIsDeleteClick}
                                isUpdateClick={isUpdateClick} 
                                setIsUpdateClick={setIsUpdateClick}
                                todoItem={todoItem} 
                                setTodoItem={setTodoItem}
                                isCloseBtnClick={isCloseBtnClick}
                                setIsCloseBtnClick={setIsCloseBtnClick}
                            />
                        </Box>
                        {isUpdateClick && !isCloseBtnClick && 
                            <Backdrop
                                sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
                                open={!isCloseBtnClick}
                            >
                                <Box sx={TodoBoxContainerHidden}>
                                    <TodoUpdateView 
                                        todoItem={todoItem} 
                                        setTodoItem={setTodoItem}
                                        isCloseBtnClick={isCloseBtnClick}
                                        setIsCloseBtnClick={setIsCloseBtnClick}
                                        isItemUpdated={isItemUpdated} 
                                        setIsItemUpdated={setIsItemUpdated}
                                    />
                                </Box>
                            </Backdrop>
                        }
                    </Box>
                    
                    )}
                    {tabIndex === 2 && (
                    <Box>
                        <TodoCreateTask/>
                    </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Todo;
