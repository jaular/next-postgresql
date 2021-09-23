import { slugify } from "@/utils/slugify";

export default function MovieForm({
  formData,
  setFormData,
  handleCancel,
  handleUpdate,
  handleSave,
  actionButton,
  isRefreshing,
}) {
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={
          isRefreshing ? handleCancel : actionButton ? handleSave : handleUpdate
        }
        className="px-6 py-8 text-gray-800 bg-gray-300 rounded-md"
      >
        <div className="grid w-full grid-cols-6 gap-4">
          <div className="col-span-6">
            <input
              type="text"
              placeholder="Title"
              required
              name="title"
              className="block w-full rounded-md"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                  // slug: e.target.value.split(" ").join("-").toLowerCase(),
                  slug: slugify(e.target.value),
                })
              }
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <input
              type="number"
              placeholder="Year"
              required
              name="year"
              min="1895"
              max="3000"
              className="block w-full rounded-md"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: +e.target.value })
              }
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <input
              type="number"
              placeholder="Rating"
              required
              name="rating"
              min="0"
              max="10"
              step=".1"
              className="block w-full rounded-md"
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: +e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <input
              type="text"
              placeholder="Image url"
              name="imageUrl"
              className="block w-full rounded-md"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
          </div>

          <div className="col-span-6">
            <textarea
              placeholder="Description"
              required
              id=""
              rows="8"
              name="description"
              className="block w-full rounded-md"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="col-span-6">
            <input
              type="text"
              placeholder="Slug"
              name="slug"
              className="w-full rounded-md opacity-50"
              value={formData.slug}
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="px-4 py-1 text-white bg-green-700 rounded-md"
          >
            {isRefreshing ? "Loading" : actionButton ? "Add movie" : "Update"}
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-1 ml-3 text-white bg-red-600 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
