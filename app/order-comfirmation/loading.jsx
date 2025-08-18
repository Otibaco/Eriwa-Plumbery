export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-green-900">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-green-500 opacity-30" />
        <div className="absolute inset-0 rounded-full border-4 border-green-500 border-t-transparent animate-spin" />
      </div>
    </div>
  );
}
