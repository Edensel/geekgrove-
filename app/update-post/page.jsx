"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  const [post, setPost] = useState({ post: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPostDetails = async () => {
      if (!postId) return;

      try {
        const response = await fetch(`/api/post/${postId}`);
        if (response.ok) {
          const data = await response.json();
          setPost({
            post: data.post,
            tag: data.tag,
          });
        } else {
          console.error("Failed to fetch post details");
        }
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    getPostDetails();
  }, [postId]);

  const updatePost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!postId) {
      alert("Missing PostId!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: post.post,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePost}
    />
  );
};

export default UpdatePost;
