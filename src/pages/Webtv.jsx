import { useEffect } from "react";

export default function Webtv() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="h-screen w-full">
      <iframe
        className="w-full h-screen"
        src="https://cloudtv.akamaized.net/donotremove/tvms/webtv/v10.0.31/index.html?packageid=com.toovii.toovii/"
      ></iframe>
    </article>
  );
}
