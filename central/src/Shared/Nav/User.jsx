const User = ({ user }) => {
  const { personal, id, name, photo, email } = user;
  return (
    <div className="pb-6 flex gap-1 items-center">
      <img src={photo} className="size-12 rounded-lg object-cover" alt="" />
      <div>
        <h1 className=" text-base uppercase">{name}</h1>
        <p className="text-sm ">{email}</p>
      </div>
    </div>
  );
};

export default User;
