import { Metadata } from 'next';
import AdminLoginClient from './AdminLoginClient';

export const metadata: Metadata = {
  title: 'Admin Login | CALRA Perfumes',
  description: 'Admin login for CALRA Perfumes dashboard.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}



