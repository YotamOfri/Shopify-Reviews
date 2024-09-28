import { forwardRef } from "react";
import { CgCalendar } from "react-icons/cg";

const DateInput = forwardRef(
  ({ title, value, onChange, className, disabled, id, name }, ref) => {
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
            value={value}
            ref={ref}
            onChange={(e) => {
              onChange(e.target.value);
            }}
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
