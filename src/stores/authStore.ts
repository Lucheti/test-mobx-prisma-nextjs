import {User as PrismaUser} from "@prisma/client";
import {flow, makeAutoObservable} from "mobx";
import {AppStore} from "./appStore";

class User {
  data: PrismaUser

  constructor(data: PrismaUser) {
    makeAutoObservable(this)
    this.data = data

    // when the user logs in, fetch all posts
    // AppStore.getInstance().postStore.fetchPosts();
  }

  get id() {
    return this.data.id
  }

  get email() {
    return this.data.email
  }

  get createdAt() {
    return this.data.createdAt
  }

  get updatedAt() {
    return this.data.updatedAt
  }
}

export class AuthStore {

  user?: User

  constructor() {
    makeAutoObservable(this)
  }

  *register({ email, password }: { email: string, password: string }) {
    try {
      const user = yield fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({email, password})
      })
      const json = user.json()
      console.log("register", json)
      this.user = new User(json)
    } catch (error: any) {
      console.log(error)
    }
  }

  *login({ email, password }: { email: string, password: string }) {
    try {
      const user = yield fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({email, password})
      })
      const json = yield user.json()
      console.log("login", json)
      this.user = new User(json)
    } catch (error: any) {
      console.log(error)
    }
  }

  logout() {
    this.user = undefined
  }

  isLoggedIn() {
    return !!this.user
  }
}