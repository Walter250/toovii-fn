import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="h-screen w-full">
      <iframe
        className="w-full h-screen"
        src="https://portal.tvms.io/?o=shop&h=eyJjbGllbnQiOiJUb292aWkiLCJkZXBsb3ltZW50IjoidG9vdmlpLWNvbnRlbnQiLCJzZXJ2aWNlIjoidG9vdmlpLWN1c3RvbWVycyIsInBvcnRhbElkIjoiNjU4NDQ3ZDY5OTZhNDdkMGJmY2U3YjdmIn0="
      ></iframe>
    </article>
  );
}
