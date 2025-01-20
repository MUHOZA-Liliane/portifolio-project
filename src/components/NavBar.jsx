
 
import Logo from '../assets/Logo.svg'
const NavBar = () => {
  return (
    <main className="fixed bg-lime-800 w-full h-20 rounded-xl flex items-center justify-between px-8">
 <img src={Logo} alt="Logo" className="rounded-full w-20 " />
      <nav>
        <ul className="flex space-x-10">
           <li><a href="#Home" className="text-black">Home</a></li>
           <li><a href="#Hero" className="text-black">Hero</a></li>
           <li><a href="#AboutMe" className="text-black">AboutMe</a></li>
           <li><a href="#ContactMe" className="text-black">contactMe</a></li>
           <li><a href="#Skills" className="text-black">Skills</a></li>
        </ul>
      </nav>
     </main>
  );
 };
 export default NavBar;



