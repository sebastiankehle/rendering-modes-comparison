// Simple in-memory counter for demonstration purposes
const counters: Record<string, number> = {
  ssr: 0,
  ssg: 0,
  isr: 0,
  csr: 0,
};

export function incrementCounter(
  pattern: "ssr" | "ssg" | "isr" | "csr"
): number {
  counters[pattern] = (counters[pattern] || 0) + 1;
  return counters[pattern];
}

export function getCounter(pattern: "ssr" | "ssg" | "isr" | "csr"): number {
  return counters[pattern] || 0;
}
