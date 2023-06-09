
export default function validation(inputs) {
    const error={};
     const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp("[0-9]");

   if (!regexEmail.test(inputs.username)) {
    error.username ="Nombre debe ser un email valido!";
}
   if (!inputs.username) {
    error.username ="el nombre es obligatorio";
 }
   if (inputs.username.length >35) {
    error.username ="Maximo 35 caracteres"
   }
   if (!regexPass.test(inputs.password)) {
    error.password ="Al menos un numero";
}  
if(inputs.password.length< 6 || inputs.password.length > 10){
    error.password ="Entre 6 y 10 caracteres";
}  


return error;
    
}