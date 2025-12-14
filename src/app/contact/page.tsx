import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact Us | Essence',
  description: 'Get in touch with our fragrance experts.',
};

export default function ContactPage() {
  return (
    <div className="container-luxury py-12">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-gold-500 mb-4">
          Get in Touch
        </h1>
        <p className="text-noir-300 max-w-2xl mx-auto">
          Our fragrance consultants are here to help you find your perfect scent.
        </p>
      </header>
      <div className="grid lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

