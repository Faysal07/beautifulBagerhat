export default function FeaturePage() {
    return(
        <div className="py-[30px] bg-[#f7f8f9]">
            <div className="container md:max-w-[1370px] m-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                    <h2 className="text-[16px] font-bold uppercase">Featured Posts</h2>
                    <h6 className="md:text-right text-[16px] font-semibold">Hot tags: #covid-19 #Inspiration #Work online #stay home</h6>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 py-[30px]">
                    <div className="hero md:col-span-2" style={{backgroundImage: "url(https://i.postimg.cc/1zfkVfnv/news-4.jpg)",}}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content content-end">
                            <div className="m-[30px]">
                                <h5>Travel. Animal</h5>
                                <h1 className="mb-5 text-[25px] font-bold">Beachmaster Elephant Seal Fight off Rival Male, The Match is Uncompromising</h1>
                                <h5>20 minutes ago . 23k Views</h5>
                                <button className="btn btn-primary">Read The Artical</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="">
                            <img src="https://i.postimg.cc/kXNq768z/news-1.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h4 className="text-yellow-400 text-[15px] font-bold">Travel . Food .</h4>
                            <h2 className="card-title"><a href="#">Want fluffy japanese pancakes but can't fly to to Tokyo?</a></h2>
                            <p>02 January . 12 Mins Read . 23K Views</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read Artical</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="">
                            <img src="https://i.postimg.cc/J4zrtgZP/news-7.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h4 className="text-yellow-400 text-[15px] font-bold">Fashion .</h4>
                            <h2 className="card-title"><a href="#">Put Yourself in Your Customers Shoe</a></h2>
                            <p>02 January . 12 Mins Read . 23K Views</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read Artical</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="">
                            <img src="https://i.postimg.cc/wMfdhqL0/news-9.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h4 className="text-red-500 text-[15px] font-bold">Travel .</h4>
                            <h2 className="card-title"><a href="#">Life and Death in the Empire of the Tiger.</a></h2>
                            <p>02 January . 12 Mins Read . 23K Views</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read Artical</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="">
                            <img src="https://i.postimg.cc/bvj4SDW7/news-11.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h4 className="">Lifestyle .</h4>
                            <h2 className="card-title"><a href="#">When Two Wheels are Better Than Four</a></h2>
                            <p>02 January . 12 Mins Read . 23K Views</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Read Artical</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}