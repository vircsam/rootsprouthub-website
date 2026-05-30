export type ApiError = {
  error: string;
};

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  withAuth = false
): Promise<T> {
  void path;
  void options;
  void withAuth;
  throw new Error('Backend API calls are disabled in the frontend.');
}
