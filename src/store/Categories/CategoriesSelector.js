export const selectCategories = (state) => {
  console.log(state);

  const arr = state.Categories.categories;
  return (
    arr &&
    arr.reduce((acc, current) => {
      const { title, items } = current;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  );
};
