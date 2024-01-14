'use client'
// create a basic counter UI
import {AppStore} from "@/stores/appStore";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
  const { counter } = AppStore.getInstance();
  const increment = () => counter.increment();
  const decrement = () => counter.decrement();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
})

export default Counter;