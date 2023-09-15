import { StyledContainer } from "./style";
import Post from "../../organism/Post";
import ComentPrincipal from "../../organism/ComentPrincipal";
import { useEffect, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import axios from "axios"

export default function HomePrincipal() {
  const [posts,setPosts] = useState([])

const token = localStorage.getItem(TOKEN_NAME)

  const getPosts = async () => {

    try {
      const headers = {headers: {Authorization: token}}
      const allPosts = await axios.get(`${BASE_URL}posts`, headers)
      setPosts(allPosts.data)
    } catch (error) {
      console.log(error)
    }
  }

const likeOrDislike = async (postId, value) => {
  try {
    const headers = {headers: {Authorization: token}}
    const body = {like: value}
    await axios.put(`${BASE_URL}posts/${postId}/like`, body, headers)
    getPosts()
    
  } catch (error) {
    console.log(error)
  }
}

const createPost = async (content, e) => {
e.preventDefault()
  try {

  if(!content){
     return
  }
  const headers = {headers: {Authorization: token}}
  const body = {content: content}
  await axios.post(`${BASE_URL}posts`, body, headers)
  getPosts()
} catch (error) {
  console.log(error)
}
}

  useEffect(()=>{
    getPosts()
  }, [])
 
    return <StyledContainer>
      <div className="wrapper">
      <ComentPrincipal createPost={createPost}/>
      {posts.map((post) => (
        <Post likeOrDislike={likeOrDislike} postId={post.id} text={post.content} creator={post.creator.name} likes={post.likes} dislikes={post.dislikes} comments={post.comments}/>
      ))}
    
   
    </div>
    </StyledContainer>;
  }
  