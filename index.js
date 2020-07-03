function submitData( n, e ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        n,
        e
      } )
    } )
    .then( function ( res ) {
      return res.json()
    } )
    .then( function ( obj ) {
      document.body.innerHTML = obj[ "id" ]
    } )
    .catch( function ( err ) {
      document.body.innerHTML = err.message
    } )
}