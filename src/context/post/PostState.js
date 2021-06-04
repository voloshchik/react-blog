import React, { useReducer } from 'react'
import { PostContext } from './postContext'
import { postReducer } from './postReducer'

const PostState = ({ children }) => {
  const initialState = {
    posts: [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
    ],
  }
  const [state, dispatch] = useReducer(postReducer, initialState)
  return <PostContext.Provider value={{ posts: state.posts }}>{children}</PostContext.Provider>
}

export default PostState
