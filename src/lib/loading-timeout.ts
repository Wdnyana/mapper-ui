export function loadingTimeout(
  callback: () => void,
  duration: number = 3500,
): () => void {
  const timer = setTimeout(() => {
    callback()
  }, duration)

  return () => clearTimeout(timer)
}
