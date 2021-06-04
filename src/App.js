import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'

import Create from './pages/Create'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Pagination from './components/Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(2)
  const [postsPerPage, setPostsPerPage] = useState(5)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route exact path='/'>
            <Posts posts={currentPost} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Route>
          <Route path='/post/:id' component={Post} />
          <Route path='/create' component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
