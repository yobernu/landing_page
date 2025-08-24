import { Card, CardContent } from "@/components/ui/card";
import photo1 from "@/assets/screenshots/photo_1.jpg";
import photo2 from "@/assets/screenshots/photo_2.jpg";
import photo3 from "@/assets/screenshots/photo_3.jpg";

interface FeaturesProps {
  id?: string;
}

const Features = ({ id }: FeaturesProps) => {
  const appScreens = [
    {
      title: "Homescreen",
      description: "Discover trending products and categories",
      image: photo1
    },
    {
      title: "Cart Page",
      description: "Review and manage your selected items",
      image: photo2
    },
    {
      title: "Product Details",
      description: "View product information and make purchases",
      image: photo3
    }
  ];

  return (
    <section id={id} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our intuitive interface designed for effortless shopping
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {appScreens.map((screen, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[9/16] bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-center p-2">
                <img 
                  src={screen.image} 
                  alt={screen.title}
                  className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">{screen.title}</h3>
                <p className="text-white/80 text-sm mt-1">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;