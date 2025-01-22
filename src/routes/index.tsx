import { component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const isOpenSig = useSignal(false);
  return (
    <>
      <a href="/profile">go to profile</a>
      <br />
      <h1>Home page</h1>
      <br />
      <button
        onClick$={() => {
          return (isOpenSig.value = !isOpenSig.value);
        }}
      >
        Click me
      </button>
      {isOpenSig.value && <div>Hi 👋</div>}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
