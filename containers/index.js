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

const {actionCreator, getState: getHomePageState} = namespaceConfig('posts', DEFAULT_STATE)

const fetchPosts = actionCreator(function fetchPosts (state, posts) {
  return { ...state, posts, loading: false }
})

const HomePage = ({ posts }) => 
  <Layout title='home'>
    <PostList posts={posts} />
  </Layout>

HomePage.getInitialProps = async ({store, isServer, pathname, query}) => {
  let data = await api.getPosts(host)
  let json = await data.json()
  
  store.dispatch(fetchPosts(json))
  
  return {custom: 'custom'}
}

function mapStateToProps (state) {
  return getHomePageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)