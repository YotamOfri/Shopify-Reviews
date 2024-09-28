import { forwardRef, useState, useEffect } from "react";
import { CgCalendar } from "react-icons/cg";

const DateInput = forwardRef(
  ({ title, value, onChange, className, disabled, id, name }, ref) => {
    const [localDate, setLocalDate] = useState("");

    useEffect(() => {
      if (value) {
        // Convert ISO string to local date format (YYYY-MM-DD)
        const date = new Date(value);
        setLocalDate(date.toISOString().split("T")[0]);
      }
    }, [value]);

    const handleChange = (e) => {
      const inputDate = e.target.value;
      setLocalDate(inputDate);

      // Convert local date to ISO format with time set to midnight UTC
      const isoDate = new Date(`${inputDate}T00:00:00.000Z`).toISOString();
      onChange(isoDate);
    };

    return (
      <div className={`flex relative flex-col ${className}`}>
        {title && (
          <label
            className="block mb-2 text-sm font-medium text-white"
            htmlFor={id}
          >
            {title}
          </label>
        )}
        <div className="flex">
          <span className="rounded-l-md inline-flex items-center px-3 border-t bg-slate-700 border-l border-b border-slate-400 text-gray-500 shadow-sm text-sm">
            <CgCalendar color="white" />
          </span>
          <input
            type="date"
            name={name}
            id={id}
            autoComplete="off"
            value={localDate}
            ref={ref}
            onChange={handleChange}
            disabled={disabled}
            required
            className="rounded-r-lg flex-1 appearance-none border border-slate-400 w-full py-2 px-4 bg-slate-900 text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
      </div>
    );
  }
);

DateInput.displayName = "DateInput";

export default DateInput;
