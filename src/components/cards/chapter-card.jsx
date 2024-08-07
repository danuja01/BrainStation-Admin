const ChapterCard = () => {
  return (
    <div
      className="p-4 my-4 cursor-pointer bg-white rounded-xl hover:brightness-95 transition-all duration-300"
      style={{ boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)" }}
    >
      <h3 className="uppercase text-sm font-semibold">Lecture 01</h3>
      <p className="text-sm font-light">Comprehensive Guide to Data Structures and Algorithms</p>
    </div>
  );
};

export default ChapterCard;
