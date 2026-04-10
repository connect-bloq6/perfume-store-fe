import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/service';
import { rowToSubmission, type ContactSubmissionRow } from '@/lib/supabase/contact-mapper';

function serviceUnavailable() {
  return NextResponse.json(
    {
      success: false,
      error:
        'Contact storage is not configured. Add SUPABASE_SERVICE_ROLE_KEY and run the SQL in supabase/migrations/001_initial.sql.',
    },
    { status: 503 }
  );
}

// GET - Fetch all contact submissions
export async function GET() {
  try {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase contact list error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch submissions' },
        { status: 500 }
      );
    }

    const rows = (data ?? []) as ContactSubmissionRow[];
    return NextResponse.json({
      success: true,
      data: rows.map(rowToSubmission),
    });
  } catch (e) {
    console.error('Contact GET:', e);
    return serviceUnavailable();
  }
}

// POST - Create new contact submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
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
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        subject,
        message,
        status: 'new',
      })
      .select('*')
      .single();

    if (error) {
      console.error('Supabase contact insert error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to create submission' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: rowToSubmission(data as ContactSubmissionRow) },
      { status: 201 }
    );
  } catch (e) {
    console.error('Contact POST:', e);
    return serviceUnavailable();
  }
}
