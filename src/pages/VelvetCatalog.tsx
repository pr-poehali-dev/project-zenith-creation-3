import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FabricItem {
  id: string;
  name: string;
  origin: string;
  composition: string;
  width: string;
  weight: string;
  color: string;
  price: string;
  image: string;
}

const velvetFabrics: FabricItem[] = [
  {
    id: "v1",
    name: "Nobility Velvet",
    origin: "Италия, Como",
    composition: "100% хлопок",
    width: "140 см",
    weight: "450 г/м²",
    color: "Изумрудный",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/282688e7-b666-4155-800c-b58068649780.jpg"
  },
  {
    id: "v2",
    name: "Royal Velours",
    origin: "Франция, Lyon",
    composition: "70% вискоза, 30% шелк",
    width: "150 см",
    weight: "520 г/м²",
    color: "Сапфировый",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/8239e753-d9bf-48ea-ad23-4a6fcf1e3785.jpg"
  },
  {
    id: "v3",
    name: "Luxe Mohair",
    origin: "Италия, Milano",
    composition: "60% мохер, 40% хлопок",
    width: "140 см",
    weight: "480 г/м²",
    color: "Бордовый",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/5c671cb0-251c-4515-ac89-692337c55eec.jpg"
  },
  {
    id: "v4",
    name: "Imperial Silk Velvet",
    origin: "Италия, Como",
    composition: "80% шелк, 20% вискоза",
    width: "135 см",
    weight: "400 г/м²",
    color: "Золотисто-коричневый",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/c3eaffa6-e9ff-4e4a-acb5-14d46b69ed6d.jpg"
  },
  {
    id: "v5",
    name: "Heritage Cotton",
    origin: "Франция, Paris",
    composition: "100% хлопок премиум",
    width: "145 см",
    weight: "470 г/м²",
    color: "Темно-серый",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/b161c59f-2e7f-4df4-8849-76ead0d4b2c2.jpg"
  },
  {
    id: "v6",
    name: "Prestige Blend",
    origin: "Италия, Bergamo",
    composition: "50% лен, 50% хлопок",
    width: "140 см",
    weight: "440 г/м²",
    color: "Морская волна",
    price: "По запросу",
    image: "https://cdn.poehali.dev/projects/02bd4f74-6ad3-48cc-9caa-de7007d68fed/files/c33f0c8e-eb33-4696-a703-729abb47ff56.jpg"
  }
];

interface VelvetCatalogProps {
  onBack: () => void;
}

export function VelvetCatalog({ onBack }: VelvetCatalogProps) {
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
            Премиальный бархат
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Эксклюзивные бархатные ткани из лучших мануфактур Европы. 
            Каждый метр — воплощение текстильного мастерства и вековых традиций.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {velvetFabrics.map((fabric) => (
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
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Состав</p>
                      <p className="text-foreground">{fabric.composition}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Цвет</p>
                      <p className="text-foreground">{fabric.color}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Ширина</p>
                      <p className="text-foreground">{fabric.width}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Плотность</p>
                      <p className="text-foreground">{fabric.weight}</p>
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
            Не нашли нужный оттенок?
          </h2>
          <p className="text-muted-foreground mb-8">
            Мы работаем напрямую с мануфактурами и можем заказать индивидуальные цвета под ваш проект
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="MessageCircle" size={18} />
            <span className="ml-2">Связаться с менеджером</span>
          </Button>
        </div>
      </section>
    </div>
  );
}