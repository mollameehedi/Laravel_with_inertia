import { useForm } from '@inertiajs/react';
import React from 'react'

const Edit = ({post}) => {
    const { data, setData, put, processing, errors} = useForm({
        body: post.body
    });
    function submit(e) {
        e.preventDefault();
        put(`/post/${post.id}`);
    }   
  return (
      <>
          <h1>Edit Post</h1>
          <p>This is the Edit Post page.</p>
          <div className="text-lg border-1 p-4 mb-4 p-4 mb-3">
              <form onSubmit={submit} className="max-w-md mx-auto mt-4">
                  <div>
                      <label htmlFor="body">Post Body</label>
                      <textarea
                          id="body"
                          name="body"
                          rows="4"
                          className="border-2 border-gray-300 p-2 w-full"
                          onChange={(e) => setData("body", e.target.value)}
                      >
                          {post.body}
                      </textarea>
                  </div>
                  <button
                      type="submit"
                      className="bg-blue-500 text-white p-2 mt-2"
                  >
                      Update
                  </button>
              </form>
          </div>
      </>
  );
}

export default Edit