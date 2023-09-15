import { StyledContainer } from "./style";
import Coment from "../../organism/Coment";
import Post from "../../organism/Post";
import { useEffect, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {
 
  const [comments, setComments] = useState([])
  const token = localStorage.getItem(TOKEN_NAME)
  const [post, setPost] = useState({})
  const [loading, setLoading]= useState(true)
  const params = useParams()

  const getComments = async () => {
    try {
      const headers = {headers: {Authorization: token}}
      const response = await axios.get(`${BASE_URL}comments/${params.id}`, headers)
      setComments(response.data)
   
    } catch (error) {
      console.log(error)
    }
  }

  const likeOrDislikePost = async (postId, value) => {
    try {
      const headers = {headers: {Authorization: token}}
      const body = {like: value}
      await axios.put(`${BASE_URL}posts/${postId}/like`, body, headers)
      getPost()
      
    } catch (error) {
      console.log(error)
    }
  }

  const likeOrDislikeComment = async (commentId, value) => {
    try {
      const headers = {headers: {Authorization: token}}
      const body = {like: value}
      await axios.put(`${BASE_URL}comments/${params.id}/${commentId}/like`, body, headers)
      getComments()
      
    } catch (error) {
      console.log(error)
    }
  }


   const getPost = async () => {
    try {
      const headers = {headers: {Authorization: token}}
      const response = await axios.get(`${BASE_URL}posts`, headers)
      const postFiltered = response.data.filter((post) => post.id === params.id)
     
      setPost(postFiltered[0])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
   }

   const createComment = async (content, e) => {
     e.preventDefault()
    try {
      const headers = {headers: {Authorization: token}}
      const body = {content: content}
      await axios.post(`${BASE_URL}comments/${params.id}`, body, headers)
      getComments()
      getPost()
    } catch (error) {
      console.log(error)
    }
   }


   useEffect(()=> {getPost(), getComments()},[])
   if(loading){
    return <h1>loading</h1>
   }

    return <StyledContainer>
      <div className="wrapper">
    <Post likeOrDislike={likeOrDislikePost} text={post.content} creator={post.creator.name} likes={post.likes} dislikes={post.dislikes} comments={post.comments} postId={post.id}/>
    <Coment onSubmit={createComment}/>
   <div className="post-container">
    {comments.map((comment) => 
    (<Post likeOrDislike={likeOrDislikeComment} text={comment.content} creator={comment.creator.name} likes={comment.likes} dislikes={comment.dislikes} postId={comment.id}/>)
    )}
    </div>
   
  
    </div>
    </StyledContainer>;
  }
  