import { component$, useSignal } from "@builder.io/qwik";

// We need to extract the component to see the bug on 1.5.7
export default component$(() => {
  const isOpenSig = useSignal(false);
  return (
    <>
      <button
        onClick$={() => {
          console.log("trigger click isOpenSig.value:", isOpenSig.value);
          return (isOpenSig.value = !isOpenSig.value);
        }}
      >
        click me
      </button>
      {isOpenSig.value && <div>Hi 👋</div>}
    </>
  );
});
