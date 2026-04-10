import { LoginForm } from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Sign In | Essence',
  description: 'Sign in to your Essence account.',
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const authError = searchParams.error;

  return (
    <div className="container-luxury py-24">
      <div className="max-w-md mx-auto">
        <h1 className="font-display text-4xl text-gold-500 mb-8 text-center">
          Welcome Back
        </h1>
        {authError === 'oauth' && (
          <p className="text-sm text-center text-red-600 mb-6" role="alert">
            Sign-in did not complete. Please try again from the site menu.
          </p>
        )}
        {authError === 'config' && (
          <p className="text-sm text-center text-red-600 mb-6" role="alert">
            Authentication is not configured. Check Supabase environment variables.
          </p>
        )}
        <LoginForm />
      </div>
    </div>
  );
}

