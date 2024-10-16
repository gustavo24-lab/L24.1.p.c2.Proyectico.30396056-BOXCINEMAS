export default class Cl_mCine {
    constructor({dineroCaja}){
        this.mayor = 0;
        this.auxFamilia = "";
        this.acumDiaLunes = 0.0;
        this.contDias = 0;
        this.dineroCaja = dineroCaja;
        this.acumTotal = 0.0;
    }
    procesarFamilia(fa){
        this.acumTotal += fa.Pagar();
    if (fa.dia == 1){
        this.acumDiaLunes += fa.Pagar();
        this.contDias++;
    }   
    if (fa.Pagar() > this.mayor){
     this.mayor = fa.Pagar();
     this.auxFamilia = fa.apellido;
    }
 }
    devolverFamilia(){
        return this.auxFamilia;
    }
    promedioLunes(){
        return this.acumDiaLunes / this.contDias;
    }
    totalPagos(){
        return this.acumTotal- ( - this.dineroCaja);
    }
}