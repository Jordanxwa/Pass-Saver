import {
  ADD_WEBSITE,
  GET_WEBSITES,
  DELETE_WEBSITE,
  UPDATE_WEBSITE,
  WEBSITE_ERROR,
  FILTER_WEBSITE,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_FILTER,
  CLEAR_WEBSITES
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case GET_WEBSITES:
      return {
        ...state,
        websites: action.payload,
        loading: false
      };
    case ADD_WEBSITE:
      return {
        ...state,
        websites: [action.payload, ...state.websites],
        loading: false
      };
    case DELETE_WEBSITE:
      return {
        ...state, // Filter out websites and return what's not the website's id
        websites: state.websites.filter(
          website => website._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_WEBSITES:
      return {
        ...state,
        websites: null,
        filtered: null,
        error: null,
        current: null
      };
    case WEBSITE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_WEBSITE:
      return {
        ...state,
        websites: state.websites.map(website =>
          website._id === action.payload._id ? action.payload : website
        ),
        loading: false
      };
    case FILTER_WEBSITE:
      return {
        ...state,
        filtered: state.websites.filter(website => {
          const regexp = new RegExp(`${action.payload}`, 'gi');
          return website.website.match(regexp);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
