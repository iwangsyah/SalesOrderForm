export function send(data) {
  console.log('data : ', data);
  fetch('http://localhost:8080/api/sendmail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: data
    })
  })
}
