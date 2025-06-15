const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center py-3 font-philosopher">
      <h1 className="text-3xl w-fit font-bold pb-2">{children}</h1>
      <hr className="border-2 border-info-content w-full ml-3" />
    </div>
  );
};

export default SectionTitle;
