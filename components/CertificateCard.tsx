import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  organization: string;
  description: string;
  date: string;
  certificateLink: string;
  iconBgColor?: string;
}

export function CertificateCard({
  icon,
  category,
  title,
  organization,
  description,
  date,
  certificateLink,
  iconBgColor = 'bg-blue-600',
}: CertificateCardProps) {
  return (
    <div className=" bg-[#d4d4d434] dark:bg-[#27272B66] rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        <div className={`${iconBgColor} text-white p-2 rounded`}>
          {icon}
        </div>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {organization}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {date}
        </span>
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
        >
          View Certificate
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
