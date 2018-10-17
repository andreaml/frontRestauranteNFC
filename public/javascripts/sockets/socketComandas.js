var socket = io.connect('http://localhost:3000');
var contador = 0;
socket.on('message', function (data) {
  const idComanda = `comanda-${contador++}`;
  const timer = new Timer(idComanda);
  const comanda = { ...data, idComanda }
  document.getElementById('comandas').innerHTML += getComandaHtml(comanda);
  timer.iniciar();
});

function getComandaHtml(comanda) {
  return `<div class="col-12 col-md-3">
            <img src="${comanda.img}" class="img-fluid img-comanda" alt="${comanda.nombre}">
            <h4 id="${comanda.idComanda}"></h4>
          </div>`;
}