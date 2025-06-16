export default function loader() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
      <p>Please wait while we fetch the content.</p>
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto mt-4"></div>
      <p className="text-sm text-gray-500 mt-2">This may take a few seconds.</p>
      <p className="text-sm text-gray-500 mt-2">
        If the page does not load, please try refreshing.
      </p>
    </div>
  );
}
