'use client'
import {AppStore} from "@/stores/appStore";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

const Home = observer( () => {
  const { authStore, postStore } = AppStore.getInstance();
  const { posts, isLoading } = postStore;

  useEffect(() => {
    postStore.fetchPosts();
  }, []);

  return (
    <div>
      <h2> Posts </h2>
      <button onClick={() => authStore.logout()}> Log out </button>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.content} </p>
          </div>
        ))}
      </div>

      <div>
        <h2> Create new post </h2>
        <input type="text" placeholder="title" />
        <textarea placeholder="content" />
        <button> Create </button>
      </div>
    </div>
  )
});

export default Home;