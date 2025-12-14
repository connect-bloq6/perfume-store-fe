import { RegisterForm } from '@/components/auth/RegisterForm';

export const metadata = {
  title: 'Create Account | Essence',
  description: 'Create your Essence account.',
};

export default function RegisterPage() {
  return (
    <div className="container-luxury py-24">
      <div className="max-w-md mx-auto">
        <h1 className="font-display text-4xl text-gold-500 mb-8 text-center">
          Create Account
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
}

