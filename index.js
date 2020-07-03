// Add your code here
let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
function sumitData(name, email){
  fetch('http://localhost:3000/users', {users:name,email:email}).then().then().catch(err=>console.log(err))
}