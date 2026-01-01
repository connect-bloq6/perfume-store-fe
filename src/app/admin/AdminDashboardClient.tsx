'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Inbox, 
  Mail, 
  MailOpen, 
  Reply, 
  Archive, 
  Trash2, 
  RefreshCw, 
  Search,
  ChevronDown,
  Clock,
  User,
  Phone,
  Building,
  X,
  CheckCircle,
  AlertCircle,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { ContactSubmission } from '@/types';

const statusConfig = {
  new: { 
    label: 'New', 
    color: '#10B981', 
    bgColor: '#ECFDF5',
    icon: Mail 
  },
  read: { 
    label: 'Read', 
    color: '#3B82F6', 
    bgColor: '#EFF6FF',
    icon: MailOpen 
  },
  replied: { 
    label: 'Replied', 
    color: '#8B5CF6', 
    bgColor: '#F5F3FF',
    icon: Reply 
  },
  archived: { 
    label: 'Archived', 
    color: '#6B7280', 
    bgColor: '#F3F4F6',
    icon: Archive 
  },
};

const subjectLabels: Record<string, string> = {
  general: 'General Inquiry',
  wholesale: 'Wholesale Partnership',
  order: 'Order Support',
  returns: 'Returns & Exchanges',
  consultation: 'Fragrance Consultation',
  other: 'Other',
};

export default function AdminDashboardClient() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchSubmissions = useCallback(async () => {
    try {
      const response = await fetch('/api/contact');
      const data = await response.json();
      if (data.success) {
        setSubmissions(data.data);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  useEffect(() => {
    let result = submissions;

    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(s => s.status === statusFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.firstName.toLowerCase().includes(query) ||
        s.lastName.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query) ||
        s.message.toLowerCase().includes(query) ||
        s.subject.toLowerCase().includes(query)
      );
    }

    setFilteredSubmissions(result);
  }, [submissions, statusFilter, searchQuery]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchSubmissions();
  };

  const handleStatusChange = async (id: string, newStatus: ContactSubmission['status']) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmissions(prev => prev.map(s => s.id === id ? data.data : s));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(data.data);
        }
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setSubmissions(prev => prev.filter(s => s.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return `${days} days ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const formatFullDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  // Stats
  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    read: submissions.filter(s => s.status === 'read').length,
    replied: submissions.filter(s => s.status === 'replied').length,
    archived: submissions.filter(s => s.status === 'archived').length,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Header */}
      <header 
        className="sticky top-0 z-50"
        style={{ 
          backgroundColor: '#FFFFFF', 
          borderBottom: '1px solid #E5E5E5',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="font-playfair text-xl font-semibold"
                style={{ color: '#917B5F' }}
              >
                CALRA
              </Link>
              <span 
                className="text-sm px-3 py-1 rounded-full"
                style={{ backgroundColor: '#F5EBD9', color: '#917B5F' }}
              >
                Admin Dashboard
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <motion.button
                onClick={handleRefresh}
                disabled={refreshing}
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: '#F9F9F9' }}
                whileHover={{ backgroundColor: '#F0F0F0' }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw 
                  size={18} 
                  className={refreshing ? 'animate-spin' : ''}
                  style={{ color: '#6B6B6B' }}
                />
              </motion.button>
              <Link
                href="/"
                className="text-sm px-4 py-2 rounded-lg transition-colors"
                style={{ backgroundColor: '#917B5F', color: '#FFFFFF' }}
              >
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title & Stats */}
        <div className="mb-8">
          <h1 
            className="font-playfair text-3xl mb-2"
            style={{ color: '#171717' }}
          >
            Contact Submissions
          </h1>
          <p style={{ color: '#6B6B6B' }}>
            Manage and respond to customer inquiries
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total', value: stats.total, color: '#917B5F', bg: '#F5EBD9' },
            { label: 'New', value: stats.new, color: '#10B981', bg: '#ECFDF5' },
            { label: 'Read', value: stats.read, color: '#3B82F6', bg: '#EFF6FF' },
            { label: 'Replied', value: stats.replied, color: '#8B5CF6', bg: '#F5F3FF' },
            { label: 'Archived', value: stats.archived, color: '#6B7280', bg: '#F3F4F6' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-xl p-4"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            >
              <p className="text-sm mb-1" style={{ color: '#6B6B6B' }}>
                {stat.label}
              </p>
              <p 
                className="text-2xl font-semibold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Search & Filters */}
        <div 
          className="rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4"
          style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
        >
          <div className="flex-1 relative">
            <Search 
              size={18} 
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: '#A8A8A8' }}
            />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm"
              style={{ 
                backgroundColor: '#F9F9F9',
                border: '1px solid #E8E8E8',
                color: '#171717',
              }}
            />
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors"
                style={{ 
                  backgroundColor: statusFilter !== 'all' ? '#F5EBD9' : '#F9F9F9',
                  border: '1px solid #E8E8E8',
                  color: '#171717',
                }}
              >
                <Filter size={16} />
                Filter
                {statusFilter !== 'all' && (
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#917B5F' }}
                  />
                )}
              </button>
              
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 rounded-xl overflow-hidden z-10"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                    }}
                  >
                    {['all', 'new', 'read', 'replied', 'archived'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setShowFilters(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors hover:bg-gray-50"
                        style={{ 
                          color: statusFilter === status ? '#917B5F' : '#171717',
                          backgroundColor: statusFilter === status ? '#F5EBD9' : 'transparent',
                        }}
                      >
                        {status === 'all' ? (
                          <Inbox size={16} />
                        ) : (
                          React.createElement(statusConfig[status as keyof typeof statusConfig].icon, { size: 16 })
                        )}
                        {status === 'all' ? 'All Messages' : statusConfig[status as keyof typeof statusConfig].label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Submissions List */}
          <div 
            className="lg:col-span-2 rounded-xl overflow-hidden"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
          >
            <div 
              className="px-4 py-3 border-b flex items-center justify-between"
              style={{ borderColor: '#E5E5E5' }}
            >
              <span className="text-sm font-medium" style={{ color: '#171717' }}>
                Messages ({filteredSubmissions.length})
              </span>
            </div>
            
            {loading ? (
              <div className="p-8 text-center">
                <RefreshCw 
                  size={24} 
                  className="animate-spin mx-auto mb-3"
                  style={{ color: '#917B5F' }}
                />
                <p className="text-sm" style={{ color: '#6B6B6B' }}>
                  Loading submissions...
                </p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="p-8 text-center">
                <Inbox 
                  size={32} 
                  className="mx-auto mb-3"
                  style={{ color: '#D5D5D5' }}
                />
                <p className="text-sm" style={{ color: '#6B6B6B' }}>
                  {searchQuery || statusFilter !== 'all' 
                    ? 'No messages match your filters' 
                    : 'No contact submissions yet'}
                </p>
              </div>
            ) : (
              <div className="max-h-[600px] overflow-y-auto">
                {filteredSubmissions.map((submission) => {
                  const config = statusConfig[submission.status];
                  const isSelected = selectedSubmission?.id === submission.id;
                  
                  return (
                    <motion.button
                      key={submission.id}
                      onClick={() => {
                        setSelectedSubmission(submission);
                        if (submission.status === 'new') {
                          handleStatusChange(submission.id, 'read');
                        }
                      }}
                      className="w-full px-4 py-4 text-left border-b transition-colors"
                      style={{ 
                        borderColor: '#F0F0F0',
                        backgroundColor: isSelected ? '#F5EBD9' : 'transparent',
                      }}
                      whileHover={{ backgroundColor: isSelected ? '#F5EBD9' : '#FAFAFA' }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          {submission.status === 'new' && (
                            <span 
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: '#10B981' }}
                            />
                          )}
                          <p 
                            className="font-medium truncate text-sm"
                            style={{ color: '#171717' }}
                          >
                            {submission.firstName} {submission.lastName}
                          </p>
                        </div>
                        <span 
                          className="text-xs flex-shrink-0"
                          style={{ color: '#A8A8A8' }}
                        >
                          {formatDate(submission.createdAt)}
                        </span>
                      </div>
                      
                      <p 
                        className="text-xs mb-2 truncate"
                        style={{ color: '#6B6B6B' }}
                      >
                        {submission.email}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: config.bgColor, color: config.color }}
                        >
                          {config.label}
                        </span>
                        <span 
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#F3F4F6', color: '#6B7280' }}
                        >
                          {subjectLabels[submission.subject] || submission.subject}
                        </span>
                      </div>
                      
                      <p 
                        className="text-sm line-clamp-2"
                        style={{ color: '#4B4B4B' }}
                      >
                        {submission.message}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Submission Detail */}
          <div 
            className="lg:col-span-3 rounded-xl overflow-hidden"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
          >
            {selectedSubmission ? (
              <>
                <div 
                  className="px-6 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: '#E5E5E5' }}
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: statusConfig[selectedSubmission.status].bgColor, 
                        color: statusConfig[selectedSubmission.status].color 
                      }}
                    >
                      {statusConfig[selectedSubmission.status].label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Status Change Dropdown */}
                    <div className="relative group">
                      <button
                        className="p-2 rounded-lg transition-colors hover:bg-gray-100"
                        title="Change Status"
                      >
                        <ChevronDown size={18} style={{ color: '#6B6B6B' }} />
                      </button>
                      <div 
                        className="absolute right-0 top-full mt-1 w-40 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10"
                        style={{ 
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E5E5',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                        }}
                      >
                        {Object.entries(statusConfig).map(([status, config]) => (
                          <button
                            key={status}
                            onClick={() => handleStatusChange(selectedSubmission.id, status as ContactSubmission['status'])}
                            className="w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors hover:bg-gray-50"
                            style={{ color: '#171717' }}
                          >
                            <config.icon size={14} style={{ color: config.color }} />
                            {config.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleDelete(selectedSubmission.id)}
                      className="p-2 rounded-lg transition-colors hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 size={18} style={{ color: '#EF4444' }} />
                    </button>
                    
                    <button
                      onClick={() => setSelectedSubmission(null)}
                      className="p-2 rounded-lg transition-colors hover:bg-gray-100 lg:hidden"
                    >
                      <X size={18} style={{ color: '#6B6B6B' }} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Sender Info */}
                  <div className="mb-6">
                    <h2 
                      className="font-playfair text-2xl mb-1"
                      style={{ color: '#171717' }}
                    >
                      {selectedSubmission.firstName} {selectedSubmission.lastName}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 mt-3">
                      <a 
                        href={`mailto:${selectedSubmission.email}`}
                        className="flex items-center gap-2 text-sm hover:underline"
                        style={{ color: '#6B6B6B' }}
                      >
                        <Mail size={16} style={{ color: '#917B5F' }} />
                        {selectedSubmission.email}
                      </a>
                      
                      {selectedSubmission.phone && (
                        <a 
                          href={`tel:${selectedSubmission.phone}`}
                          className="flex items-center gap-2 text-sm hover:underline"
                          style={{ color: '#6B6B6B' }}
                        >
                          <Phone size={16} style={{ color: '#917B5F' }} />
                          {selectedSubmission.phone}
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Subject & Time */}
                  <div 
                    className="rounded-xl p-4 mb-6"
                    style={{ backgroundColor: '#F9F9F9' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={16} style={{ color: '#917B5F' }} />
                      <span className="text-sm font-medium" style={{ color: '#171717' }}>
                        {subjectLabels[selectedSubmission.subject] || selectedSubmission.subject}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} style={{ color: '#A8A8A8' }} />
                      <span className="text-sm" style={{ color: '#6B6B6B' }}>
                        {formatFullDate(selectedSubmission.createdAt)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <h3 
                      className="text-sm font-medium mb-3"
                      style={{ color: '#171717' }}
                    >
                      Message
                    </h3>
                    <div 
                      className="rounded-xl p-5"
                      style={{ backgroundColor: '#FAFAFA', border: '1px solid #F0F0F0' }}
                    >
                      <p 
                        className="text-sm leading-relaxed whitespace-pre-wrap"
                        style={{ color: '#4B4B4B' }}
                      >
                        {selectedSubmission.message}
                      </p>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${selectedSubmission.email}?subject=Re: ${subjectLabels[selectedSubmission.subject] || selectedSubmission.subject}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                      style={{ backgroundColor: '#917B5F', color: '#FFFFFF' }}
                      onClick={() => handleStatusChange(selectedSubmission.id, 'replied')}
                    >
                      <Reply size={16} />
                      Reply via Email
                    </a>
                    
                    <button
                      onClick={() => handleStatusChange(selectedSubmission.id, 'archived')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                      style={{ 
                        backgroundColor: '#F3F4F6', 
                        color: '#6B7280',
                      }}
                    >
                      <Archive size={16} />
                      Archive
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#F5EBD9' }}
                >
                  <Mail size={28} style={{ color: '#917B5F' }} />
                </div>
                <h3 
                  className="font-playfair text-xl mb-2"
                  style={{ color: '#171717' }}
                >
                  Select a message
                </h3>
                <p 
                  className="text-sm max-w-xs"
                  style={{ color: '#6B6B6B' }}
                >
                  Choose a message from the list to view its details and respond
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

