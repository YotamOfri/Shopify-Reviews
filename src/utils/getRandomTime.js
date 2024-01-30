export default function getRandomDateTimeThisWeek() {
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
