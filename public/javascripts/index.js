const Timer = (function () {
  function Timer(idElemento) {
    this.hora = moment().startOf('day');
    this.idElemento = idElemento;
  }

  Timer.prototype.timer = function() {
    $(`#${this.idElemento}`).html(this.hora.format('H:mm:ss'));
    this.hora.add(1, 's');
  }

  Timer.prototype.iniciar = function() {
    setInterval(this.timer.bind(this), 1000);
  }

  return Timer;
})();

const Comandas = (function () {
  function Comandas() {
  }

  Comandas.prototype.reloj = function () {
    $('#reloj').html(moment().format('H:mm:ss'));
  }
  
  Comandas.prototype.iniciarReloj = function() {
    setInterval(this.reloj, 1000);
  }

  return Comandas;
})();

(function() {
  const comandas = new Comandas();
  comandas.iniciarReloj();
})();