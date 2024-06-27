import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const taskDetails ={
            title: task,
            description:description
        }
        
        dispatch(addTodo(taskDetails))
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-600">Add todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>Complete your task</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">Task</Label>
                            <Input
                                id="task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">Description</Label>
                            <Input
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogClose asChild>
                        
                        <Button type="submit">Submit</Button>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;
