export default function convertToCSV(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return "";
  }

  // UTF-8 Byte Order Mark
  const BOM = "\uFEFF";

  // Extract column headers
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(arr[0]);

  let csv = BOM + keys.join(columnDelimiter) + lineDelimiter;

  // Extract each row
  arr.forEach((item) => {
    keys.forEach((key, index) => {
      if (index > 0) csv += columnDelimiter;

      // Replace any inner double quotes and surround the field with double quotes
      // This allows for commas and line breaks within the field
      const field =
        item[key] === null || item[key] === undefined ? "" : item[key];
      csv += `"${field.toString().replace(/"/g, '""')}"`;
    });
    csv += lineDelimiter;
  });

  return csv;
}
