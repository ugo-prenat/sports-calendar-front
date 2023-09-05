import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '../ui/button';
import CompactThemeToggle from './CompactThemeToggle';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex justify-between items-center p-2 border-input border">
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
      <CompactThemeToggle />
    </div>
  );
};

export default Header;
