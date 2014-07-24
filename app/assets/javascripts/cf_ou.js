//= require jquery
//= require jquery_ujs
$(function() {
  var moveLeft = 20;
  var moveDown = 10;

  $('#e_c_i').hover(function(e) {
    $('div#pop-up').show();
      //.css('top', e.pageY + moveDown)
      //.css('left', e.pageX + moveLeft)
      //.appendTo('body');
  }, function() {
    $('div#pop-up').hide();
  });

  $('#e_c_i').mousemove(function(e) {
    $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });

});

function myFunction(){
    function rounded(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
    var categoria = $('#e_c_i').val();
    var n_vecinos =$('#n_vecinos').val();
    var n_prensa = $('#n_prensa').val();
    var tarifa_plena = parseFloat($('#tarifa_plena').attr('title'));
    var fact_mpal = parseFloat($('#fact_mpal').text());
    var indice= 0;
   if (categoria == 1 ){
    indice = 2.9;
   }
  if(categoria == 2){
   	indice = 3.2;
   }
  if(categoria == 3){
    indice = 4;
  }            
  $('#indice').text(indice);
  var costo_componente = rounded(indice*tarifa_plena*fact_mpal,2);
  $('#valor_costo_componente').text('$'+costo_componente.format(0,3));
  var valor_vecinos =parseFloat($('#valor_vecinos').attr('title'));
  var valor_total_vecinos = valor_vecinos*n_vecinos;
  $('#valor_total_vecinos').text('$'+valor_total_vecinos.format(0,3));
  var valor_prensa =parseFloat($('#valor_prensa').attr('title'));
  var valor_total_prensa = valor_prensa*n_prensa;
  $('#valor_total_prensa').text('$'+valor_total_prensa.format(0,3));
  var valor_parcial = rounded(valor_prensa+valor_vecinos+costo_componente,0);
  var iva= rounded(valor_parcial*0.16,0);
  $('#valor_parcial').text('$'+valor_parcial.format(0,3));
  $('#iva').text('$'+iva.format(0,3));
  $('#total').text('$'+(iva+valor_parcial).format(0,3));

};