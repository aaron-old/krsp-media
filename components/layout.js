import Header from "../components/header";
import Footer from "../components/footer";
import PageSection from "./styles/pageSection";

export default ({ children }) => (
  <main>
    <PageSection>
      <Header />
      <section className="content">{children}</section>
      <Footer />
    </PageSection>
  </main>
);
