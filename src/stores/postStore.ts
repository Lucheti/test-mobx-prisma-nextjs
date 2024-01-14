import {Post as PrismaPost} from "@prisma/client";
import {flow, makeAutoObservable, observable, get, computed} from "mobx";



export class Post {
  #data: PrismaPost

  constructor(data: PrismaPost) {
    makeAutoObservable(this)
    this.#data = data
  }

  get id() {
    return this.#data.id
  }

  get title() {
    return this.#data.title
  }

  get content() {
    return this.#data.content
  }
}

export class PostStore {
  posts: Post[];

  isLoading: boolean;

  constructor() {
    makeAutoObservable(this)
    this.posts = []
    this.isLoading = false
  }

  *fetchPosts() {
    this.isLoading = true
    const postsResponse = yield fetch('/api/posts')
    const posts = yield postsResponse.json()
    console.log("fetchPosts ", posts)
    this.posts = posts.map((post: PrismaPost) => new Post(post));
    console.log("fetchPosts ", this.posts)
    this.isLoading = false
  }

  *createPost({ title, content }: { title: string, content: string }): Generator<unknown, void, Post> {
    const post = yield fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content })
    })
    this.posts.push(post)
  }
}