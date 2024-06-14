functionvalidate (){
 x  =document.myForm
  txt =x.myInput.value
  if (txt1>= && txt5){
    return true
  } else {
    (txt < 1) alert("Es menor que 1, debe estar entre 1 y 5")
    else if (txt > 1) alert("Es mayor que 5, debe estar entre 1 y 5")
    else alert("No es válido, debe estar entre 1 y 5")
    return false
  }
}