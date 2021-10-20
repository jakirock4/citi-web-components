export function format(first: string, middle: string, last: string): string {
  // eslint-disable-next-line @stencil/strict-boolean-conditions
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
