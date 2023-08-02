import { useSelector, useDispatch } from "react-redux";
import { removeService, changeService, changeEditStatus } from "../redux/actionCreator";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const item2 = useSelector((state) => state.serviceAdd);


  const dispatch = useDispatch();

  const handleFix = (key) => {
    console.log('key', key)
    const item = items.find(el => el.id === key);
    console.log(item)
    dispatch(changeService('name', item.name));
    dispatch(changeService('price', item.price));
    dispatch(changeEditStatus(item.id))
  }

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleFix(o.id)}><img src='https://w7.pngwing.com/pngs/420/658/png-transparent-computer-icons-pencil-drawing-pencil-angle-pencil-logo.png' alt='edit'></img></button>{" "}
          <button onClick={() => handleRemove(o.id)}>✕</button>{" "}
        </li>
      ))}
    </ul>
  );
}
 