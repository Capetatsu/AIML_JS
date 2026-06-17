import Student from "./Student";
import "./index.css";

function App() {
  return (
    <>
      <h1>Student Details</h1>

      <Student
        name="Mayank"
        course="AIML"
        marks="92"
      />

      <Student
        name="Rahul"
        course="CSE"
        marks="88"
      />
    </>
  );
}

export default App;