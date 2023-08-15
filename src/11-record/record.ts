type CreateCache = {
  cache: { [id: number]: string };
  add: (id: number, value: string) => void;
  remove: (id: number) => void;
};

export const createCache = (): CreateCache => {
  const cache = {};

  const add = (id: number, value: string) => {
    cache[id] = value;
  };

  const remove = (id: number) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};
