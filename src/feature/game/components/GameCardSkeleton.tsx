function GameCardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6" aria-label="Loading games" aria-busy="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
          <div className="aspect-16/10 bg-slate-800" />
          <div className="space-y-3 p-4 sm:p-5">
            <div className="h-5 w-3/4 rounded bg-slate-700/80" />
            <div className="h-4 w-1/2 rounded bg-slate-800" />
            <div className="h-6 w-16 rounded-md bg-slate-800" />
            <div className="flex justify-between border-t border-white/10 pt-3">
              <div className="h-3 w-16 rounded bg-slate-800" />
              <div className="h-3 w-14 rounded bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GameCardSkeleton
