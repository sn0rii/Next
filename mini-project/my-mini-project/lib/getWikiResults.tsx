export default async function getWikiResults(searchTerm: string) {
  const decodedSearchTerm = decodeURIComponent(searchTerm);
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: decodedSearchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  const response = await fetch(
    "https://pl.wikipedia.org/w/api.php?" + searchParams
  );
  console.log(searchParams.toString());
  console.log(searchTerm);
  return response.json();
}
