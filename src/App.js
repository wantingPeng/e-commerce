import Categories from "./path/Categories";
import { Routes, Route } from "react-router-dom";
import Navigation from "./path/Navigation";
import Authentication from "./path/Authentication ";
import Shop from "./path/Shop";
import CheckOut from "./path/CheckOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Categories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
