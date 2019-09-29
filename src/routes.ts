import {UserController} from "./controller/UserController";
import { TodoListController } from "./controller/TodolistController";


export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/todolist",
    controller: TodoListController,
    action: "all"
}, {
    method: "get",
    route: "/todolist/:id",
    controller: TodoListController,
    action: "one"
}, 
{
    method: "get",
    route: "/todolistpersonal",
    controller: TodoListController,
    action: "filterPersonal"
},
{
    method: "get",
    route: "/todolistwork",
    controller: TodoListController,
    action: "filterWork"
},
{
    method: "get",
    route: "/todolistfamily",
    controller: TodoListController,
    action: "filterfamily"
},

{
    method: "put",
    route: "/todolist/:id",
    controller: TodoListController,
    action: "update"
}, {
    method: "post",
    route: "/todolist",
    controller: TodoListController,
    action: "save"
}, {
    method: "delete",
    route: "/todolist/:id",
    controller: TodoListController,
    action: "remove"
}];