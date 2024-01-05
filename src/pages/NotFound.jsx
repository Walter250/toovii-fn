import { Link } from "react-router-dom";
import "../assets/notFound.css";
export default function NotFound() {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
        <p className="p-a">
          . The page you were looking for could not be found
        </p>
        <div className="text-base">
          <Link
            className="font-bold bg-black text-white px-10 py-2 rounded-full"
            to="/"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
