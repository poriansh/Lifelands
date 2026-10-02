import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
      <section className="w-full max-w-lg overflow-hidden rounded-2xl border border-violet-400/20 bg-slate-900/80 p-6 text-center shadow-[0_20px_50px_rgb(0_0_0_/_0.3)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold tracking-[0.2em] text-violet-300">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          صفحه موردنظر پیدا نشد
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
          نشانی واردشده وجود ندارد یا ممکن است جابه‌جا شده باشد.
        </p>
        <Link
          href="/home"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-violet-500 px-5 text-sm font-semibold text-white transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98]"
        >
          بازگشت به بازی‌ها
        </Link>
      </section>
    </main>
  );
}
