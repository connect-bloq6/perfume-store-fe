import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { ContactSubmission } from '@/types';

const DATA_FILE = path.join(process.cwd(), 'src/data/contact-submissions.json');

// Read submissions from file
async function getSubmissions(): Promise<ContactSubmission[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write submissions to file
async function saveSubmissions(submissions: ContactSubmission[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));
}

// GET - Fetch single submission by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const submissions = await getSubmissions();
    const submission = submissions.find(s => s.id === id);

    if (!submission) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Error fetching submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submission' },
      { status: 500 }
    );
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

    const submissions = await getSubmissions();
    const index = submissions.findIndex(s => s.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    submissions[index] = {
      ...submissions[index],
      status,
      updatedAt: new Date().toISOString(),
    };

    await saveSubmissions(submissions);

    return NextResponse.json({ success: true, data: submissions[index] });
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}

// DELETE - Delete submission
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const submissions = await getSubmissions();
    const index = submissions.findIndex(s => s.id === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: 'Submission not found' },
        { status: 404 }
      );
    }

    submissions.splice(index, 1);
    await saveSubmissions(submissions);

    return NextResponse.json({ success: true, message: 'Submission deleted' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete submission' },
      { status: 500 }
    );
  }
}



