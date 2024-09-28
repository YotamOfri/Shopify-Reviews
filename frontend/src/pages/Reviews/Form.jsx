import { useState } from "react";
import { IoDownloadOutline, IoIdCard } from "react-icons/io5";
import CSV from "../../utils/CSV";
import Reviews from "../../components/Form/Reviews";
import Input from "../../components/Inputs/Input";
import { IoBagHandleOutline } from "react-icons/io5";
export default function Form() {
  const reviewTemplate = {
    content: "",
    rating: 5,
    photo: "",
    photo_urls: [],
    name: "",
    created_at: "",
    isVisible: false,
  };
  const [productHandle, setProductHandle] = useState("");
  const [productID, setProductID] = useState("");
  const [rows, setRows] = useState([reviewTemplate]);

  const handleAddRow = () => {
    setRows([...rows, reviewTemplate]);
  };

  const handleDownload = () => {
    const Data = rows.map(({ isVisible, photo_urls, ...row }) => {
      const randomTime = CSV.getRandomDateTimeThisWeek();
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
        created_at: row.created_at || randomTime,
        product_id: productID,
      };
      return RowJson;
    });
    const csvData = CSV.convertToCSV(Data);
    CSV.downloadCSV(csvData, "reviews.csv");
  };

  return (
    <form className="w-full max-w-xl bg-[#182235] p-4 rounded-md mx-auto my-6 flex flex-col gap-2 border border-slate-700 mt-40">
      <Input
        Icon={<IoBagHandleOutline color="white" />}
        id={"product-handle"}
        value={productHandle}
        setValue={(e) => {
          setProductHandle(e.target.value);
        }}
        labelText={"Product Handle"}
        placeHolder={"Product Handle"}
      ></Input>
      <Input
        Icon={<IoIdCard color="white" />}
        id={"product-id"}
        value={productID}
        setValue={(e) => {
          setProductID(e.target.value);
        }}
        labelText={"Product Id"}
        placeHolder={"Product Id"}
      ></Input>
      <Reviews rows={rows} setRows={setRows}></Reviews>
      <div className="mb-3 flex gap-2">
        <button
          type="button"
          className="text-white bg-indigo-700 hover:bg-indigo-800 duration-300 ease-in-out  focus:outline-none-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex items-center justify-center gap-2"
          onClick={handleDownload}
        >
          Download
          <IoDownloadOutline size={20} />
        </button>
        <button
          type="button"
          onClick={handleAddRow}
          className="text-black bg-white hover:opacity-70 duration-300 ease-in-out  focus:outline-none-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex items-center justify-center gap-2"
        >
          Add Review
        </button>
      </div>
    </form>
  );
}
