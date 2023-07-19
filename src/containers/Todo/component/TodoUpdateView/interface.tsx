import { TodoItemInterface } from "@containers/Todo/interface";
import React from "react";

export interface Props {
    todoItem: TodoItemInterface;
    setTodoItem: React.Dispatch<React.SetStateAction<TodoItemInterface>>;
    isCloseBtnClick: boolean;
    setIsCloseBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
    isItemUpdated: boolean;
    setIsItemUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}