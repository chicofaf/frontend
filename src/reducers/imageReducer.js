const initialState = {
  url_avatar: "",
  url_cover: ""
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONA_AVATAR':
      return {
        ...state,
        url_avatar: action.url_avatar
      };
    case 'ADICIONA_COVER':
      return {
        ...state,
        url_cover: action.url_cover
      };
    default:
      return state;
  }
};