"use strict";

const todos = [];

const todoKyes = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
};

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`

const getNewTodoId = (todos) =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKyes.id]), 0) + 1;

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKyes.id]: getNewTodoId(todos),
        [todoKyes.text]: text,
        [todoKyes.is_completed]: false,
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKyes.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound (todoId));
        return null;
    }
    todo[todoKyes.is_completed] = !todo[todoKyes.is_completed];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKyes.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound (todoId));
        return todos;
    }
    todos.splice(todoIndex, 1)
    return todos
};

const editTodoById = (todos,todoId, text) =>{
    const todo = todos.find((todo) => todo[todoKyes.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound (todoId));
        return null;
    }
    todo[todoKyes.text] = text || ''
    return todo
}


