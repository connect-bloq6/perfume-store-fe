import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@essence.com',
    href: 'mailto:hello@essence.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Luxury Lane, Beverly Hills, CA 90210',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM-6PM PST',
  },
];

export function ContactInfo() {
  return (
    <div className="bg-noir-900 border border-noir-800 p-8">
      <h3 className="font-display text-2xl text-gold-500 mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-noir-800 flex items-center justify-center flex-shrink-0">
              <detail.icon className="text-gold-500" size={18} />
            </div>
            <div>
              <p className="text-noir-400 text-sm">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-white hover:text-gold-500 transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-white">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-noir-800">
        <h4 className="text-white font-medium mb-4">Follow Us</h4>
        <div className="flex gap-4">
          {['Instagram', 'Facebook', 'Twitter'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-noir-400 hover:text-gold-500 transition-colors text-sm"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

