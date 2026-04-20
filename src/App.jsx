import Header from "./Header";
import "./App.css";
import FormArea from "./FormArea";

function App() {
  console.log("App Re-rendered");

  return (
    <>
      <Header />
      <FormArea />
    </>
  );
}

export default App;
