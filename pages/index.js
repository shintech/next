import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { posts } from '../actions'
import Layout from '../layouts/Main'
import Post from '../components/Post'
import Loading from '../components/Loading'

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding-left: 0px;
  }
`

class Home extends React.Component {
  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    const { loading, data } = this.props.posts

    return (
      <Layout>
        <Wrapper>
          { (loading) ? <Loading />
            : <ul>
              {data.map(p => { return <Post key={p.title} post={p} /> })}
            </ul>
          }
        </Wrapper>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => {
    return {
      posts: state.posts
    }
  },

  dispatch => ({
    fetchPosts: () => {
      dispatch(posts.fetchPosts())
    }
  })
)(Home)
