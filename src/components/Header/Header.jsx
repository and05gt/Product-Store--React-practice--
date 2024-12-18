import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useSelector(selectCart);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-white px-4 md:px-8 gap-2">
      <div>
        <p className="text-3xl font-bold">
          <span className="italic text-orange">Product</span>Store
        </p>
      </div>

      <div className="flex gap-2 md:gap-8 items-center">
        <div>
          <Link className="text-lg font-medium hover:underline" to="/">
            Products
          </Link>
        </div>
        <div className="relative flex items-center justify-center w-10 h-10">
          <button onClick={() => navigate("/cart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <div className="absolute flex items-center justify-center rounded-full w-4 h-4 top-0 right-0 text-xs bg-orange">
            <span>{cart.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// <div className="navbar bg-white">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
//       <span className="italic text-orange">Product</span>Store
//     </a>
//   </div>
//   <div className="flex-none">
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost">
//         <Link className="link link-hover" to="/">
//           Products
//         </Link>
//       </div>
//     </div>
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//         <div className="indicator">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//             />
//           </svg>
//           <span className="badge badge-sm indicator-item">
//             {cart.length}
//           </span>
//         </div>
//       </div>
//       <div
//         tabIndex={0}
//         className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
//       >
//         <div className="card-body">
//           <span className="text-lg font-bold">{cart.length} Items</span>
//           {cart.length > 0 && (
//             <span className="text-info">Total Amount: {totalAmount}$</span>
//           )}
//           {/* <span className="text-info">Subtotal: $999</span> */}
//           <div className="card-actions">
//             <button
//               className="btn btn-primary btn-block"
//               onClick={() => navigate("/cart")}
//             >
//               View cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="dropdown dropdown-end">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn btn-ghost btn-circle avatar"
//       >
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS Navbar component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//           />
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//       >
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li>
//           <a>Settings</a>
//         </li>
//         <li>
//           <a>Logout</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
