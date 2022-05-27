export const apiProxy = (url: string) => {
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
};
