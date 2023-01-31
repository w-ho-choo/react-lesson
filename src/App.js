import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;

//#7.3 Movie App part One 부터 다시 듣기