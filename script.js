const shop = {
  discount: 10.22,
  debt: 100,
  paid: 300,
};

const btn = document.getElementById('fetch');

btn.addEventListener('click', () => {
  postData('http://127.0.0.1:5000/data', shop).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
});
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'admin-123',
    },
    redirect: 'manual',
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
