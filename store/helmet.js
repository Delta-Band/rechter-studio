const reducer = (
  state = {
    tabTitle: 'Rechter Studio',
    metaDescription: 'Creative Consulting For Tech Businesses.' // TODO: Update This
  },
  action
) => {
  switch (action.type) {
    case 'HOME:UPDATE':
      return action.data;
    default:
      return state;
  }
};

const actions = {
  update: (data) => (dispatch) =>
    dispatch({
      type: 'HOME:UPDATE',
      data
    })
};

const selectors = {
  data: (state) => state.helmet
};

export default {
  reducer,
  actions,
  selectors
};
