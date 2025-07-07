import React from 'react';

// Message for normal users
export const NormalUserMessage = ({ isAdmin, isLoggedIn }) => (
  isLoggedIn && !isAdmin
    ? <div>Welcome back, user!</div>
    : <div></div>
);

// Message for admin users
export const AdminUserMessage = ({ isAdmin, isLoggedIn }) => (
  isAdmin && isLoggedIn
    ? <div>Welcome back, admin!</div>
    : <div></div>
);

// Main UserStatus component
function UserStatus({ isLoggedIn, isAdmin }) {
  return (
    <div>
      <h2>User Status</h2>
      <NormalUserMessage isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
      <AdminUserMessage isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default UserStatus;
