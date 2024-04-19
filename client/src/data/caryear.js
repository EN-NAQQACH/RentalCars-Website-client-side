function generateYears() {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
}
export default generateYears;