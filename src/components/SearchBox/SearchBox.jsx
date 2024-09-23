import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor={`${id}-searchBox`}>Find contacts by name</label>
      <input
        id={`${id}-searchBox`}
        name="searchBox"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      ></input>
    </>
  );
}
