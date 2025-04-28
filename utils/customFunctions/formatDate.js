export const formatDate = (rawDate) => {
  const date = new Date(rawDate);

  const options = {
    weekday: "short", // Thu
    day: "2-digit", // 23
    month: "short", // Sept
    hour: "2-digit", // 03
    minute: "2-digit", // 40
    hour12: true, // AM/PM format
    timeZone: "Africa/Lagos", // or set your timezone
  };

  let formattedDate = date.toLocaleString("en-US", options);

  // Fix small issues with extra commas if needed
  formattedDate = formattedDate.replace(",", "");

  return formattedDate;
};
