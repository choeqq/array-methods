const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
  useForEach(ids);
};

document.addEventListener("DOMContentLoaded", initApp);

const getPost = async (id: number) => {
  return await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
};

const useForEach = (ids: number[]) => {
  ids.forEach((id) => console.log(id));
};
