export function Page() {
  return (
    <>
      <h2>Video inside a details</h2>
      <p>Details element provides a visibility context.</p>
      <x-details>
        <span slot="summary">Learn more</span>
        <x-video></x-video>
      </x-details>
      <hr></hr>
      <h2>Video outside a visibility context</h2>
      <p>No changes to current behavior.</p>
      <div>
        <x-video></x-video>
      </div>
    </>
  );
}

export default Page;
