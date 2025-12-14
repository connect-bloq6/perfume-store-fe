import { LoginForm } from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Sign In | Essence',
  description: 'Sign in to your Essence account.',
};

export default function LoginPage() {
  return (
    <div className="container-luxury py-24">
      <div className="max-w-md mx-auto">
        <h1 className="font-display text-4xl text-gold-500 mb-8 text-center">
          Welcome Back
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

