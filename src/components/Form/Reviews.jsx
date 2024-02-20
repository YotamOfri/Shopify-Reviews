import AddImage from "../../assets/icons/add-image.svg";
import Arrow from "../../assets/icons/arrow-up.svg";
import Trash from "../../assets/icons/trash.svg";
import X from "../../assets/icons/close.svg";
import PropTypes from "prop-types";
import Input from "../Input";
import { CgRename, CgImage } from "react-icons/cg";
export default function Reviews({ rows, setRows }) {
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
  const handleInputChange = (index, event) => {
    const values = [...rows];
    values[index][event.target.name] = event.target.value;
    setRows(values);
  };
  return (
    <div>
      {rows.map((row, index) => (
        <div
          key={index}
          className={`flex flex-col items-center space-y-2 mb-3 duration-300 ease-in-out overflow-hidden relative  ${
            !row.isVisible ? "h-12" : "h-[325px]"
          }`}
        >
          <div
            className={`w-full h-full py-2 ${
              row.isVisible ? "overflow-scroll" : "overflow-hidden"
            }`}
          >
            <div
              className="text-white w-full bg-slate-900 h-10 px-2 flex items-center justify-between cursor-pointer rounded-md border-x border-indigo-400"
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
              <Input
                name={"name"}
                value={row.name}
                setValue={(e) => handleInputChange(index, e)}
                labelText={"Name"}
                placeHolder={"Reviewer's Name"}
                Icon={<CgRename color="white" />}
              ></Input>
              <div className="relative">
                <Input
                  name={"photo"}
                  value={row.photo}
                  setValue={(e) => handleInputChange(index, e)}
                  placeHolder={"Product Images"}
                  Icon={<CgImage color="white" />}
                ></Input>
                <div className="absolute top-0 right-2  h-full flex justify-center items-center">
                  <button
                    className="text-white bg-slate-400 rounded-2xl p-[2px] text-sm group"
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
    </div>
  );
}
Reviews.propTypes = {
  rows: PropTypes.array,
  setRows: PropTypes.func,
};
