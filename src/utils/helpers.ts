export const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export const copyToClipBoard = async (str: string) => {
  return await navigator.clipboard.writeText(str);
};
