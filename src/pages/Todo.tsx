import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
  <Container>
    <h1 className="text-center font-bold text-xl my-5">My todo</h1>
    <TodoContainer/>

  </Container>
);
};

export default Todo;
