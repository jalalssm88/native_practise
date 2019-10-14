export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_ITEM = "EDIT_ITEM";

export const addItem = (payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
}

export const deleteItem = (payload)=>{
    return{
        type:DELETE_TODO,
        payload
    }
}

export const editItem = (payload)=>{
    return{
        type:EDIT_ITEM,
        payload
    }
}

 
 