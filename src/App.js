import { useContext, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Create from './pages/Create'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Pagination from './components/Pagination'
import { PostContext } from './context/post/postContext'
import Alert from './components/Alert'
import AlertState from './context/alert/AlertState'
import './App.css'

function App() {
  const [loading] = useState(false)
  const { posts } = useContext(PostContext)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className='container pt-4'>
          <Alert />
          <Switch>
            <Route exact path='/'>
              <Posts loading={loading} currentPost={currentPost} />

              <Pagination
                postsPerPage={postsPerPage}
                paginate={paginate}
                currentPage={currentPage}
              />
            </Route>
            <Route path='/post/:id' component={Post} />
            <Route path='/create' component={Create} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  )
}

export default App
