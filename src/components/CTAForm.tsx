import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTAForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-primary mb-2">Благодарим вас</p>
        <p className="text-muted-foreground">
          Ваша заявка получена. Каталог с образцами и ценами будет отправлен в течение 24 часов.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Ваш рабочий email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
      />
      <Button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase text-sm px-8 transition-all duration-300"
      >
        Получить каталог
      </Button>
    </form>
  );
}