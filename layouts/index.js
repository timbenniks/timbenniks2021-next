import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <div className="wrapper">
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
