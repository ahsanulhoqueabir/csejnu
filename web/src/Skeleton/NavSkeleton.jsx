const NavSkeleton = () => {
  return (
    <div className="flex justify-between items-center h-28 bg-base-200 px-5 lg:px-20">
      <div className="size-12 border-2 rounded animate-pulse bg-white"></div>
      <div className="flex gap-3">
        {Array(5)
          .fill()
          .map((item, index) => (
            <div
              key={index}
              className="h-8 w-16 border-2 rounded animate-pulse bg-white"
            ></div>
          ))}
      </div>
      <div>
        <div className="size-10 rounded-full border-2 animate-pulse bg-white"></div>
      </div>
    </div>
  );
};

export default NavSkeleton;
