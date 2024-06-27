
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    return (
    <div>
        <div className="flex justify-between items-center mb-3">
            
            <AddTodoModal/>
            <TodoFilter/>
        </div>
        <div className="bg-red-400 w-full rounded-xl p-3 ">
          <div className=" bg-white rounded-lg space-y-5 p-3">
          <TodoCard/>
          <TodoCard/>
          <TodoCard/>
          </div>
       
        </div>

  
    </div>)
  };
  
  export default TodoContainer;
  