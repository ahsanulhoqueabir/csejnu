const CardLoading = () => {
  return (
    <>
      <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(8).keys()].map((item) => (
          <SkeletonCard key={item}></SkeletonCard>
        ))}
      </div>
    </>
  );
};

export default CardLoading;

const SkeletonCard = () => {
  return (
    <div className="w-full  mx-auto p-6 md:p-8 shadow-md rounded-2xl space-y-8 animate-pulse">
      {/* Profile Image & BG Skeleton */}
      <div className="relative">
        <div className="h-[150px] bg-gray-300 rounded-2xl"></div>
        <div className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-300 border border-white"></div>
      </div>
      {/* Profile Name & Role Skeleton */}
      <div className="pt-8 text-center space-y-1">
        <div className="h-6 w-2/3 bg-gray-300 mb-2"></div>
        <div className="h-4 w-full bg-gray-300"></div>
      </div>
      {/* Post, Followers, Following Skeleton */}
      <div className="flex flex-wrap px-4 md:px-8 justify-between items-center">
        <div className="text-center">
          <div className="h-6 w-6 bg-gray-300"></div>
        </div>
        <div className="text-center">
          <div className="h-6 w-6 bg-gray-300"></div>
        </div>
        <div className="text-center">
          <div className="h-6 w-6 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
