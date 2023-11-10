import { useSelector } from "react-redux";


const Cart=()=>{

  //  const dispatch=useDispatch();
  const cartItems=useSelector((store)=>store.cart.items)



return(

    
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold"> Cart </h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg"
        //  onClick={handelClearCart}
         >Clear Cart
        </button>
        
      </div>

    </div>

);
}
export default Cart;