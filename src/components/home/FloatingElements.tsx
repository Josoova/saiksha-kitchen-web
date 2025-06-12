
import { Sparkles, Zap, Star } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating icons with different animations */}
      <div className="absolute top-20 left-10 animate-bounce-subtle">
        <Sparkles className="h-6 w-6 text-brand-gold/20" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce-subtle" style={{animationDelay: '1s'}}>
        <Star className="h-4 w-4 text-brand-green/20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce-subtle" style={{animationDelay: '2s'}}>
        <Zap className="h-5 w-5 text-brand-gold/20" />
      </div>
      <div className="absolute top-60 left-1/3 animate-bounce-subtle" style={{animationDelay: '3s'}}>
        <Sparkles className="h-3 w-3 text-brand-green/20" />
      </div>
      <div className="absolute bottom-60 right-1/3 animate-bounce-subtle" style={{animationDelay: '4s'}}>
        <Star className="h-5 w-5 text-brand-gold/20" />
      </div>
    </div>
  );
};

export default FloatingElements;
