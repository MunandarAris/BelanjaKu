const CountDiscount = (data) => {
  const counting = data.pricing - (data.promotion / 100) * data.pricing;

  return counting;
};

export { CountDiscount };
