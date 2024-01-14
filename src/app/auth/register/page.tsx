'use client'
import {AppStore} from "@/stores/appStore";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Register() {
  const { authStore } = AppStore.getInstance();
  const { push } = useRouter();

  // useEffect(() => {
  //   if (authStore.isLoggedIn) push('/');
  // }, [authStore.isLoggedIn]);

  return (
    <div style={{ background: '#EEE' }}>
      <h2> Register </h2>
      <p> to see posts to be logged in </p>

      <form onSubmit={ e => {
        e.preventDefault();
        // @ts-ignore
        const email = e.target[0].value;
        // @ts-ignore
        const password = e.target[1].value;
        console.log({ email, password })
        authStore.register({ email, password });
      }}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button> Register </button>
      </form>

      <p> have an account? <a href="/auth/login"> login </a> </p>
    </div>
  )
}