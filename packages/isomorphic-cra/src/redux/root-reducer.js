import { combineReducers } from "redux";
import ThemeSwitcher from "@iso/redux/themeSwitcher/reducer";
import LanguageSwitcher from "@iso/redux/languageSwitcher/reducer";

export default combineReducers({
  ThemeSwitcher,
  LanguageSwitcher,
});
