export function mockHook<T extends (...args: any[]) => any>(
  hook: T
): jest.Mock {
  return hook as unknown as jest.Mock;
}
