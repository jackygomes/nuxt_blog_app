export function useDateUtils() {
  function formatDate(dateString, style = "short") {
    const date = new Date(dateString);

    if (style === "long") {
      // Format: Jan 24, 2024
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else if (style === "short") {
      // Format: 09.21.2024
      return date.toLocaleDateString("en-CA").replace(/-/g, ".");
    }
  }

  return { formatDate };
}
