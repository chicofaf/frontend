  const initialState = {
    tweets: [],
    contador_tweets: 0
  };
  export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADICIONA_TWEET':        
        return {
          ...state,
          tweets: action.tweets,
          contador_tweets: action.contador_tweets
        };
      default:
        return state;
    }
  };