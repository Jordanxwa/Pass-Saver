import {
  ADD_WEBSITE,
  DELETE_WEBSITE,
  UPDATE_WEBSITE,
  FILTER_WEBSITE,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_FILTER
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case ADD_WEBSITE:
      return {
        ...state,
        websites: [...state.websites, action.payload]
      };
    case DELETE_WEBSITE:
      return {
        ...state, // Filter out websites and return what's not the website's id
        websites: state.websites.filter(
          website => website.id !== action.payload
        )
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
          website.id === action.payload.id ? action.payload : website
        )
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
