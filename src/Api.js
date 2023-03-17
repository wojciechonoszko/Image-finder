
const BASE_URL = "https://pixabay.com/api/";
const KEY = '26533156-9695e0ec144eb89afbc08934a';


export async function fetchGallery(searchQuery, page) {
    const response = await fetch(
    `${BASE_URL}?key=${KEY}&page=${page}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=18`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error("Not found. Try to change name"));
  }
