import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { PostContext } from '../context/post/postContext'

const Create = () => {
  const { addPost } = useContext(PostContext)

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ mode: 'onBlur' })
  const onSubmit = (data, e) => {
    console.log('data', data)
    addPost(data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          type='text'
          {...register('title', { required: true })}
          className='form-control'
          id='title'
        />
        {errors.title && <span style={{ color: 'red' }}>This field is required</span>}
      </div>
      <div className='mb-3'>
        <label htmlFor='body' className='form-label'>
          Text
        </label>
        <textarea
          {...register('text', { required: true, minLength: 10 })}
          className='form-control'
          id='body'
        />
        {errors.text && <span style={{ color: 'red' }}>Min length must be 10</span>}
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default Create
