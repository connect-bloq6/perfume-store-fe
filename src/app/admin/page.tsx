import { Metadata } from 'next';
import AdminDashboardClient from './AdminDashboardClient';

export const metadata: Metadata = {
  title: 'Admin Dashboard | CALRA Perfumes',
  description: 'Admin dashboard for managing contact submissions and inquiries.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboardClient />;
}

