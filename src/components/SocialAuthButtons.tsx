import React from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, Github } from 'lucide-react';

const SocialAuthButtons: React.FC = () => {
  console.log('SocialAuthButtons loaded');

  const handleGoogleLogin = () => {
    // In a real application, this would trigger the Google OAuth flow
    console.log('Attempting to log in with Google...');
    alert("Simulating Google login. Check the console for details.");
  };

  const handleGitHubLogin = () => {
    // In a real application, this would trigger the GitHub OAuth flow
    console.log('Attempting to log in with GitHub...');
    alert("Simulating GitHub login. Check the console for details.");
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={handleGoogleLogin}>
          <Chrome className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" onClick={handleGitHubLogin}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialAuthButtons;