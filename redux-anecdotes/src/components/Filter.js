import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor="filter">filter</label>
      <input type="text" id="filter" onChange={handleChange} />
    </div>
  );
}
 
export default Filter;