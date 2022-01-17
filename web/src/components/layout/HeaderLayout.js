import react from "react";

export const HeaderLayout = () => {
    return(
        <>
        {/* Header */}
        <header className="transparent">
            <div className="topbar">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="topbar-left">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        <i className="fa fa-phone text-blue" /> +0123 456 789
                        </li>
                        <li className="list-inline-item">
                        <i className="fa fa-envelope-o"> </i> support@coinex.com
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="topbar-right text-right">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                        <ul className="list-inline iq-left">
                            <li className="list-inline-item">
                            <a
                                href="#"
                                data-toggle="modal"
                                data-target=".iq-login"
                                data-whatever="@mdo"
                            >
                                <i className="fa fa-lock" />
                                Login
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a
                                href="#"
                                data-toggle="modal"
                                data-target=".iq-register"
                                data-whatever="@fat"
                            >
                                <i className="fa fa-user" />
                                Register
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="list-inline-item">
                        <a href="#">
                            <i className="fa fa-comments-o" />
                            Free Consulting
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="iq-header">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="logo">
                    <a href="home-1.html">
                        <img
                        id="logo_img"
                        className="img-fluid"
                        src="images/logo-white.png"
                        alt="logo"
                        />
                    </a>
                    </div>
                    <nav>
                    {" "}
                    <a
                        id="resp-menu"
                        className="responsive-menu"
                        href="#"
                    >
                        <i className="fa fa-reorder" /> Menu
                    </a>
                    <ul className="menu text-right">
                        <li>
                        <a className="active" href="#">
                            HOME
                        </a>
                        <ul className="sub-menu">
                            <li>
                            <a className="active" href="home-1.html">
                                Home 1
                            </a>
                            </li>
                            <li>
                            <a href="home-2.html">Home 2</a>
                            </li>
                            <li>
                            <a href="home-3.html">Home 3</a>
                            </li>
                            <li>
                            <a href="home-4.html">Home 4</a>
                            </li>
                            <li>
                            <a href="home-5.html">Home 5</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                            <a href="#">
                                Services{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="services-1.html">Services 1</a>
                                </li>
                                <li>
                                <a href="services-2.html">Services 2</a>
                                </li>
                                <li>
                                <a href="services-3.html">Services 3</a>
                                </li>
                                <li>
                                <a href="services-details.html">Services Details</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="history.html">History</a>
                            </li>
                            <li>
                            <a href="event.html">Event</a>
                            </li>
                            <li>
                            <a href="customer-support.html">Customer Support</a>
                            </li>
                            <li>
                            <a href="clients.html">Clients</a>
                            </li>
                            <li>
                            <a href="#">
                                Team{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="team-1.html">Team 1</a>
                                </li>
                                <li>
                                <a href="team-2.html">Team 2</a>
                                </li>
                                <li>
                                <a href="team-details.html">Team Details</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">
                                Pricing{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="pricing.html">Pricing 1</a>
                                </li>
                                <li>
                                <a href="pricing-1.html">Pricing 2</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">
                                Faq{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="faqs-1.html">Faq 1</a>
                                </li>
                                <li>
                                <a href="faqs-2.html">Faq 2</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">
                                Coming Soon{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="coming-soon-1.html">Coming Soon 1</a>
                                </li>
                                <li>
                                <a href="coming-soon-2.html">Coming Soon 2</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">
                                Error{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="error-404-1.html">Error 404 1</a>
                                </li>
                                <li>
                                <a href="error-404-2.html">Error 404 2</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="#">
                                Breadcrumb{" "}
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                            <ul>
                                <li>
                                <a href="breadcrumb-left.html">Breadcrumb left</a>
                                </li>
                                <li>
                                <a href="breadcrumb-right.html">Breadcrumb Right</a>
                                </li>
                                <li>
                                <a href="breadcrumb-center.html">Breadcrumb Center</a>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <a href="video.html">Video</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#">Coin</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="market-data.html">Market Data</a>
                            </li>
                            <li>
                            <a href="wallet.html">WallEt</a>
                            </li>
                            <li>
                            <a href="buy-sell.html">buy &amp; sell</a>
                            </li>
                            <li>
                            <a href="exchange.html">Exchange</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="blog-2-columns.html">2 Columns</a>
                            </li>
                            <li>
                            <a href="blog-3-columns.html">3 Columns</a>
                            </li>
                            <li>
                            <a href="blog-fullwidth.html">Full Width</a>
                            </li>
                            <li>
                            <a href="blog-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                            <a href="blog-right-sidebar.html">Right Sidebar</a>
                            </li>
                            <li>
                            <a href="blog-single.html">Single Page</a>
                            </li>
                            <li>
                            <a href="blog-single-left-sidebar.html">
                                Single Right Sidebar
                            </a>
                            </li>
                            <li>
                            <a href="blog-single-right-sidebar.html">
                                Single Left Sidebar
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#">Shop</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="shop.html">Shop</a>
                            </li>
                            <li>
                            <a href="shop-2-columns.html">Shop 2 columns</a>
                            </li>
                            <li>
                            <a href="shop-single.html">Shop Single</a>
                            </li>
                            <li>
                            <a href="shop-cart.html">Shop Cart</a>
                            </li>
                            <li>
                            <a href="checkout.html">checkout</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#">Contact</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="contact-1.html">Contact Us 1</a>
                            </li>
                            <li>
                            <a href="contact-2.html">Contact Us 2</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <div className="iq-search">
                            {" "}
                            <a
                            className="search-btn not_click"
                            href="#"
                            >
                            {" "}
                            <span>Search Button</span>
                            </a>
                            <div className="search-box not-click">
                            <input
                                type="email"
                                className="form-control not-click"
                                id="exampleInputEmail1"
                                placeholder="Search"
                            />
                            <i className="ti-search" />{" "}
                            </div>
                        </div>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </header>
        {/* Header End */}
        </>
    )
}