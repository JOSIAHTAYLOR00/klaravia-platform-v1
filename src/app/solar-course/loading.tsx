export default function Loading() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="animate-pulse space-y-8">
          {/* Header Skeleton */}
          <div className="flex justify-between">
            <div className="w-1/3 h-12 bg-white/10 rounded" />
            <div className="w-1/4 h-8 bg-white/10 rounded" />
          </div>

          {/* Progress Bar Skeleton */}
          <div className="h-2 bg-white/10 rounded-full" />

          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="h-8 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-5/6" />
            <div className="h-4 bg-white/10 rounded w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
