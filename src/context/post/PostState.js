import React, { useReducer } from 'react'
import { dataPosts } from '../../data'
import { PostContext } from './postContext'

import { postReducer } from './postReducer'
import { ADD_POST } from './types'

export const PostState = ({ children }) => {
  const initialState = {
    posts: dataPosts,
  }
  const [state, dispatch] = useReducer(postReducer, initialState)

  const addPost = (payload) => dispatch({ type: ADD_POST, payload })
  return (
    <PostContext.Provider value={{ posts: state.posts, addPost }}>{children}</PostContext.Provider>
  )
}
