const ClassLoadingSkeleton = () => {
  return (
    <>
      <div>
        <div className="w-full h-28 bg-secondary-content skeleton rounded-none"></div>
      </div>
      <div className="px-5 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Array(6)
          .fill()
          .map((item, index) => (
            <div key={index} className=" p-2 pb-4 bg-primary-content">
              <div className="border-2  border-teal-600 rounded">
                <div className="h-[240px] rounded md:h-[220px] lg:h-[250px] w-full bg-secondary-content skeleton"></div>
              </div>
              <div className="pt-5 flex gap-3">
                <div>
                  <div className="rounded-full size-12 bg-secondary-content skeleton"></div>
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold bg-secondary-content h-6 w-[60%] skeleton rounded-2xl"></div>
                  <div className="text-sm mt-2 text-gray-500 bg-secondary-content rounded-2xl h-4 w-20 skeleton"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ClassLoadingSkeleton;
