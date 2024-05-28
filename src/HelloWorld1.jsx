import HelloWorld from "./HelloWorld";
import AlertClock from "../../AlertClock/AlertClock";

export function HelloWorld1() {
  const age1 = 22;
  const name1 = "John";

  return (
    <div>
      <h2>My awesome Application</h2>
      <hr />
      <HelloWorld />
      <AlertClock />
    </div>
  );
}
