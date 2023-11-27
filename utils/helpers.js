module.exports = {
  format_date: (date) => {
    // Formats the date as into MDY formate
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // formats larger numbers with commas
    return parseInt(amount).toLocaleString();
  },
};
