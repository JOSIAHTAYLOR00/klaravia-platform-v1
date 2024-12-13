export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-white/5 rounded w-1/4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-6 space-y-4">
              <div className="aspect-video bg-white/10 rounded"></div>
              <div className="h-4 bg-white/10 rounded w-1/4"></div>
              <div className="h-6 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
