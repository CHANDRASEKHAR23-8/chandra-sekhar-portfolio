/**
 * Utility function to conditionally combine class names.
 * Avoids extra bundle overhead while handling conditional classes cleanly.
 *
 * @param  {...any} classes - Class names or conditions
 * @returns {string} Combined class names string
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
