//= require jquery
//= require jquery_ujs

function myFunction(){

  function rounded(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }
  Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };

  var m2const = parseFloat($('#m2const').val());
  var m2const2 = parseFloat($('#m2const2').val());
  var n_publicaciones =$('#n_publicaciones').val();
  var tarifa_plena = parseFloat($('#tarifa_plena').attr('title'));
  var fact_mpal = parseFloat($('#fact_mpal').text());
  var indice= 0;
  var estrato = $('#e_c_i').val();
  var fact_reg=0;
  if (estrato == 1 || estrato == 2){
    indice = 0.5;
   }
  if(estrato == 3){
    indice = 1;
   }
  if(estrato == 4){
    indice = 1.5;
  }            

  $('.indice').text(indice);
  if(m2const >11000){
    fact_reg= rounded(2.2/(0.018+(800/m2const)),4);
  } else if(m2const>100){
    fact_reg = rounded(3.8/(0.12+(800/m2const)),4);
  }else if(m2const <= 100){
    fact_reg = 0.45;
  }
  $('#fact_reg').text(fact_reg);
  var costo_componente = rounded(indice*tarifa_plena*fact_mpal*fact_reg,0);
  $('.costo_componente').text('$'+costo_componente.format(0,3));
  var fact_reg2=0;
  if(m2const2>0){
    fact_reg2= rounded(4/(0.025+(2000/m2const2)),4);
  }
  $('#fact_reg2').text(fact_reg2);
  var costo_componente2 = rounded(indice*tarifa_plena*fact_mpal*fact_reg2,0);
  $('.costo_componente2').text('$'+costo_componente2.format(0,3));
  var n_publicaciones = $('#n_publicaciones').val();
  var valor_publicacion=parseFloat($('#valor_publicacion').attr('title'));
  var valor_total_publicaciones = valor_publicacion*n_publicaciones;
  $('#valor_total_publicaciones').text('$'+valor_total_publicaciones.format(0,3));
  var subtotal = costo_componente+costo_componente2+valor_total_publicaciones;
  var iva= rounded(subtotal*0.16,0);
  $('#subtotal').text('$'+subtotal.format(0,3));
  $('#iva').text('$'+iva.format(0,3));
  $('#total').text('$'+(iva+subtotal).format(0,3));
};