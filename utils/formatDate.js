// displays the date in "wwww, dd mmmm yyyy" format
module.exports = (isoDateString) => {
  const date = new Date(isoDateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
}
