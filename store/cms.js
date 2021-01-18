import merge from 'deepmerge';

const reducer = (
  state = {
    navigation: {},
    contact: {},
    footer: {
      address: '',
      email: '',
      linkedInURL: ''
    },
    careers: [],
    careersPage: {
      mainHeader: '',
      statement: '',
      weAreNotLooking: ''
    }
  },
  action
) => {
  switch (action.type) {
    case 'CMS:NAVIGATION':
      return merge(state, { navigation: action.data });
    case 'CMS:CONTACT':
      return merge(state, { contact: action.data });
    case 'CMS:FOOTER':
      return merge(state, { footer: action.data });
    case 'CMS:CAREER':
      state.careers = action.data;
      return state;
    case 'CMS:CAREER_PAGE':
      state.careersPage = action.data;
      return state;
    default:
      return state;
  }
};

const actions = {
  storeNavigationData: (data) => (dispatch) =>
    dispatch({
      type: 'CMS:NAVIGATION',
      data
    }),
  storeContactnData: (data) => (dispatch) =>
    dispatch({
      type: 'CMS:CONTACT',
      data
    }),
  storeFooterData: (data) => (dispatch) =>
    dispatch({
      type: 'CMS:FOOTER',
      data
    }),
  storeCareersData: (data) => (dispatch) =>
    dispatch({
      type: 'CMS:CAREER',
      data
    }),
  storeCareersPageData: (data) => (dispatch) =>
    dispatch({
      type: 'CMS:CAREER_PAGE',
      data
    })
};

const selectors = {
  navigation: (state) => state.cms.navigation,
  contact: (state) => state.cms.contact,
  footer: (state) => state.cms.footer,
  careers: (state) => state.cms.careers,
  careersPage: (state) => state.cms.careersPage
};

export default {
  reducer,
  actions,
  selectors
};
