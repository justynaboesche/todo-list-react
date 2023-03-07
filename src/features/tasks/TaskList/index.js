import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TasksList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={hideDone && task.done}
        >
          <ToggleDoneButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </ToggleDoneButton>
          <Content
            done={task.done}
          >
            {task.content}
          </Content>
          <RemoveButton
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List >
  );
}

export default TasksList;