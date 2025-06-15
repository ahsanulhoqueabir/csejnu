const Headline = ({ children }) => {
  return (
    <div className="flex gap-2 py-16 items-center select-none">
      <hr
        className="w-full mx-auto my-4 border-
    blue-600 rounded"
      />
      <h1 className="flex-1 text-nowrap grow-0 text-3xl myText font-bold text-center text-teal-700">
        {children}
      </h1>
      <hr
        className="w-full mx-auto my-4 border-
    blue-600 rounded"
      />
    </div>
  );
};

export default Headline;
