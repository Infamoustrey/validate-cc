// Simple Lugn Algorithm check
const validateCC = credit_card_number => {
  return (
    credit_card_number
      .split("")
      .filter(d => !["-", " "].includes(d))
      .slice(0, 15)
      .map(d => parseInt(d))
      .map((d, i) => (i % 2 == 0 ? d * 2 : d))
      .map(d => (d > 9 ? parseInt((d + "")[0]) + parseInt((d + "")[1]) : d))
      .reduce(
        (a, c) => a + c,
        parseInt(credit_card_number.charAt(credit_card_number.length - 1))
      ) %
      10 ===
    0
  );
};

module.exports = validateCC;
