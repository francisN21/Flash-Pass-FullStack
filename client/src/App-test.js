import "./App.css";
import Button from "./Components/Button";
import Text from "./Components/Text";

function App() {
  const buttonText = "Better Click Me";

  return (
    <div className="App">
      <Button buttonText="Something">
        <Text text={buttonText} />
      </Button>
    </div>
  );
}

export default App;
