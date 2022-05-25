import { useState } from "react";

// next js
import Link from "next/link";

// meta tags
import MetaTags from "constant/MetaTags";

export default function Login() {
  // initial state
  const [loadingSubmitData, setLoadingSubmitData] = useState(false);

  // === handle submit ===
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingSubmitData(true);
  };
  // === end handle submit ===

  return (
    <>
      {/* --- meta tags --- */}
      <MetaTags title="Login Ke BelanjaKu" />
      {/* --- end meta tags --- */}

      <div className="bg-slate-200 relative w-full h-screen flex items-center justify-center select-none">
        <div className="w-12/12 mx-3 sm:px-0 sm:w-7/12 md:w-5/12 lg:w-4/12 bg-white shadow m-auto rounded p-5 relative z-50">
          <h1 className="text-4xl text-orange mb-8 font-bold text-center">
            Login
          </h1>

          <form className="w-full px-0 sm:px-5" onSubmit={handleSubmit}>
            <label className="block my-3">
              <span className="block font-semibold text-slate-600">Email</span>
              <input
                className="block w-full outline-none mt-2 focus:ring-1 focus:ring-orange text-slate-500 shadow-md px-3 py-2 rounded font-semibold transition"
                type="text"
                placeholder="contoh@gmail.com"
              />
            </label>

            <label className="block my-8">
              <span className="block font-semibold text-slate-600">
                Password
              </span>
              <input
                className="block w-full outline-none mt-2 focus:ring-1 focus:ring-orange text-slate-500 shadow-md px-3 py-2 rounded font-semibold transition"
                type="password"
                placeholder="********"
              />
            </label>

            <button
              type="submit"
              className="bg-orange text-white border-none py-2 px-5 block ml-auto rounded font-semibold text-sm"
            >
              Login
            </button>
          </form>

          {/* --- register --- */}
          <h3 className="text-center text-gray font-semibold text-xs sm:text-sm mt-6">
            Belum punya akun ?{" "}
            <Link href="/register">
              <span className="text-slate-600 underline cursor-pointer underline-offset-2">
                daftar disini
              </span>
            </Link>
          </h3>
          {/* --- end register --- */}
        </div>

        {/* --- elips --- */}
        <img
          src="/elips-one.png"
          className="absolute left-0 bottom-0 w-20 sm:w-40 z-30"
          loading="lazy"
        />
        <img
          src="/elips-two.png"
          className="absolute left-0 w-24 sm:w-48 bottom-0  z-20"
          loading="lazy"
        />
        <img
          src="/elips-one.png"
          className="absolute w-36 sm:w-72 left-0 bottom-0 z-10"
          loading="lazy"
        />
        {/* --- end elips --- */}

        {/* --- vector right --- */}
        <img
          src="/vector-one.png"
          className="w-9/12 h-auto top-0 right-0 sm:w-auto sm:h-full absolute sm:right-0 z-30"
          loading="lazy"
        />
        {/* --- end vector right --- */}
      </div>
    </>
  );
}
