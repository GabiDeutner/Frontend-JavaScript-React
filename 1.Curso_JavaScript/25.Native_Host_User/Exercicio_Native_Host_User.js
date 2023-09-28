// EXERCICIOS

// Liste 5 objetos nativos
Object
String
Array
Function
Number

// Liste 5 objetos do browser
Window
history
Document
HTMLCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitVisibilityState !== "undefined" ) {
  console.log('Existe');
} else {
  console.log('Não existe');
}