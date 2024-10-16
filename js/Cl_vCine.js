export default class Cl_vCine { 
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.inDineroCaja = document.getElementById("mainForm_inDineroCaja");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblDevolverFamilia = document.getElementById("mainForm_lblDevolverFamilia");
    this.lblPromedioLunes = document.getElementById("mainForm_lblPromedioLunes");
    this.lblTotalPagos = document.getElementById(  "mainForm_lblTotalPagos");
    this.btAceptar = document.getElementById("mainForm_btAceptar");

    this.btAceptar.onclick = () =>
      controlador.agregarCine({
        dineroCaja: this.inDineroCaja.value,
      });
    this.btAgregar.onclick = () => 
      controlador.mostrarVistaFamilia();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarFamilia({
    apellido,
    persona,
    dia,
    Pagar,
    devolverFamilia,
    promedioLunes,
    totalPagos,

  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${apellido}</td>
      <td>${persona}</td>
      <td>${dia}</td>
      <td>${Pagar}</td>
    </tr>`;
    this.lblDevolverFamilia.innerHTML = devolverFamilia;
    this.lblPromedioLunes.innerHTML = promedioLunes;
    this.lblTotalPagos.innerHTML = totalPagos;
  }
}
