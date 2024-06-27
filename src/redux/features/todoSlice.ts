import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// import { RootState } from '../store'



  type TTodo = {
    title: string;
    description: string;
    isCompleted?:boolean;
  }
  type TInitialState = {
    todos: TTodo[];
  }

const initialState:TInitialState= {
  todos: [],
}



export const todoSlice = createSlice({
  name: 'todo',
 
  initialState,
  reducers: {
  addTodo : (state,action:PayloadAction<TTodo>)=>{
         state.todos.push({...action.payload, isCompleted:false});
  },
   
  },
})

export const { addTodo } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer