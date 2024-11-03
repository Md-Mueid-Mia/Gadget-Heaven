const Footer = () => {
  return (
    <div className="container mx-auto pt-12 md:pt-24">
      <div className="text-center">
        <h2 className="text-lg md:text-2xl font-bold">Gadget Heaven</h2>
        <p className="text-[14px] font-thin md:font-medium">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <footer className="footer justify-around  p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
