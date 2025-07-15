export const extractImdbIdFromUrl = (url) => {
  const match = url.match(/title\/(tt\d+)/);
  return match ? match[1] : null;
};
