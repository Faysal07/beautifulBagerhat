//Import image here
import HeaderLogo from "../../../../public/images/logo.png";

export default function HeaderPage() {
    return(
        <div className="">
            <section className="headerTop">
                <div className="container md:max-w-[1370px] m-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="headerLogo">
                            <img src={HeaderLogo} alt="Header Logo" />
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </section>
            <header className="header">
                <div className="container md:max-w-[1370px] m-auto">
                    <div className="grid grid-cols-1">
                        <div className="navbar bg-base-100">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                    </div>
                                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a>Home</a></li>
                                        <li><a>About us</a></li>
                                        <li>
                                            <a>Travel</a>
                                            <ul className="p-2">
                                                <li><a>Tour Guides</a></li>
                                                <li><a>Tour Food</a></li>
                                                <li><a>Transport Review</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Fruits & Vegetables</a>
                                            <ul className="p-2">
                                                <li><a>Meat & Poultry</a></li>
                                                <li><a>Cuts & Sprouts</a></li>
                                                <li><a>Fresh Vegetables</a></li>
                                            </ul>
                                        </li>
                                        <li><a>Hotels</a></li>
                                        <li><a>Healthy</a></li>
                                        <li>
                                            <a>Blog</a>
                                            <ul className="p-2">
                                                <li><a>Travels Blog</a></li>
                                                <li><a>Food Blogs</a></li>
                                                <li><a>Hotels Blog</a></li>
                                                <li><a>Health Blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a>Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li><a className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Home</a></li>
                                        <li><a className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">About us</a></li>
                                    <li>
                                        <details>
                                            <summary className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Travel</summary>
                                            <ul className="p-2 bg-base-100 w-60 z-1">
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Tour Guides</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Tour Food</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Transport Review</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Fruits & Vegetables</summary>
                                            <ul className="p-2 bg-base-100 w-60 z-1">
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Meat & Poultry</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Cuts & Sprouts</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Fresh Vegetables</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li><a className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Hotels</a></li>
                                    <li><a className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Healthy</a></li>
                                    <li>
                                        <details>
                                            <summary className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Blog</summary>
                                            <ul className="p-2 bg-base-100 w-60 z-1">
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Travels Blog</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Food Blogs</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Hotels Blog</a></li>
                                                <li><a className="md:px-[25px] md:py-[12px] font-regular hover:font-bold text-[14px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Health Blog</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li><a className="md:px-[25px] md:py-[12px] font-bold text-[17px] font-sans hover:text-[#ffffff] hover:bg-[#5869da]">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="navbar-end">
                                <div className="headerSocialMedia">
                                    <ul>
                                        <li className="inline-block px-[10px] py-[12px]"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li className="inline-block px-[10px] py-[12px]"><a href="#"><i className="fa-brands fa-square-twitter"></i></a></li>
                                        <li className="inline-block px-[10px] py-[12px]"><a href="#"><i className="fa-brands fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}