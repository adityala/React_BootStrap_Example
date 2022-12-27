import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./Component/form";
import UncontrolledExample from "./Component/Carosal_but";
import ColorSchemesExample from "./Component/navbarbot";
import ButtonExample from "./Component/badgebot";

function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      <ButtonExample></ButtonExample>

      <UncontrolledExample></UncontrolledExample>
      <br />
      <br />
      <br />
      <br />
      <BasicExample></BasicExample>

    </div>
  );
}

export default App;
