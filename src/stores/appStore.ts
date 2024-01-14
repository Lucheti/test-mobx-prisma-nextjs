import { makeAutoObservable } from "mobx";
import {AuthStore} from "./authStore";
import {PostStore} from "./postStore";

class Counter {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
export class AppStore {

  private static instance: AppStore

  authStore: AuthStore;

  postStore: PostStore;

  counter: Counter;

  private constructor() {
    makeAutoObservable(this)
    this.authStore = new AuthStore()
    this.postStore = new PostStore()
    this.counter = new Counter()
  }

  public static getInstance() {
    if (!AppStore.instance) {
      AppStore.instance = new AppStore();
    }
    return AppStore.instance;
  }
}