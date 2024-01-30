import { useState } from "react";
import Arrow from "../assets/arrow-up.svg";
import Trash from "../assets/trash.svg";
import X from "../assets/close.svg";
import Download from "../assets/download.svg";
import convertToCSV from "../utils/convertToCSV";
import downloadCSV from "../utils/downloadCSV";
import AddImage from "../assets/add-image.svg";
import getRandomTime from "../utils/getRandomTime";
export default function Form() {
  const [productHandle, setProductHandle] = useState("");
  const [productID, setProductID] = useState("");
  const [rows, setRows] = useState([
    {
      content: "",
      rating: 5,
      photo: "",
      photo_urls: [],
      name: "",
      isVisible: false,
    },
  ]);
  const addImage = (imageUrl, index) => {
    setRows(
      rows.map((row, idx) => {
        if (idx === index) {
          // Ensuring the image URL is not empty and not already included
          if (imageUrl && !row.photo_urls.includes(imageUrl)) {
            return {
              ...row,
              photo_urls: [...row.photo_urls, imageUrl],
              photo: "",
            };
          }
        }
        return row;
      })
    );
  };
  const removeImage = (imageIndex, rowIndex) => {
    setRows(
      rows.map((row, idx) => {
        if (idx === rowIndex) {
          return {
            ...row,
            photo_urls: row.photo_urls.filter(
              (_, imgIdx) => imgIdx !== imageIndex
            ),
          };
        }
        return row;
      })
    );
  };
  const handleInputChange = (index, event) => {
    const values = [...rows];
    values[index][event.target.name] = event.target.value;
    setRows(values);
  };

  const handleAddRow = () => {
    const newRow = {
      content: "",
      rating: 5,
      photo: "",
      photo_urls: [],
      name: "",
      isVisible: false,
    };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (index) => {
    const values = [...rows];
    values.splice(index, 1);
    setRows(values);
  };
  const handleToggleVisibility = (index) => {
    const newRows = rows.map((row, idx) => {
      if (idx === index) {
        return { ...row, isVisible: !row.isVisible };
      }
      return row;
    });
    setRows(newRows);
  };
  const handleDownload = () => {
    const Data = rows.map(({ isVisible, photo_urls, ...row }) => {
      const randomTime = getRandomTime();
      const Urls = photo_urls.join(", ");
      const RowJson = {
        product_handle: productHandle,
        status: "approved",
        content: row.content,
        rating: row.rating,
        photo_urls: Urls,
        name: row.name,
        country_code: "IL",
        email: "tempMail@gmail.com",
        created_at: randomTime,
        product_id: productID,
      };
      return RowJson;
    });
    console.log(Data);
    const csvData = convertToCSV(Data);
    downloadCSV(csvData, "myData.csv");
  };

  return (
    <form className="w-full max-w-xl bg-neutral-800 p-4 rounded-md mx-auto my-6 flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="product-handle"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Handle
        </label>
        <input
          type="text"
          id="product-handle"
          className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 outline-none dark:placeholder-gray-400 dark:text-white"
          value={productHandle}
          onChange={(e) => setProductHandle(e.target.value)}
          placeholder="womens-men-winter-cotton-shoes"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="product-id"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Id
        </label>
        <input
          type="text"
          id="product-id"
          className=" text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 outline-none dark:placeholder-gray-400 dark:text-white"
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
          placeholder="7832967872683"
          required
        />
      </div>
      {rows.map((row, index) => (
        <div
          key={index}
          className={`flex flex-col items-center space-y-2 mb-3 duration-300 ease-in-out overflow-hidden relative  ${
            !row.isVisible ? "h-12" : "h-[325px]"
          }`}
        >
          <div
            className={`w-full h-full ${
              row.isVisible ? "overflow-scroll" : "overflow-hidden"
            } p-2`}
          >
            <div
              className="text-white w-full bg-zinc-800 h-10 px-2 flex items-center justify-between cursor-pointer"
              onClick={() => handleToggleVisibility(index)}
            >
              <h1> Review {index + 1}</h1>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="hover:opacity-75 duration-300 ease-in-out"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveRow(index);
                  }}
                >
                  <img src={Trash} className="w-5 h-5" alt="" />
                </button>
                <button
                  className="shrink-0 rounded-sm  hover:opacity-75 duration-300 ease-in-out"
                  type="button"
                  onClick={() => handleToggleVisibility(index)}
                >
                  <img
                    src={Arrow}
                    className={`w-3 duration-300 ease-in-out ${
                      !row.isVisible && "rotate-180"
                    }`}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 pt-2 w-full">
              <input
                type="text"
                name="name"
                value={row.name}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Name"
                className=" text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 outline-none dark:placeholder-gray-400 dark:text-white"
              />
              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  value={row.photo}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="img Link"
                  className=" text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 outline-none dark:placeholder-gray-400 dark:text-white"
                />
                <div className="absolute top-0 right-2  h-full flex justify-center items-center">
                  <button
                    className="text-white bg-zinc-800 rounded-2xl p-[6px] text-sm group"
                    type="button"
                    onClick={() => addImage(row.photo, index)}
                  >
                    <img
                      src={AddImage}
                      className="w-6 group-hover:opacity-75 duration-300 ease-in-out"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              {row.photo_urls.length > 0 && (
                <>
                  <div className="flex gap-2 flex-wrap">
                    {row.photo_urls.map((image, imageIndex) => {
                      return (
                        <div key={imageIndex} className="relative">
                          <img src={image} className="w-32 rounded-md" alt="" />
                          <button
                            type="button"
                            onClick={() => removeImage(imageIndex, index)}
                            className="absolute top-0 right-0 bg-zinc-700 text-white rounded-bl-lg px-1 hover:bg-zinc-800 duration-300 ease-in-out"
                          >
                            <img src={X} className="w-3 h-5" alt="" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="w-full flex flex-col">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
                <select
                  name="rating"
                  value={row.rating}
                  onChange={(event) => handleInputChange(index, event)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <textarea
                type="text"
                name="content"
                value={row.content}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="content"
                className="bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white   h-20 outline-none"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="mb-3 flex gap-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 duration-300 ease-in-out  focus:outline-none-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  flex gap-2"
          onClick={handleDownload}
        >
          Download
          <img src={Download} className="w-5" alt="" />
        </button>
        <button
          type="button"
          onClick={handleAddRow}
          className="text-black bg-white hover:opacity-70 duration-300 ease-in-out  focus:outline-none-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex gap-2"
        >
          Add Review
        </button>
      </div>
    </form>
  );
}
