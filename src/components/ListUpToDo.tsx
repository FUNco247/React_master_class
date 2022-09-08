import { IToDo } from "../atoms";

interface IToDoProps {
  toDo: IToDo;
}

function ListUpToDo({ toDo }: IToDoProps) {
  return (
    <li key={toDo.id} className={toDo.type}>
      {toDo.text}
    </li>
  );
}

export default ListUpToDo;
