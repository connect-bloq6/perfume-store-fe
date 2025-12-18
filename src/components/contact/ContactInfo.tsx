import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@calra.com',
    href: 'mailto:support@calra.com',
  },
  {
    icon: Phone,
    label: 'Support Helpline',
    value: '+1 (404) 555-CALRA',
    href: 'tel:+14045552257',
  },
  {
    icon: MapPin,
    label: 'Store Address',
    value: '3500 Peachtree Road NE, Atlanta, GA 30326',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Sat: 10AM-8PM | Sun: 12PM-6PM EST',
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

