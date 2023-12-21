import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <article>
      <section className="w-full bg-mainYellow text-dark-200 flex flex-col items-center text-center py-4 gap-3">
        <p className="font-serif text-sm font-semibold">We are here to help!</p>
        <p className="font-semibold text-3xl">Ready to give us a TRY?</p>
        <p className="w-1/2 text-lg">
          Join Toovii today. Unlock exclusive shows, popular channels, and
          special offers with TooVii. Elevate your entertainment experience –
          join now and be part of the next level in streaming.
        </p>
        <Link
          className="px-10 py-2 bg-black text-white rounded-xl font-semibold"
          to="/signup"
        >
          Get Started
        </Link>
      </section>
      <section className="w-full py-6 px-12 bg-black text-white">
        <section className="flex justify-around border-b-2 pb-8">
          <div className="w-1/4 flex flex-col gap-4">
            <Link
              to="/"
              className="flex justify-start items-center gap-4 font-serif font-bold text-xl"
            >
              <p>Toovii</p>
            </Link>
            <p>
              Embark on a journey of limitless entertainment with TooVii. Sign
              up now to unlock a world of exclusive content, exciting updates,
              and an immersive streaming experience. Stay ahead of the curve and
              be the first to explore the latest shows, movies, and special
              offers.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-2xl mb-4">Links</p>
            <Link className="hover:text-mainYellow hover:underline" to="/login">
              Login
            </Link>
            <Link className="hover:text-mainYellow hover:underline" to="/about">
              About
            </Link>
            <Link
              className="hover:text-mainYellow hover:underline"
              to="/payment"
            >
              Payment Plans
            </Link>
            <Link
              className="hover:text-mainYellow hover:underline"
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-mainYellow hover:underline"
              to="/contact"
            >
              Contact
            </Link>
            <Link className="hover:text-mainYellow hover:underline" to="/faq">
              FAQs
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl mb-4">Contacts</p>
            <p>Location: Kigali, Rwanda</p>
            <p>Email: Toovii@gmail.com</p>
            <p>Phone: +25078000000</p>
            <div className="flex justify-start gap-3">
              <img className="w-6" src="/twitter.png" alt="twitter" />
              <img className="w-6" src="/facebook.png" alt="twitter" />
              <img className="w-6" src="/linkedin.png" alt="twitter" />
              <img className="w-6" src="/instagram.png" alt="twitter" />
            </div>
          </div>
        </section>
        <p className="text-center pt-4">
          Copyright 2023 Toovii @All right reserved
        </p>
      </section>
    </article>
  );
}
