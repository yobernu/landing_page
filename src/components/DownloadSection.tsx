import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Shield, AlertTriangle, CheckCircle } from "lucide-react";

interface DownloadSectionProps {
  id?: string;
}

const DownloadSection = ({ id }: DownloadSectionProps) => {
  const steps = [
    {
      number: 1,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Enable 'Unknown Sources'",
      icon: Shield
    },
    {
      number: 2,
      title: "Download APK",
      description: "Click the download button and save the APK file",
      icon: Download
    },
    {
      number: 3,
      title: "Install & Enjoy",
      description: "Open the downloaded file and follow installation prompts",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get Early Access Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            While we wait for Google Play Store approval, you can download and install 
            our app directly. Follow these simple steps:
          </p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-primary">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-medium">
                Only download from this official source for your security
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.number} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="gap-2 px-8 py-6 text-lg font-semibold"
          >
            <a 
              href="https://expo.dev/artifacts/eas/rsaiUP6syC8hWAmx1M3Nnq.apk"
              download="Meera_App.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-6 w-6" />
              Download APK (v1.0.0)
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Compatible with Android 6.0+
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
