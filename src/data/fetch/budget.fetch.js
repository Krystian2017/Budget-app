export const fetchBudget = (id) => {
  const promis = fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`
  );

  return promis;
};

export const fetchBudgetedCategories = (id) => {
  const promis = fetch(
    `${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`
  );

  return promis;
};
