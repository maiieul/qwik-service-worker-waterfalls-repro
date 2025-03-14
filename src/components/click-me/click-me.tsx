import { component$, useSignal } from "@builder.io/qwik";

// We need to extract the component to see the bug on 1.5.7
export default component$(() => {
  const show = useSignal(false);
  return (
    <>
      <button onClick$={() => (show.value = true)}>click me</button>
      {show.value && <Hidden />}
    </>
  );
});

const Hidden = component$(() => {
  return <div onClick$={() => alert("hi")}>I'm hidden</div>;
});
