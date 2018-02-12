export function send(data) {
  fetch('http://whispering-bayou-72578.herokuapp.com/api/sendmail', {
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
