export const clickButtonSalvar = value => ({
  type: 'ADICIONA_TWEET',
  tweets: value.tweets,
  contador_tweets: value.contador_tweets,
});


export const uploadAvatar = value => ({
  type: 'ADICIONA_AVATAR',
  url_avatar: value,
});


export const uploadCover = value => ({
  type: 'ADICIONA_COVER',
  url_cover: value
})