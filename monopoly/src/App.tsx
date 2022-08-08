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
    textAlign: "center" as const,
    width: "100%",
    height: "100%",
    marginTop: "2em",
  },
};

export default App;
