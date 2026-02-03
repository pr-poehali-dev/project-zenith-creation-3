import { useState } from "react";
import Icon from "@/components/ui/icon";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("главная");

  const navItems = [
    { id: "главная", label: "Главная", icon: "Home" },
    { id: "каталог", label: "Каталог", icon: "BookOpen" },
    { id: "корзина", label: "Корзина", icon: "ShoppingCart" },
    { id: "заказать", label: "Заказать", icon: "Package" },
    { id: "о-нас", label: "О нас", icon: "Info" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rotate-45" />
            </div>
            <span className="font-serif text-2xl text-foreground">
              <span className="text-primary">Золотая</span>Нить
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
