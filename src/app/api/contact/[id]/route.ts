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

// GET - Fetch single submission by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Supabase contact get error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch submission' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: rowToSubmission(data as ContactSubmissionRow),
    });
  } catch (e) {
    console.error('Contact [id] GET:', e);
    return serviceUnavailable();
  }
}

// PATCH - Update submission status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!status || !['new', 'read', 'replied', 'archived'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();
    const updatedAt = new Date().toISOString();
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status, updated_at: updatedAt })
      .eq('id', id)
      .select('*')
      .maybeSingle();

    if (error) {
      console.error('Supabase contact patch error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to update submission' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: rowToSubmission(data as ContactSubmissionRow),
    });
  } catch (e) {
    console.error('Contact [id] PATCH:', e);
    return serviceUnavailable();
  }
}

// DELETE - Delete submission
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id)
      .select('id')
      .maybeSingle();

    if (error) {
      console.error('Supabase contact delete error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to delete submission' },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Submission deleted' });
  } catch (e) {
    console.error('Contact [id] DELETE:', e);
    return serviceUnavailable();
  }
}
