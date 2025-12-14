import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-luxury py-24 text-center">
      <h1 className="font-display text-6xl text-gold-500 mb-4">404</h1>
      <h2 className="text-2xl text-noir-300 mb-8">Page Not Found</h2>
      <p className="text-noir-400 mb-8 max-w-md mx-auto">
        The page you&apos;re looking for seems to have evaporated like morning dew.
      </p>
      <Link href="/" className="btn-primary inline-block">
        Return Home
      </Link>
    </div>
  );
}

