import Header from "./component/Header";
import Content from "./component/Content";

function App() {
  const title = "Belajar React";
  const data = ["HTML", "CSS", "JavaScript"];

  return (
    <div>
      <Header title={title} />
      <Content items={data} />
    </div>
  );
}

export default App;