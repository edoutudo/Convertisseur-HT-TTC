function calcule_ht_ttc(result) 
{
  var prix_ht = $('input[name="prix_ht"]').val();
  var taux_tva = $('input[name="taux_tva"]').val();
  var prix_ttc = $('input[name="prix_ttc"]').val();
  
  if(result.target.name=='prix_ttc')
  {
    var new_prix_ht = (prix_ttc/(1+taux_tva/100)).toFixed(2);   
    $('input[name="prix_ht"]').val(new_prix_ht);
  }
  else
  {
    var new_prix_ttc = (prix_ht*(1+taux_tva/100)).toFixed(2);   
    $('input[name="prix_ttc"]').val(new_prix_ttc);
  } 
}


$(function()
{
  $('.myForm input').bind('keyup mouseup', calcule_ht_ttc); 
});