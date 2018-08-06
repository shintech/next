import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Post from '../components/Post'
import Loading from '../components/Loading'

class Home extends React.Component {
  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    const { loading, data } = this.props.posts

    return (
      <Layout>
        <Page>
          <hr />
          { (loading) ? <Loading />
            : <ul>
              {data.map(p => <Post key={p.id} post={p} />)}
            </ul>
          }
        </Page>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

Home.getInitialProps = ({ store }) => ({ ...store.getState() })

/* -------------------------------------------------------------------------------- */

Home.propTypes = {
  posts: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,

  dispatch => ({
    fetchPosts: () => {
      dispatch(action.posts.fetchPosts())
    }
  })
)(Home)
