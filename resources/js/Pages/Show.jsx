import { Link, useForm } from '@inertiajs/react';
import React from 'react'

const Show = ({post}) => {
    const { delete: deletePost } = useForm();
    function handleDelete(e) {
        e.preventDefault();
        deletePost(`/post/${post.id}`);
    }   
  return (
      <>
          <h1 className=" text-center">Show Post</h1>
          <p>This is the Show Post page.</p>
          <div className="text-lg border-1 p-4 mb-4 p-4 mb-3">
              <p className="text-sm text-slate-600">
                  Post on : {new Date(post.created_at).toLocaleTimeString()}
              </p>
              <p className="font-medium"> {post.body}</p>
          </div>
          <form onSubmit={handleDelete} className="max-w-md mx-auto mt-4">
             <button type='submit' className='bg-red-500 text-white p-2 mt-2'>Delete Post</button>
          </form>
          <Link href={route('post.edit', post.id)} className="text-blue-500">
              Update
          </Link>
      </>
  );
}

export default Show