export const formatDate = (date: Date): string => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(new Date(date));
  return formattedDate;
};
