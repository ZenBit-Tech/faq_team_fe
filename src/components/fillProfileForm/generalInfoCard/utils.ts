export const isValidFileList = (value: FileList): boolean => {
  if (!value || !(value instanceof FileList) || value.length === 0) {
    return false;
  }
  return true;
};

export const convertToBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};
