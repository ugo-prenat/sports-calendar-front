import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import CompactThemeToggle from './CompactThemeToggle';
import CompactLangToggle from './CompactLangToggle';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex justify-between py-2 items-center px-4 border-input border h-14">
      <div className="flex">
        <Button variant="link">
          <Link to="/">Home</Link>
        </Button>

        <Button variant="link">
          <Link to="/manage">Manage</Link>
        </Button>

        <Button variant="link">
          <Link to="/settings">Settings</Link>
        </Button>
      </div>
      <div className="flex gap-x-2">
        <CompactLangToggle />
        <CompactThemeToggle />
      </div>
    </div>
  );
};

export default Header;
