import "./App.css";
import { Board } from "./Board/Board";

function App() {
  return (
    <div style={styles.appStyle}>
      <Board />
    </div>
  );
}

const styles = {
  appStyle: {
    "text-align": "center",
    width: "100%",
    height: "100%",
    "margin-top": "2em",
  },
};

export default App;
