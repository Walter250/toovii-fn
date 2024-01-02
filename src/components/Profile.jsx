import { useSelector } from "react-redux";
import Theme from "./Theme";

export default function ProfileMenu() {
  const theme = useSelector((state) => state.theme.value);
  const themeStyles = theme.isDarkMode
    ? "text-mainLight bg-secDark"
    : "text-mainDark bg-secLight";

  return (
    <article className={`${themeStyles} absolute top-20 md:top-16 sm:top-14 right-6 md:right-5 sm:right-4 w-1/4 lg:w-1/2 sm:w-4/5 rounded-3xl p-4 border border-mainYellow/30 flex flex-col gap-6 items-start z-40`}>
      <section className="flex items-center gap-4 border-b border-mainYellow py-4 w-full">
        <div className="w-12 h-12 bg-red-200 rounded-full">
          <img src="/user.png" alt="dummy profile" />
        </div>
        <div>
          <p className="font-bold">Walter Iradukunda</p>
          <p>walter.i@toovii.com</p>
        </div>
      </section>
      <button className="hover:bg-mainYellow/50 w-full text-left py-2 font-medium text-xl px-4 rounded-xl flex items-center gap-4">
        <img className="w-6" src="/addAc.png" alt="" />
        <p>Add an Account</p>
      </button>
      <button className="hover:bg-mainYellow/50 w-full text-left py-2 font-medium text-xl px-4 rounded-xl flex items-center gap-4">
        <img className="w-6" src="/settings.png" alt="" />
        <p>Settings</p>
      </button>
      <button className="hover:bg-mainYellow/50 w-full text-left py-2 font-medium text-xl px-4 rounded-xl flex items-center gap-4">
        <img className="w-6" src="/help.png" alt="" />
        <p>Get Help</p>
      </button>

      <button className="hover:bg-mainYellow/50 w-full text-left py-2 font-medium text-xl px-4 rounded-xl flex gap-4 items-center">
        <Theme />
        <p>{theme.isDarkMode ? "Light Mode" : "Dark Mode"}</p>
      </button>
      <button className="bg-mainYellow w-full text-center py-2 font-semibold text-xl px-4 rounded-xl">
        Logout
      </button>
    </article>
  );
}
