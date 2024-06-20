export const formatDate = (date: Date): string => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
  return formattedDate;
};
