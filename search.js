function submitForm() {
  const search = document.getElementById("search").value;
  const filter = document.getElementById("filter").value;
  const priceFilter = document.getElementById("price-filter").value;

  // Here you can add your code to search and filter the NFTs.
  // For example, you can use fetch to send the search and filter parameters to your server:

  fetch('/api/nfts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ search, filter, priceFilter })
  })
  .then(response => response.json())
  .then(data => {
    // Here you can handle the response from the server, for example, display the search results to the user.
    console.log(data);
  })
  .catch(error => {
    // Here you can handle any errors that may occur while searching and filtering the NFTs.
    console.error(error);
  });
}
