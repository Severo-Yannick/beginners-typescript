type getNameArgs = {
  first: string;
  last?: string;
}

export const getName = (params: getNameArgs) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};