import { createContext, useState } from "react";
/* import { addCollectionAndDoc } from "../utils/firebase";
 */

export const CategoriesContext = createContext({
  Categories: {},
});
export const CategoriesProvider = ({ children }) => {
  const [Categories, setCategories] = useState({});
  /*   useEffect(() => {
    addCollectionAndDoc("categorise", Categories); //(customize name of collecIdentifer, pass objects,what's we want to add in firestore)
  }, []); */

  return (
    <CategoriesContext.Provider value={{ Categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
