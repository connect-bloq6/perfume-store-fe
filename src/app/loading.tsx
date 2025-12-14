export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-gold-500/20 rounded-full" />
        <div className="absolute top-0 left-0 w-16 h-16 border-2 border-gold-500 rounded-full border-t-transparent animate-spin" />
      </div>
    </div>
  );
}

