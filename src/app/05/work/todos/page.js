"use client";

import {Fragment, useState} from "react";

export default function Todos() {
    const [todos, setTodos] = useState([
        {id: 1, title: "課題", completed: false},
        {id: 2, title: "買い物", completed: true},
        {id: 3, title: "洗濯", completed: false},
    ]);

    const handleAddButtonClick = event => {
        alert("hello world")
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
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td><input type="text" value={todo.title} /></td>
                                            <td>
                                                <input type="checkbox" checked={todo.completed}/>
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
