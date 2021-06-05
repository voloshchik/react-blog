import { ADD_POST } from './types'

export const postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          { id: Date.now(), title: action.payload.title, body: action.payload.text },
          ...state.posts,
        ],
      }
    default:
      return state
  }
}
