export type Group = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export async function listGroups() {
  return [
    {
      id: 1,
      name: 'Systems Builders',
      description: 'A local demo group for operating systems and low-level projects.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

export async function createGroup(name: string, description?: string) {
  return {
    id: Date.now(),
    name,
    description: description || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
