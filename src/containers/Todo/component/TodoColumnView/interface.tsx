import { TodoItemInterface } from "@containers/Todo/interface";
import React from "react";

export interface Props {
    todoItems: TodoItemInterface[];
    isDeleteClick: boolean;
    setIsDeleteClick: React.Dispatch<React.SetStateAction<boolean>>;
    isUpdateClick: boolean;
    setIsUpdateClick: React.Dispatch<React.SetStateAction<boolean>>;
    todoItem: TodoItemInterface;
    setTodoItem: React.Dispatch<React.SetStateAction<TodoItemInterface>>;
    isCloseBtnClick: boolean;
    setIsCloseBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}