import Experience from "@/components/experience";
import Header from "@/components/header";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const siteConfig: { [key: string]: string } = {
  name: "Haroldo Gondim",
  description:
    "Software Developer experienced with PHP, Drupal, Laravel, JavaScript, jQuery, Node.js, TypeScript, React.js, Next.js, MySQL, Tailwind, and many others.",
  ogImage: "https://haroldo.dev/og-image.png",
  url: "https://haroldo.dev",
};

export { siteConfig };

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
