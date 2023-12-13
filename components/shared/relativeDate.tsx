// TODO: write unit tests for this
export function formatRelativeDate(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = now.getTime() - date.getTime();

  // Convert difference to seconds, minutes, hours, and days
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Less than 24 hours
  if (hours < 24) {
    if (minutes < 60) {
      return minutes > 0 ? `${minutes}m` : `${seconds}s`;
    }
    return `${hours}h`;
  }

  // More than 24 hours and less than 5 days
  if (days < 5) {
    return `${days}d`;
  }

  // More than 5 days
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const currentYear = now.getFullYear();

  if (year === currentYear) {
    return `${day} ${month}`;
  }
  return `${day} ${month}, ${year}`;
}

export function formatDateToFullFormat(dateStr: string): string {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Padding single digit minutes and hours with '0'
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day} ${month}, ${year}; ${hours}:${minutes}:${seconds}`;
}

export default function RelativeDate(props: { date: string }) {
  return (
    <span title={formatDateToFullFormat(props.date)}>
      {formatRelativeDate(props.date)}
    </span>
  );
}
