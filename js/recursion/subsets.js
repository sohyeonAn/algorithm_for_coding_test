const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const ele = elements[0];
  const reminingElements = elements.slice(1);
  const subsetsWithoutEle = subsets(reminingElements);
  const subsetsWithEle = subsetsWithoutEle.map((sub) => [ele, ...sub]);
  return [...subsetsWithoutEle, ...subsetsWithEle];
};

console.log(subsets(["a", "b", "c"]));
