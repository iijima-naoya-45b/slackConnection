// lib/api.ts (サーバー側)
export type Post = {
    id: number;
    title: string;
  };
  
  export async function getPosts(): Promise<Post[]> {
    const res = await fetch("http://localhost:3000/posts");
  
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
  
    const post: Post[] = await res.json();
    return post
  }
  
  export async function createPost(title: string): Promise<Post> {
    const res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  
    if (!res.ok) {
      throw new Error("Failed to create post");
    }
  
    return res.json();
  }
  
  export async function updatePost(id: number, title: string): Promise<Post> {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  
    if (!res.ok) {
      throw new Error("Failed to update post");
    }
  
    return res.json();
  }
  
  export async function deletePost(id: number): Promise<void> {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      throw new Error("Failed to delete post");
    }
  }
  