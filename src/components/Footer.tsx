import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

interface FooterProps {
  id?: string;
}

const Footer = ({ id }: FooterProps) => {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold">
            Stay Updated
          </h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Be the first to know when our app launches on Google Play Store. 
            Get notified about updates, new features, and special offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Notified
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-primary hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Support
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60">
                © 2025 Meera Shop and Delivery. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;