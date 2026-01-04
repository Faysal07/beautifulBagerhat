export default function FooterPage() {
    return(
        <div>
           <footer className="footer bg-[#f7f8f9] py-[70px]">
                <div className="container md:max-w-[1370px] m-auto">
                    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6">
                        <div>
                            <h5 className="text-[16px] font-bold md:pb-[5px] uppercase">About Me</h5>
                            <span className="border-b-2  border-indigo-500 w-[40px] block mb-[20px]"></span>
                            <p className="text-[14px] md:pb-[15px] ">Start writing, no matter what. The <br />Water does not flow until the faucet is <br />turned on.</p>
                            <h6 className="text-[15px] font-bold md:pb-[5px]">Address</h6>
                            <address className="text-[14px] md:pb-[15px]">123 Main Street<br /> New York, NY 10001</address>
                            <h6 className="text-[15px] font-bold md:pb-[5px]">Follow Me</h6>
                            <ul>
                                <li className="inline-block px-[10px] py-[12px]"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                <li className="inline-block px-[10px] py-[12px]"><a href="#"><i className="fa-brands fa-square-twitter"></i></a></li>
                                <li className="inline-block px-[10px] py-[12px]"><a href="#"><i className="fa-brands fa-github"></i></a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[16px] font-bold md:pb-[5px] uppercase">Quick Link</h5>
                            <span className="border-b-2  border-indigo-500 w-[40px] block mb-[20px]"></span>
                            <ul>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] duration-[2s,2s]"><a href="#">About me</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] duration-[2s,2s]"><a href="#">Help & Support</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] duration-[2s,2s]"><a href="#">Liecensing Policy</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] duration-[2s,2s]"><a href="#">Refund Policy</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] duration-[2s,2s]"><a href="#">Hire me</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] duration-[2s,2s]"><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[15px] font-bold md:pb-[5px] uppercase">Tag Could</h5>
                            <span className="border-b-2  border-indigo-500 w-[40px] block mb-[20px]"></span>
                            <ul>
                                <li className="text-[15px] hover:text-[#5869da] md:inline-block md:mr-[8px]"><a href="#" className="px-[30px] py-[10px] rounded-[15px] bg-[#f2f3f5] hover:border-[1px]  duration-[2s,2s]">Beautiful</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] md:inline-block md:m-[8px]"><a href="#" className="px-[30px] py-[10px] rounded-[15px] bg-[#f2f3f5] hover:border-[1px]  duration-[2s,2s]">New York</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] md:inline-block md:m-[8px]"><a href="#" className="px-[30px] py-[10px] rounded-[15px] bg-[#f2f3f5] hover:border-[1px]  duration-[2s,2s]">Droll</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] md:inline-block md:m-[8px]"><a href="#" className="px-[30px] py-[10px] rounded-[15px] bg-[#f2f3f5] hover:border-[1px]  duration-[2s,2s]">Intimate</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] md:inline-block md:m-[8px]"><a href="#" className="px-[30px] py-[10px] rounded-[15px] bg-[#f2f3f5] hover:border-[1px]  duration-[2s,2s]">Loving</a></li>
                                <li className="text-[15px] py-[6px] hover:text-[#5869da] md:inline-block md:m-[8px]"><a href="#" className="px-[30px] py-[10px] rounded-[15px] bg-[#f2f3f5] hover:border-[1px]  duration-[2s,2s]">Fighting</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[15px] font-bold md:pb-[5px] uppercase">Newsletter</h5>
                            <span className="border-b-2  border-indigo-500 w-[40px] block mb-[20px]"></span>
                            <p className="text-[15px] md:pb-[5px] ">Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                            <div className="join my-[15px]">
                                <div className="">
                                    <label className="input validator join-item">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input type="email" placeholder="Enter Your Email" required />
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                                </div>
                                <button className="btn btn-neutral join-item">Subscribe</button>
                            </div>
                            <label className="label">
                                <input type="checkbox" className="checkbox" />
                                    I agree to the teams & conditions
                            </label>
                        </div>
                    </div>
                </div>
           </footer>

           <section className="footer-top bg-[#f7f8f9] sm:px-[10px]">
                <div className="container md:max-w-[1370px] m-auto border-t-2">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-6 sm:gap-3">
                        <footer className="footer sm:footer-horizontal md:p-4 sm:text-center">
                            <aside>
                                <p>Copyright © {new Date().getFullYear()}, Stories - Personal Blog Next JS Project</p>
                            </aside>
                        </footer>
                        <div className="footer sm:footer-horizontal md:p-4 sm:p-2 md:text-right sm:text-center">
                            <p className="w-full inline-block">Design by <a href="#" className="inline-block text-primary font-bold hover:text-[]">Sheikh Faysal Tareque</a> | All rights reserved</p>
                        </div>
                    </div>
                </div>
           </section>

            {/* // Font Awasome Icons Link */}
            <script src="https://kit.fontawesome.com/9f5f48c4c7.js" crossOrigin="anonymous"></script>
        </div>
    );
}