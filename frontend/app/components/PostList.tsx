"use client";

import { useEffect, useState } from "react";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  Post,
} from "@/app/libs/api";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [editTitle, setEditTitle] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    try {
      const newPost = await createPost(newTitle);
      setPosts([...posts, newPost]);
      setNewTitle("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleUpdatePost = async () => {
    if (editingId !== null) {
      try {
        const updatedPost = await updatePost(editingId, editTitle);
        setPosts(
          posts.map((post) => (post.id === editingId ? updatedPost : post))
        );
        setEditingId(null);
        setEditTitle("");
      } catch (err) {
        setError((err as Error).message);
      }
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (loading) {
    return <p className="text-5xl">Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-4xl mb-4 underline">Post List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter new post title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border px-2 py-1 mb-2 rounded-md"
        />
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 text-white px-4 py-1 ml-2 rounded-md"
        >
          Create Post
        </button>
      </div>

      {editingId !== null && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Edit post title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border px-2 py-1 mb-2"
          />
          <button
            onClick={handleUpdatePost}
            className="bg-green-500 text-white px-4 py-1 rounded-md"
          >
            Update Post
          </button>
        </div>
      )}

      {posts.map((post) => (
        <div key={post.id} className="mb-1">
          <p className="inline-block">{post.title}</p>
          <button
            onClick={() => {
              setEditingId(post.id);
              setEditTitle(post.title);
            }}
            className="bg-yellow-500 text-white px-2 py-1 mx-2 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeletePost(post.id)}
            className="bg-red-500 text-white px-2 py-1 rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
