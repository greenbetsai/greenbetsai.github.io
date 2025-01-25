import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Greenbets AI</h3>
            <p className="text-sm text-muted-foreground">
              Making sustainable investing accessible through AI-powered analytics
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">About</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Features</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Greenbets AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};