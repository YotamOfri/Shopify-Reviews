function convertToCSV(arr) {
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
function downloadCSV(csvData, filename = "Reviews.csv") {
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function getRandomDateTimeThisWeek() {
  const today = new Date();

  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayOfWeek = today.getDay();

  // Calculate the start of the week (Sunday)
  const startOfWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - currentDayOfWeek
  );

  // Generate a random number of days within the current week
  const randomDaysAgo = Math.floor(Math.random() * (currentDayOfWeek + 1));

  // Create a random date within this week
  const randomDateThisWeek = new Date(startOfWeek);
  randomDateThisWeek.setDate(randomDateThisWeek.getDate() + randomDaysAgo);

  // Randomize hours, minutes, and seconds
  randomDateThisWeek.setHours(Math.floor(Math.random() * 24));
  randomDateThisWeek.setMinutes(Math.floor(Math.random() * 60));
  randomDateThisWeek.setSeconds(Math.floor(Math.random() * 60));

  return randomDateThisWeek.toISOString();
}

export default { convertToCSV, downloadCSV, getRandomDateTimeThisWeek };
