import { useContext, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'

import Create from './pages/Create'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Pagination from './components/Pagination'

import { PostContext } from './context/post/postContext'

function App() {
  const [loading, setLoading] = useState(false)
  const { posts } = useContext(PostContext)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // get current post

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route exact path='/'>
            <Posts loading={loading} currentPost={currentPost} />

            <Pagination postsPerPage={postsPerPage} paginate={paginate} currentPage={currentPage} />
          </Route>
          <Route path='/post/:id' component={Post} />
          <Route path='/create' component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
