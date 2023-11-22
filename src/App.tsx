import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="flex h-full flex-col bg-blue-500">
        <div class="ml-2 mt-2 h-full w-full">Test App w/ SolidJS</div>
      </div>
    </>
  );
}

export default App;
