import { component$, useSignal } from "@builder.io/qwik";

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
