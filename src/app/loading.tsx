export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-mauve rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-salmon rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-sage rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-sm text-ink3 font-medium">Loading portfolio...</p>
      </div>
    </div>
  );
}