
import React from 'react';
import { sampleUsers } from '../../data/sampleData';
import UserManagementStats from './UserManagementStats';
import RoleDistributionCard from './RoleDistributionCard';
import RecentUsersCard from './RecentUsersCard';
import UserManagementList from './UserManagementList';

const UserManagementDashboard = () => {
  const userStats = {
    totalUsers: sampleUsers.length,
    activeUsers: sampleUsers.filter(u => u.isActive).length,
    inactiveUsers: sampleUsers.filter(u => !u.isActive).length,
    newUsersThisMonth: 3,
    roleDistribution: sampleUsers.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  const recentUsers = sampleUsers
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <UserManagementStats
        totalUsers={userStats.totalUsers}
        activeUsers={userStats.activeUsers}
        inactiveUsers={userStats.inactiveUsers}
        newUsersThisMonth={userStats.newUsersThisMonth}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RoleDistributionCard
          roleDistribution={userStats.roleDistribution}
          totalUsers={userStats.totalUsers}
        />
        <RecentUsersCard recentUsers={recentUsers} />
      </div>

      <UserManagementList users={sampleUsers} />
    </div>
  );
};

export default UserManagementDashboard;
