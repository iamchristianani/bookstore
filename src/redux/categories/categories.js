const STATUS_CHECKED = 'STATUS_CHECKED';

const categoriesArr = [];

const categoryReducer = (state = categoriesArr, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

const categoryAction = () => ({
  type: STATUS_CHECKED,
});

export default categoryReducer;
export { categoryAction };
