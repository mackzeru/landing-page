import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const links = ["Product", "Pricing", "Security", "Docs", "Privacy", "Terms"];
  return (
    <footer className="relative mt-12 text-foreground">
      <div className="angled-top bg-footer rounded-t-full transform translate-y-10">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold">Leelu.ai</p>
              <p className="text-sm text-foreground/70">
                Multi-Source Search for AI recruiting
              </p>
            </div>
            <nav className="flex flex-wrap gap-6">
              {links.map((l) => (
                <a key={l} href="#" className="story-link text-sm">
                  {l}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="icon-bounce rounded-md p-2 bg-foreground/5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <p className="mt-8 text-xs text-foreground/60">
            © {new Date().getFullYear()} Leelu.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
