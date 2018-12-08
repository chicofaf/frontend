const initialState = {
    nome_usuario: ""
  };
  export const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDITA_USUARIO':        
        return {
          ...state,
          nome_usuario: action.nome_usuario
        };
      default:
        return state;
    }
  };