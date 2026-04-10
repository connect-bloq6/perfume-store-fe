import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/service';

function serviceUnavailable() {
  return NextResponse.json(
    {
      success: false,
      error:
        'Newsletter is not configured. Add SUPABASE_SERVICE_ROLE_KEY and run the SQL in supabase/migrations/001_initial.sql.',
    },
    { status: 503 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ success: true, message: 'You are already subscribed.' });
      }
      console.error('Newsletter insert error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Thanks for subscribing!' });
  } catch (e) {
    console.error('Newsletter POST:', e);
    return serviceUnavailable();
  }
}
