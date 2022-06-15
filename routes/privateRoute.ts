// Import Roles
import { onlyAdmin, onlyStudent, allUsers } from '../common/constants/role-rights/roles';
import { IPRIVATE_CONFIG } from '../common/constants/routes-config/routesConfig';

// Only private route configs are needed.
export const PRIVATE_ROUTE_CONFIG: Record<string, IPRIVATE_CONFIG> = {
  HOME: { isPrivate: true, title: 'Home', hasProfile: onlyStudent, redirectUrl: '/' },
  DASHBOARD: { isPrivate: true, title: 'Dashboard', hasProfile: onlyAdmin, redirectUrl: '/dashboard' },
  STUDENTS: { isPrivate: true, title: 'Students', hasProfile: onlyAdmin, redirectUrl: '/students' },
  INTERNS: { isPrivate: true, title: 'Interns', hasProfile: onlyStudent, redirectUrl: '/interns' },
  TRASH: { isPrivate: true, title: 'Trash', hasProfile: onlyAdmin, redirectUrl: '/trash' },
  INTERN_DETAILS: { isPrivate: true, title: 'InternDetails', hasProfile: onlyStudent, redirectUrl: '/intern-detail' },
  SETTINGS: { isPrivate: true, title: 'Settings', hasProfile: allUsers, redirectUrl: '/settings' },
  FILES: { isPrivate: true, title: 'Files', hasProfile: allUsers, redirectUrl: '/files' }
};
