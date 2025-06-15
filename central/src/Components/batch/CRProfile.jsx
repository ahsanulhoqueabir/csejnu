const CRProfile = ({ info }) => {
  const { name, email, phone, photo } = info;
  return (
    <div className="flex gap-4 items-center ">
      <img
        className="object-cover size-[100px] rounded-lg"
        src={photo || `https://placehold.co/100?text=${name.fullName}`}
        alt=""
      />
      <div className="">
        <h1>Name: {name.fullName}</h1>
        <h1>Email: {email}</h1>
        <h1>Phone: {phone}</h1>
      </div>
    </div>
  );
};

export default CRProfile;
