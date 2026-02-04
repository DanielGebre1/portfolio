import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Resume", path: "/resume" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/DanielGebre1", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/daniel-gebre-831176260/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:danielgebre759@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
