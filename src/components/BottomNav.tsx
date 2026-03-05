import React from 'react';
import { Home as HomeIcon, Compass, Heart, User } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const getActiveColor = (screen: Screen) => currentScreen === screen ? 'text-primary' : 'text-slate-400 dark:text-slate-500';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-slate-200 dark:border-slate-800 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 pb-6 pt-2 shadow-2xl lg:hidden">
      <button 
        onClick={() => onNavigate('HOME')}
        className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${getActiveColor('HOME')}`}
      >
        <HomeIcon className={`w-5 h-5 ${currentScreen === 'HOME' ? 'fill-current' : ''}`} />
        <p className="text-[8px] font-bold tracking-tight uppercase">Home</p>
      </button>
      <button 
        onClick={() => onNavigate('EXPLORE')}
        className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${getActiveColor('EXPLORE')}`}
      >
        <Compass className={`w-5 h-5 ${currentScreen === 'EXPLORE' ? 'fill-current' : ''}`} />
        <p className="text-[8px] font-medium tracking-tight uppercase">Explore</p>
      </button>
      <button 
        onClick={() => onNavigate('WISHLIST')}
        className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${getActiveColor('WISHLIST')}`}
      >
        <Heart className={`w-5 h-5 ${currentScreen === 'WISHLIST' ? 'fill-current' : ''}`} />
        <p className="text-[8px] font-medium tracking-tight uppercase">Wishlist</p>
      </button>
      <button 
        onClick={() => onNavigate('PROFILE')}
        className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${getActiveColor('PROFILE')}`}
      >
        <User className={`w-5 h-5 ${currentScreen === 'PROFILE' ? 'fill-current' : ''}`} />
        <p className="text-[8px] font-medium tracking-tight uppercase">Profile</p>
      </button>
    </div>
  );
};
