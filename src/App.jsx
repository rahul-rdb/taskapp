import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
