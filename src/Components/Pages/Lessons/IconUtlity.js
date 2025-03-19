import {
    Heart,
    X,
    Cat,
    User,
    Dog,
    Bird,
    Droplet,
    Wine,
    Cookie,
    Sun,
    Calendar,
    Home,
    Gift,
    Package,
    GripHorizontal,
    HelpCircle,
    CheckCircle,
    XCircle,
    Volume2,
  } from 'lucide-react';
  
  // Map that associates string identifiers with actual Lucide icon components
  const iconMap = {
    Heart: Heart,
    X: X,
    Cat: Cat,
    User: User,
    Dog: Dog,
    Bird: Bird,
    Droplet: Droplet,
    Wine: Wine,
    Cookie: Cookie,
    Sun: Sun,
    Calendar: Calendar,
    Home: Home,
    Gift: Gift,
    Package: Package,
    GripHorizontal: GripHorizontal,
    HelpCircle: HelpCircle,
    CheckCircle: CheckCircle,
    XCircle: XCircle,
    Volume2: Volume2,
  };
  
  // Function to retrieve the corresponding icon component
  export const getIconComponent = (iconName) => {
    // Return the component corresponding to the iconName, or HelpCircle as a default fallback
    return iconMap[iconName] || HelpCircle;
  };
  