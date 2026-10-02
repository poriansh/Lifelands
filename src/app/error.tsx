"use client";

import {useEffect} from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({error, reset}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6"
    >
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-[0_20px_50p
      x_rgb(0_0_0_/_0.3)] backdrop-b
      lur sm:p-8">
        {/* Icon */}
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 8V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-red-500"
            />
            <path
              d="M12 16H12.01"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-red-500"
            />
            <path
              d="M10.3 3.7L2.7 17C1.9 18.4 2.9 20 4.5 20H19.5C21.1 20 22.1 18.4 21.3 17L13.7 3.7C12.9 2.3 11.1 2.3 10.3 3.7Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              className="text-red-500"
            />
          </svg>
        </div>

        {/* Content */}
        <h1 className="mb-3 text-2xl font-bold text-slate-100">
          مشکلی پیش آمد
        </h1>

        <p className="mb-8 text-sm leading-7 text-slate-400">
          متأسفانه در بارگذاری این صفحه مشکلی به وجود آمد. لطفاً دوباره تلاش
          کنید.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={reset}
            className="h-11 cursor-pointer rounded-xl bg-sky-500 px-5 text-sm font-medium text-slate-950 transition hover:bg-sky-400 active:scale-[0.98]"
          >
            تلاش مجدد
          </button>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="h-11 rounded-xl border border-white/10 bg-slate-800/70 px-5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-slate-800 active:scale-[0.98]"
          >
            بارگذاری مجدد صفحه
          </button>
        </div>
      </section>
    </main>
  );
}
 
