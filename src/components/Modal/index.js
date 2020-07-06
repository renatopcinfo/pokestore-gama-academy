import Swal from 'sweetalert2';

export default function endShop({ setCartItems, setTotalPrice, totalPrice }) {
  setCartItems([]);
  setTotalPrice(0);
  totalPrice('');

  Swal.fire({
    title: 'Obrigado pela compra!',
    text: `Você ganhou cashback: R$${Math.round(0.10 * totalPrice)},00 (5%)`,
    icon: 'success',
    confirmButtonText: 'Comprar mais'
  })
}