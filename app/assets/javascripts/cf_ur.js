//= require jquery
//= require jquery_ujs

function myFunction(){
  Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
    var estrato = $('#e_c_i').val();
    var unidades = $('#unidades').val();
    var n_vecinos =$('#n_vecinos').val();
    var n_publicaciones = $('#n_publicaciones').val();
    var tarifa_plena = parseFloat($('#tarifa_plena').attr('title'));
    var fact_mpal = parseFloat($('#fact_mpal').text());
    var indice= 0;
   if (estrato == 1 || estrato == 2){
    indice = 0.5;
   }
  if(estrato == 3){
   	indice = 1;
   }
  if(estrato == 4){
    indice = 1.5;
  }            
  $('#indice').text(indice);
  var costo_componente = unidades*indice*tarifa_plena*fact_mpal;
  $('.costo_componente').text('$'+costo_componente.format(0,3));
  var valor_vecinos =parseFloat($('#valor_vecinos').attr('title'));
  var valor_total_vecinos = valor_vecinos*n_vecinos;
  $('#valor_total_vecinos').text('$'+valor_total_vecinos.format(0,3));
  var valor_publicacion=parseFloat($('#valor_publicacion').attr('title'));
  var valor_total_publicaciones = valor_publicacion*n_publicaciones;
  $('#valor_total_publicaciones').text('$'+valor_total_publicaciones.format(0,3));
  var subtotal = costo_componente+valor_total_vecinos+valor_total_publicaciones;
  var iva= subtotal*0.16;
  $('#subtotal').text('$'+subtotal.format(0,3));
  $('#iva').text('$'+iva.format(0,3));
  $('#total').text('$'+(iva+subtotal).format(0,3));

};