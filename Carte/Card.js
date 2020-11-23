function calculTotal() {
  var prix = Number(document.getElementsByClassName("shop-item-price").value);

  var quantite = Number(document.getElementsByClassName("quantity").value);

  var amount = Number(prix * quantite);
  document.getElementsByClassName("cart-total-price").value = amount;
}
