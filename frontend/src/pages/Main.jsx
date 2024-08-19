function Main() {
    const userId = 'user';
    const password = '1234';
  
    fetch('/api/userData', {
        method: 'POST',
        body: JSON.stringify({userId: userId, password: password}),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
  .then(res => res.json()).then(data => console.log(data))
  .catch(err => console.log(err));
  
    return (
     <></>
    );
  }
  
  export default Main;
  