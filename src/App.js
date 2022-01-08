import useFetch from "./Hooks/useFetch";
import "./styles.css";

export default function App() {
  const { loading, data, error } = useFetch("https://reqres.in/api/users");
  console.log("loading:", loading);
  console.log(data);
  console.log("error:", error);
  return (
    <div className="App">
      <h1>useFetch</h1>
      <p>Check console for output</p>
    </div>
  );
}
