import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import appVideo from "@/assets/iphone-ball-turn.mp4";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Meera is
              <span className="block text-white/90">Almost Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
            We are going digital. Our app is currently under review and launching soon—bringing you fresh deals, doorstep delivery, and a smarter way to shop.
Be the first to try it. Get early access today

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-glow"
              >
                <a 
                  href="https://expo.dev/artifacts/eas/rsaiUP6syC8hWAmx1M3Nnq.apk"
                  download="Meera_App.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white/30 text-blue hover:bg-white/10"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
            <div className="text-white/60 text-sm">
              🔄 Currently under Google Play Store review
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl rounded-2xl"
              >
                <source src={appVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-primary opacity-20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
