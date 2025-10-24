import React from 'react'
import Layout from '../Layouts/Layout'
import { Head, Link, usePage } from '@inertiajs/react';

const Home = ({posts}) => {
    const {flash } = usePage().props;
  return (
      <>
          <Head>
              <title>Home </title>
              <meta
                  head-key="description"
                  name="description"
                  content="This is the default description"
              />
              <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          </Head>
          <div className="container mx-auto p-4">
              <h1>Posts</h1>
              {flash.message && (
                  <div className="bg-green-500 text-white p-2 rounded">
                      {flash.message}
                  </div>
              )}
              <div>
                  {posts.data.map((post) => (
                      <div
                          className="text-lg border-1 p-4 mb-4 p-4 mb-3"
                          key={post.id}
                      >
                          <p className="text-sm text-slate-600">
                              Post on :{" "}
                              {new Date(post.created_at).toLocaleTimeString()}
                          </p>
                          <p className="font-medium"> {post.body}</p>
                          <Link
                              href={route("post.show", post.id)}
                              className="text-blue-500"
                          >
                              Read More
                          </Link>
                      </div>
                  ))}
              </div>
              <div>
                  {posts.links.map((link, index) =>
                      link.url ? (
                          <Link
                              className={`p-1 mx-4 ${
                                  link.active
                                      ? "text-blue-500 text-white font-bold"
                                      : ""
                              }`}
                              href={link.url}
                              key={index}
                              dangerouslySetInnerHTML={{ __html: link.label }}
                          />
                      ) : (
                          <span
                              key={index}
                              dangerouslySetInnerHTML={{ __html: link.label }}
                              className="p-1 mx-1 text-slate-500"
                          />
                      )
                  )}
              </div>
          </div>
      </>
  );
}


export default Home