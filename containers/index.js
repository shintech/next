import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {namespaceConfig} from 'fast-redux'
import Link from 'next/link'
import getConfig from 'next/config'
import actions from '../redux/actions'
import { posts as api } from '../api'
import Layout from '../layouts/Main'
import PostList from '../components/posts/PostList'

const DEFAULT_STATE = {posts: []}

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const {actionCreator, getState: getHomepageState} = namespaceConfig('posts', DEFAULT_STATE)

const bumpBuild = actionCreator(function bumpBuild (state, posts) {
  return { ...state, posts, loading: false }
})

class Homepage extends React.Component {
  static async getInitialProps({store, isServer, pathname, query}) {
    let data = await api.getPosts(host)
    let json = await data.json()
    
    store.dispatch(bumpBuild(json))
    
    return {custom: 'custom'}
  }
  render() {
    return (
      <Layout title='home'>
        <PostList posts={this.props.posts} />
    </Layout>
    )
  }
}

function mapStateToProps (state) {
  return getHomepageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ bumpBuild }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)