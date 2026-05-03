import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count berubah:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <p>Nilai: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>

      <button onClick={() => setCount(count - 1)}>
        Kurang
      </button>
    </div>
  );
}

export default App;