import { createContext, useEffect, useState } from "react";
/* import { addCollectionAndDoc } from "../utils/firebase";
 */
import { getCollectionAndDocFromDB } from "../utils/firebase";

export const CategoriesContext = createContext({
  Categories: [],
});
export const CategoriesProvider = ({ children }) => {
  const [Categories, setCategories] = useState([]);
  /*   useEffect(() => {
    addCollectionAndDoc("categorise", Categories); //(customize name of collecIdentifer, pass objects,what's we want to add in firestore)
  }, []); */

  useEffect(() => {
    const getCategorise = async () => {
      //!!!!!!!!!when we use a async func inside useEffect, we don't actually just just put async after useEffect,instead creat a new async func
      const collectionData = await getCollectionAndDocFromDB("categorise");
      setCategories(collectionData);
    };
    getCategorise();
  }, []);

  return (
    <CategoriesContext.Provider value={{ Categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
