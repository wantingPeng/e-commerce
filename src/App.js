import Categories from "./path/Categories";
import { Routes, Route } from "react-router-dom";
import Navigation from "./path/Navigation";
import Authentication from "./path/Authentication ";
import Shop from "./path/Shop";
import CheckOut from "./path/CheckOut";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AuthStateChangedListener } from "./utils/firebase";
import IndividualCategoryPage from "./path/IndividualCategoryPage";
import { Action } from "./store/user/action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = AuthStateChangedListener((user) => {
      dispatch(Action(user));
    });
    return unsubscribe;
  }, [dispatch]); //warning: cause we generate const dispatch outside, and apply dispatch in useEffect,
  //so useEffect thought, after every render, dispatch got updated in useEffect, which conflicts with [], so its warning,
  //but actually, outside there, useDispatch() only generate one dispatch, will not change , so we can ignore warning here

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Categories />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/shop/:title" element={<IndividualCategoryPage />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
