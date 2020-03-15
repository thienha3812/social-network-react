

const ADD_TODO = "ADD_TODO"

export function addTodo(payload){
    return { type: ADD_TODO, payload }
}