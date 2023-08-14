interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = () => {
  return fetch("https://swapi.dev/api/people/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("data -----", data);
      return data as LukeSkywalker;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
};
