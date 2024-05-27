import Message from "./Message";
import HelloWorld from "./HelloWorld";
import AgeCheck from "./Age";

export function HelloWorld1() {
  const age1 = 22;
  const name1 = "John";

  return (
    <div>
      <h2>My awesome Application</h2>
      <hr />
      <HelloWorld />
      <Message name="Andrea" />
      {age1 > 18 && <AgeCheck age={age1} />}
      {age1 && <AgeCheck age={age1} />}
      {18 < age1 && age1 < 65 && <AgeCheck age={age1} />}
      {18 < age1 && age1 < 65 && name1 === "john" && (
        <AgeCheck age={age1} name={name1} />
      )}
    </div>
  );
}
