import "./App.css";
import { useSelector } from "react-redux";
import { selectCounter } from "./store/selectors/selectCounter";

import ChangeCounter from "./components/ChangeCounter";
import ChangingCounter from "./components/ChangingCounter";

const AppWithRedux = () => {
  let counter = useSelector(selectCounter);

  return (
    <div className="App">
      <ChangingCounter counter={counter} />
      <ChangeCounter counter={counter} />
    </div>
  );
};

export default AppWithRedux;
