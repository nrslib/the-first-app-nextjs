"use client";

import {Fragment, useEffect, useState} from "react";

export default function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodo()
            .then(todos => {
                setTodos(todos)
            })
    }, [])

    const getTodo = () => {
        return fetch("/api/todos")
            .then(response => response.json())
    }

    const handleAddButtonClick = event => {
        let nextId = todos.length + 1
        todos.push({id: nextId, title: "", completed: false})
        setTodos([...todos])
    }

    const handleCheckboxChange = todoId => {const newTodos = [];
        for (const todo of todos) {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            newTodos.push(todo);
        }
        setTodos(newTodos);
    }

    const handleInputChange = (id, event) => {
        let value = event.target.value
        let newTodos = []

        for (const todo of todos) {
            if (todo.id === id) {
                todo.title = value;
            }
            newTodos.push(todo);
        }

        setTodos(newTodos);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>Todo List</h1>
            </div>

            <div className=" ml-[50px] whitespace-nowrap overflow-auto h-[500px] w-[50%] mt-[100px] top-0">
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th colSpan={2}>Done</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (
                            todos.map(todo => {
                                return (
                                    <Fragment key={todo.id}>
                                        <tr>
                                            <td>{todo.id}</td>
                                            <td><input type="text" value={todo.title} onChange={(event) => handleInputChange(todo.id, event)} /></td>
                                            <td>
                                                <input type="checkbox" onChange={() => handleCheckboxChange(todo.id)} checked={todo.completed}/>
                                            </td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        )
                    }
                    </tbody>
                </table>
            </div>

            <div>
                <p>
                    <button onClick={handleAddButtonClick}>Add Todos</button>
                </p>
            </div>
        </main>
    )
}
