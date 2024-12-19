import { icons } from 'lucide-react';

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: string | number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size, className }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null; // ou você pode lançar um erro, ou retornar um ícone padrão
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;