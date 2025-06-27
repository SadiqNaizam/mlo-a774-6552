import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Props for the AuthFormWrapper component.
 */
interface AuthFormWrapperProps {
  /**
   * The main title of the authentication form (e.g., "Login", "Create an account").
   */
  title: string;
  /**
   * A short description or subtitle displayed below the title.
   */
  description: string;
  /**
   * The main content of the form, typically input fields and a submit button.
   */
  children: React.ReactNode;
  /**
   * The content for the footer, usually containing links to other auth pages
   * (e.g., a Link to the sign-up page).
   */
  footerContent: React.ReactNode;
}

/**
 * A reusable wrapper component that provides a consistent layout for
 * authentication forms like Login, Sign Up, and Forgot Password.
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  footerContent,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-sm text-muted-foreground">
          {footerContent}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;