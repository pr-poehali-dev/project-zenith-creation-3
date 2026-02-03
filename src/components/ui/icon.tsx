import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

export default function Icon({ name, size = 24, className = "", fallback = "Circle" }: IconProps) {
  const IconComponent = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];
  
  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
