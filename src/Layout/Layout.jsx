import { useDispatch, useSelector } from 'react-redux';
import pizzalogo from '../assets/Images/pizza_logo.png'
import Footer from '../Components/Footer';
import { Link,useNavigate} from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';

function Layout({children}){

    // useselector hook use karte hai state mein se data lane ke liye 

    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout(e){
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div>
            <nav className="flex items-center justify-around h-16 text-[#687280] font-mono border-none shadow-md">
            {/* <div className="flex items-center justify-center"
                     onClick={() => navigate('/')}
                 /> */}
                <div className="flex items-center justify-center" onClick={()=>navigate('/')}>
                    <p>pizza app</p>
                    {' '}
                    <img className='h-10' src= {pizzalogo} alt='pizza logo'/>

                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>
                        <li className='hover:text-[#FF9110]'>
                            {' '}
                            <p className='cursor-pointer'>Menu{' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            {' '}
                            <p className='cursor-pointer'>Services{' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            {' '}
                            <p className='cursor-pointer'>About{' '}</p>
                        </li>

                    </ul>

                </div>
                <div>
                    <ul>
                        <li>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ):
                            <Link to={'/auth/login'}>Login</Link>
                        }

                        </li>
                    </ul>
                </div>
            </nav>
              {children}


            <Footer/>

            
        </div>

    )
}
 export default Layout;