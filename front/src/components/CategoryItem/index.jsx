import { Link } from "react-router";

const CategoryItem = ({ documentId, name, imgUrl, setSelectedCategory }) => {
  return (
    <Link
      to={`/shop`}
      className="flex flex-col rounded-xl shadow overflow-hidden"
      id={documentId}
      onClick={() => {
        setSelectedCategory(name);
      }}
    >
      <img
        src={imgUrl}
        alt="name"
        className="grow w-full rounded-2xl object-cover object-center bg-gray-200"
      />
      <p className="py-2 text-center font-bold">{name}</p>
    </Link>
  );
};

export default CategoryItem;
