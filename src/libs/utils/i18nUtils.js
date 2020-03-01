export function map2resources(languages, namespace = 'translation') {
  const resources = {};
  Object.keys(languages).forEach(key => {
    resources[key] = { [namespace]: languages[key] }
  });
  return resources;
};