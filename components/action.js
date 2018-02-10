export function send(nama, umur, state) {
  console.log('nama: ', nama);
  console.log('umur: ', umur);
  console.log('state: ', state);
  fetch('http://localhost:8080/api/sendmail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nama: nama,
      umur: umur,
    })
  })
}
