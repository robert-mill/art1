const linkResolver = (doc) => {
  if (doc.type === "page" && doc.uid !== "home") {
    return `/${doc.uid}/`;
  }
  if (doc.type === "person") {
    return `/author/${doc.uid}/`;
  }
  // Return a default or null for other types, or use Route Resolver
  return "/";
};

export default linkResolver;