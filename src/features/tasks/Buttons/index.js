import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())} 
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );
}

export default Buttons;
