const Google = () => {
  return (
    <div>
      <div className="flex mt-7 items-center text-center">
        <hr className="border-gray-300 border-1 w-full rounded-md" />
        <label className="block font-medium text-sm  w-full">
          Sign in with{" "}
        </label>
        <hr className="border-gray-300 border-1 w-full rounded-md" />
      </div>

      <div className="flex mt-7 justify-center w-full">
        {/* <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button> */}

        <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
          Google
        </button>
      </div>
    </div>
  );
};

export default Google;
