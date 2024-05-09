function sortKeysAlphabetically(obj) {
  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = obj[key];
    });
  return sortedObj;
}

function sortProjects(projects) {
  return projects.map((project) => sortKeysAlphabetically(project.toObject()));
}
