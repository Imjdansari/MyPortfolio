const Footer = () => {
  return (
    <footer className="font-jaldi p-10 text-center text-xl">
      <hr className="mx-auto bg-white mb-10" />
      <p> &copy; Javed {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
