import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FabricItem {
  id: string;
  name: string;
  origin: string;
  type: string;
  thickness: string;
  finish: string;
  color: string;
  price: string;
  image: string;
}

const leatherFabrics: FabricItem[] = [
  {
    id: "l1",
    name: "Toscana Premium",
    origin: "Италия, Toscana",
    type: "Full-grain Aniline",
    thickness: "1.2-1.4 мм",
    finish: "Натуральная",
    color: "Коньячный",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/0ca12967-4d36-499b-843b-1c404ba7c74a.jpg"
  },
  {
    id: "l2",
    name: "Nappa Classic",
    origin: "Италия, Milano",
    type: "Full-grain Nappa",
    thickness: "1.0-1.2 мм",
    finish: "Полуанилиновая",
    color: "Чёрный",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/f7626bfa-a9e9-449b-b9c6-cc94be423166.jpg"
  },
  {
    id: "l3",
    name: "Dakota Soft",
    origin: "Испания, Valencia",
    type: "Full-grain Pull-up",
    thickness: "1.3-1.5 мм",
    finish: "Вощёная",
    color: "Карамельный",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/159afbb2-66e2-4bd8-b81f-8dcae56778b5.jpg"
  },
  {
    id: "l4",
    name: "Royal Navy",
    origin: "Италия, Bologna",
    type: "Full-grain Aniline",
    thickness: "1.2-1.4 мм",
    finish: "Натуральная",
    color: "Тёмно-синий",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/f85070f7-eac0-46b1-9be2-d19f21b10b02.jpg"
  },
  {
    id: "l5",
    name: "Bordeaux Lux",
    origin: "Италия, Toscana",
    type: "Full-grain Semi-Aniline",
    thickness: "1.1-1.3 мм",
    finish: "Полуанилиновая",
    color: "Бордовый",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/e121f193-fffd-4ed6-89bb-c3d0c978fcea.jpg"
  },
  {
    id: "l6",
    name: "Elegance Grey",
    origin: "Испания, Alicante",
    type: "Full-grain Nappa",
    thickness: "1.0-1.2 мм",
    finish: "Натуральная",
    color: "Серо-бежевый",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/ee254f11-ca22-4780-a478-fa6911d87732.jpg"
  }
];

interface LeatherCatalogProps {
  onBack: () => void;
}

export function LeatherCatalog({ onBack }: LeatherCatalogProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="ChevronLeft" size={20} />
            <span className="text-sm uppercase tracking-wider">Назад к разделам</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-primary rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rotate-45" />
            </div>
            <span className="font-serif text-xl">
              <span className="text-primary">Золотая</span>Нить
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ArtDecoDivider variant="stepped" />
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Каталог</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            Натуральная кожа
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Премиальная full-grain кожа из лучших дубилен Италии и Испании. 
            Только натуральная обработка, сохраняющая естественную текстуру и благородное старение материала.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leatherFabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="group relative bg-card border border-border hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />

                {/* Image */}
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={fabric.image} 
                    alt={fabric.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent group-hover:from-background/80 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="font-serif text-2xl text-foreground mb-1">{fabric.name}</h3>
                    <p className="text-primary text-sm">{fabric.origin}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Тип</p>
                      <p className="text-foreground">{fabric.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Цвет</p>
                      <p className="text-foreground">{fabric.color}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Толщина</p>
                      <p className="text-foreground">{fabric.thickness}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Отделка</p>
                      <p className="text-foreground">{fabric.finish}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-primary font-medium">{fabric.price}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon name="Plus" size={16} />
                      <span className="ml-2">В корзину</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Нужны образцы кожи?
          </h2>
          <p className="text-muted-foreground mb-8">
            Отправляем бесплатные образцы размером 10×10 см для профессиональных дизайнеров и производителей
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="MessageCircle" size={18} />
            <span className="ml-2">Заказать образцы</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
