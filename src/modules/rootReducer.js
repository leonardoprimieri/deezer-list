import { combineReducers } from "redux";
import song from "./song/reducer";
import favorites from "./favorites/reducer";

export default combineReducers({
  song,
  favorites,
});
