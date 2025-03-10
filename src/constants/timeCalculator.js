export const timeCalculation = (dateString) => {
    if (!dateString) return "Unknown";
  
    const newsDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - newsDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  
    if (diffInHours >= 24) {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
  };
  