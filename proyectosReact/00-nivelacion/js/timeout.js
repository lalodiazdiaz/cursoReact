const evaluar = () => {
  const edad = prompt("Caul es tu edad?");
  if (edad < 18) {
    alert("menor de edad");
    return;
  }
  alert("mayor de edad");
};

// evaluar();

setTimeout(evaluar, 2000);
