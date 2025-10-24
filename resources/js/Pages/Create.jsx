import { useForm } from '@inertiajs/react';
import React from 'react'

const Create = () => {
    const {data, setData, post, processing, errors} = useForm({
        body: ''
    });

    function submit(e) {
        e.preventDefault();
        post('/post');
    }
  return (
    <>

    <h1>Create Post</h1>
    <form onSubmit={submit} className="max-w-md mx-auto mt-4">
        <div>
            <label htmlFor="body">Post Body</label>
            {errors.body && <div className="text-red-500">{errors.body}</div>}
            <textarea id="body" name="body" rows="4" className="border-2 border-gray-300 p-2 w-full" onChange={(e) => setData('body',e.target.value)}>{data.body}</textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2" disabled={processing}>Create</button>
    </form>
    </>
  )
}

export default Create