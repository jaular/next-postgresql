import Link from "next/link";

export default function List({ data, handleEdit, handleDelete }) {
  return (
    <>
      <ul className="space-y-4 text-gray-800 list-decimal list-inside">
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/movies/${item.slug}`}>
              <a
                className="mr-2 hover:text-blue-600 hover:underline"
                title={item.title}
              >
                {item.title}
              </a>
            </Link>
            ⭐{item.rating}
            <div className="space-y-2">
              <button
                className="px-4 py-1 text-white bg-red-600 rounded-md"
                onClick={(e) => handleDelete(item)}
              >
                Delete
              </button>
              <button
                className="px-4 py-1 ml-3 text-white bg-gray-700 rounded-md"
                onClick={(e) => handleEdit(item)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
