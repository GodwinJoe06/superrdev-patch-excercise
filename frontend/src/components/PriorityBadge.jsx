export default function PriorityBadge({ priority }) {
  if (!priority) {
    return null;
  }

  const normalizedPriority = priority.toUpperCase();

  return (
    <span className={`priority-badge priority-${normalizedPriority.toLowerCase()}`}>
      {normalizedPriority}
    </span>
  );
}