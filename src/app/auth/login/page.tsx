'use client'
import {AppStore} from "@/stores/appStore";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {observer} from "mobx-react-lite";

const LoginComponent = observer(() => {
  const { authStore } = AppStore.getInstance();
  const { push } = useRouter();

  return (
    <div style={{ background: '#EEE', padding: '1rem 3rem' }}>
      <h2> Log in </h2>
      <p> to see posts to be logged in </p>

      <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} onSubmit={ e => {
        e.preventDefault();
        // @ts-ignore
        const email = e.target[0].value;
        // @ts-ignore
        const password = e.target[1].value;
        authStore.login({ email, password });
      }}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button> Log in </button>
      </form>

      <p> no account? <a href="/auth/register"> register </a> </p>
    </div>
  )
});

export default LoginComponent;