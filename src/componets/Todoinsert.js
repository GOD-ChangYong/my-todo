import React from "react";
import { MdAddCircle } from "react-icons/md";
import './TodoInsert.css'

const TodoInsert = ({ onInsertToggle }) => {
    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form>
                <input placeholder="please type"></input>
                <button type="submit">
                    <MdAddCircle />
                </button>
            </form>
        </div>
    )
}

export default TodoInsert