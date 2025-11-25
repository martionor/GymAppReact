export function brzycki1RM(weight, reps) {
  if (!weight || !reps) return '';
  return (weight / (1.0278 - 0.0278 * reps)).toFixed(2);
}

/**
 * 
 * @param {Number} oneRM 
 * @param {Number} percent 
 * @returns {string}
 */
// Calculate percentage of 1RM
export function percentageOf1RM(oneRM, percent) {
  if (!oneRM || !percent) return '';
  return (oneRM * (percent / 100)).toFixed(2);
}

/**
 * @brief get common percentages at once
 * @param {Number} oneRM 
 * @returns 
 */
export function commonPercentages(oneRM) {
  if (!oneRM) return {};
  return {
    '50%': percentageOf1RM(oneRM, 50),
    '60%': percentageOf1RM(oneRM, 60),
    '70%': percentageOf1RM(oneRM, 70),
    '80%': percentageOf1RM(oneRM, 80),
    '90%': percentageOf1RM(oneRM, 90),
    '100%': percentageOf1RM(oneRM, 100),
  };
}