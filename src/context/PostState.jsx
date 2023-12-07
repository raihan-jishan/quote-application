/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/*
    title: PostState.js file, 
    desc: simple file for post states realted works  , 
    date: 30 - 9 - 23.

*/

import { useState } from "react";
import PostContext from "./postContext";
const PostState = (props) => {
  // backend url
  const server = import.meta.env.VITE_BACKEND_URL;
  const postsInitial = [];
  const creatorPostInitial = [];
  const userInitial = [];
  const blogInitial = [];
  const [post, setPost] = useState(postsInitial);
  const [blogPost, setBlogPost] = useState(blogInitial);
  const [creatorPost, setCreatorPost] = useState(creatorPostInitial);
  const [user, setUser] = useState(userInitial);
  //   add a post function
  const addPost = async (title, description, imageUrl, tag) => {
    const response = await fetch(`${server}/api/post/addpost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, imageUrl, tag }),
    });
    const post = await response.json();
    setPost(post.concat(post));
  };
  // add a blog post function
  const addBlogPost = async (title, description, imageUrl, personName) => {
    const response = await fetch(`${server}/api/post/addblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, imageUrl, personName }),
    });
    const blogPost = await response.json();
    setBlogPost(blogPost.concat(post));
  };
  // get all posts function
  const getPost = async () => {
    const response = await fetch(`${server}/api/post/fetchallposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPost(json);
  };
  // get all posts function
  const getBlogPosts = async () => {
    // api call
    const response = await fetch(`${server}/api/post/fetchblogposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setBlogPost(json);
    // fetch api with the page relaod
  };
  // get all creator  posts function
  const getCreatorPost = async () => {
    // api call
    const response = await fetch(`${server}/api/post/getcreatorposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setCreatorPost(json);
  };
  // Edit a post function
  const editPost = async (id, title, description, tag, imageUrl) => {
    const response = await fetch(`${server}/api/notes/updatepost/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, imageUrl }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(creatorPost));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        newNotes[index].imageUrl = imageUrl;
        break;
      }
    }
    setCreatorPost(newNotes);
  };
  //   delete post function
  const deletePost = async (id) => {
    // API Call
    const response = await fetch(`${server}/api/post/deletepost/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    const newNotes = post.filter((post) => {
      return post._id !== id;
    });
    setCreatorPost(newNotes);
  };
  // get user details
  const getUserDetails = async () => {
    const response = await fetch(`${server}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Conetent-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setUser(json);
  };

  // like post function
  const likePost = async (id) => {
    // API Call
    fetch(`${server}/api/post/likepost/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result)
        const newData = post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPost(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // make a comment function
  const makeComment = (text, id) => {
    fetch(`${server}/api/post/comment/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPost(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <PostContext.Provider
      value={{
        post,
        creatorPost,
        user,
        addPost,
        getPost,
        getCreatorPost,
        editPost,
        deletePost,
        getUserDetails,
        PostState,
        likePost,
        makeComment,
        addBlogPost,
        getBlogPosts,
        blogPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
