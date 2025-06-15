import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12 border-t ">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-primary-bangladesh"></div>
              <div className="ml-1 h-6 w-6 rounded-full bg-secondary-bangladesh"></div>
            </div>
            <h3 className="font-bold">CSE Question Bank</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            A comprehensive collection of CSE questions and answers, designed to
            help students excel in their studies and prepare for exams.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube size={18} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Research Papers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                AI Tools
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-primary-bangladesh" />
              <span className="text-muted-foreground">Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-primary-bangladesh" />
              <span className="text-muted-foreground">+880 123 456 7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-primary-bangladesh" />
              <span className="text-muted-foreground">
                contact.ahsanul@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ahsanul Hoque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
