import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {namespaceConfig} from 'fast-redux'
import Link from 'next/link'
import getConfig from 'next/config'
import { posts as api } from '../api'
import Layout from '../layouts/Main'
import Post from '../components/posts/Post'
import {  getPostPageState, fetchPost } from '../redux/stores/post'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const PostPage = ({ post }) => 
  <Layout title={post.title}>
    <Post post={post} />
  </Layout>      
  
PostPage.getInitialProps = async ({store, isServer, pathname, query}) => {
  let res = await api.getPost(query.slug, host)

  let json = await res.json()

  store.dispatch(fetchPost(json))
  
  return {custom: 'custom'}
}  

function mapStateToProps (state) {
  return getPostPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)