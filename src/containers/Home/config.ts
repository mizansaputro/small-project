import { MenuListInterface } from "@containers/Home/interface";
import { ROUTES_PATH } from "@constants/routes";

export const MENU_LIST: MenuListInterface[] = [
    {
        title: "home:home-task-list-1-title",
        task: [
            "home:home-task-list-1-task-1-item",
            "home:home-task-list-1-task-2-item",
            "home:home-task-list-1-task-3-item",
            "home:home-task-list-1-task-4-item",
        ],
        url: ROUTES_PATH.todo,
    },
    {
        title: "home:home-task-list-2-title",
        task: [
            "home:home-task-list-2-task-1-item",
            "home:home-task-list-2-task-2-item",
        ],
        url: ROUTES_PATH.pokemon,
    },
    {
        title: "home:home-task-list-3-title",
        task: [
            "home:home-task-list-3-task-1-item",
            "home:home-task-list-3-task-2-item",
        ],
        url: ROUTES_PATH.invoice,
    },
];
