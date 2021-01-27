const types = {
  favor: '@movflix/favor',
  disfavor: '@movlix/disfavor',
  getFavorites: '@movlix/getFavorites',
  clearFavorites: '@movlix/clearFavorites',
  addList: '@movlix/addList',
  rmList: '@movlix/rmList',
  getList: '@movlix/getList',
  clearList: '@movlix/clearList'
};

const actions = {
  favor: (movie) => ({ type: types.favor, payload: movie }),
  disfavor: (id) => ({ type: types.disfavor, payload: id }),
  getFavorites: () => ({ type: types.getFavorites }),
  clearFavorites: () => ({ type: types.clearFavorites }),
  addList: (movie) => ({ type: types.addList, payload: movie }),
  rmList: (id) => ({ type: types.rmList, payload: id }),
  getList: () => ({ type: types.getList }),
  clearList: () => ({ type: types.clearList })
};

const initialState = {
  favorites: [],
  list: []
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.favor:
      const movieExists = state.favorites.find((movie) => movie.id === payload.favorites);
      return movieExists
        ? { ...state }
        : { ...state, favorites: state.favorites.concat(payload) };

    case types.getFavorites:
      return { ...initialState, favorites: state.favorites };

    case types.disfavor:
      const newFavorites = state.favorites.filter((movie) => movie.id != payload);
      return { ...state, favorites: newFavorites };

    case types.clearFavorites:
      return { ...state, favorites: [] };

    case types.addList:
      const movieExist = state.list.find((movie) => movie.id === payload.addList);
      return movieExist ? { ...state } : { ...state, list: state.list.concat(payload) };

    case types.getList:
      return { ...initialState, list: state.list };

    case types.rmList:
      const list = state.list.filter((movie) => movie.id != payload);
      return { ...state, list: list };

    case types.clearList:
      return { ...state, list: [] };

    default:
      return state;
  }
}

export { actions };
