  const initialState = {
    tweets: []
  };
  export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADICIONA_TWEET':        
        return {
          ...state,
          tweets: action.tweets
        };
      default:
        return state;
    }
  };