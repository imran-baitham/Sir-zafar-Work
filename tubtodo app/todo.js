function addMore(){
     document.getElementById('error').innerHTML = '';

     let name = document.getElementById('name').value;
     if(name === ''){
          document.getElementById('error').innerHTML = "Plz input Data"
     }
     
}