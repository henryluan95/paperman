import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">
        copyright &copy; Henry Luan
        <span className="footer__date" id="date"></span>. all rights reserved
      </p>
    </div>
  );
};

export default Footer;
