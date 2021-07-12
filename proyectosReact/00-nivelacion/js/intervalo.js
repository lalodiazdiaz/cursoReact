const saludo = () => {
  document.write("<li>Hola,Mundo</li>");
};

document.write("<ol>");

setInterval(saludo, 1000);

document.write("</ol>");
