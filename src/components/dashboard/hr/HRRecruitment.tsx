
import React from 'react';
import HRRecruitmentMetrics from './recruitment/HRRecruitmentMetrics';
import HRJobPostings from './recruitment/HRJobPostings';
import HRRecentCandidates from './recruitment/HRRecentCandidates';
import HRUpcomingInterviews from './recruitment/HRUpcomingInterviews';

const HRRecruitment = () => {
  return (
    <div className="space-y-6">
      {/* Recruitment Metrics */}
      <HRRecruitmentMetrics />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Job Postings */}
        <HRJobPostings />

        {/* Recent Candidates */}
        <HRRecentCandidates />
      </div>

      {/* Upcoming Interviews */}
      <HRUpcomingInterviews />
    </div>
  );
};

export default HRRecruitment;
