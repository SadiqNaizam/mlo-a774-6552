import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
        <p className="text-sm leading-loose text-center sm:text-left">
          &copy; {currentYear} QuickAccess Login. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/terms" className="text-sm hover:text-primary underline-offset-4 hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-sm hover:text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;