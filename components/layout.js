import Header from "../components/header";
import Footer from "../components/footer";

export default ({ children }) => (
  <main>
    <Header />
    <section class="content">{children}</section>
    <Footer />
  </main>
);
