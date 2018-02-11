export function send(nama, umur) {
  console.log('nama: ', nama);
  console.log('umur: ', umur);
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
