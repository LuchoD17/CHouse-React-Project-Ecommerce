import { FaShoppingCart } from "react-icons/fa"
import { LogoContainer } from "../Navbar/navbar.elements"
function CartWidget({nameCart}) {
    return(
      <> 
      
      <LogoContainer>
      <p>{nameCart}</p>
      <FaShoppingCart/>
      </LogoContainer>
      </>
      )
  }
  export default CartWidget