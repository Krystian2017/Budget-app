import React from "react";
import { connect } from "react-redux";
import { groupBy } from "lodash";

import { ToggleableList } from "components";
import ParentCategory from "./ParentCategory";
import CategoryItem from "./ParentCategory";

function BudgetCategoryList({ budgetedCategoryies, allCategories }) {
  const budgetCategoriesByParent = groupBy(
    budgetedCategoryies,
    (item) =>
      allCategories.find((category) => category.id === item.categoryId)
        .parentCategory.name
  );

  const listItems = Object.entries(budgetCategoriesByParent).map(
    ([parentName, categories]) => ({
      id: parentName,
      Trigger: ({ onClick }) => (
        <ParentCategory name={parentName} onClick={() => onClick(parentName)} />
      ),
      children: categories.map((budgetCategory) => {
        const { name } = allCategories.find(
          (category) => category.id === budgetCategory.categoryId
        );
        return <CategoryItem key={budgetCategory.id} name={name} />;
      }),
    })
  );

  return <ToggleableList items={listItems} />;
}

export default connect((state) => ({
  budgetedCategoryies: state.budget.budgetedCategoryies,
  allCategories: state.common.allCategories,
}))(BudgetCategoryList);
