export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-10 h-10 border-4 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );
}
