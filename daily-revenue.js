const dailyRevenue = (transactions) => {
  const results = {};
  transactions.forEach(transaction => {
    date = new Date(transaction.timestamp).toUTCString();
    formattedDate = date.slice(0, 3) + date.slice(7, 11) + date.slice(4, 7) + date.slice(11, 16);
    if(results[formattedDate]) {
      results[formattedDate] += transaction.price
    } else {
      results[formattedDate] = transaction.price
    }
  });
  return results;
};

module.exports = dailyRevenue;