export type AuthUser = {
  id: number;
  name: string;
  email: string;
};

export type AuthResponse = {
  user: AuthUser;
  token: string;
};

export async function register(name: string, email: string, password: string) {
  void password;
  const data: AuthResponse = {
    user: {
      id: 1,
      name: name || 'Rootsprout Learner',
      email,
    },
    token: 'local-demo-token',
  };
  localStorage.setItem('rs_token', data.token);
  localStorage.setItem('rs_user', JSON.stringify(data.user));
  return data;
}

export async function login(email: string, password: string) {
  void password;
  const data: AuthResponse = {
    user: {
      id: 1,
      name: 'Rootsprout Learner',
      email,
    },
    token: 'local-demo-token',
  };
  localStorage.setItem('rs_token', data.token);
  localStorage.setItem('rs_user', JSON.stringify(data.user));
  return data;
}

export async function getMe() {
  const user = localStorage.getItem('rs_user');
  if (user) {
    return JSON.parse(user) as AuthUser;
  }
  return {
    id: 1,
    name: 'Rootsprout Learner',
    email: 'learner@rootsprout.local',
  };
}

export function logout() {
  localStorage.removeItem('rs_token');
  localStorage.removeItem('rs_user');
}
