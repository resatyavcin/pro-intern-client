import { onlyStudent, allUsers } from './../common/constants/role-rights/roles';
// Import Roles && Rights
import { DASHBOARD, STUDENTS, SETTINGS, INTERNS } from '../common/constants/role-rights/rights';
import { onlyAdmin } from '../common/constants/role-rights/roles';
import { IPRIVATE_CONFIG } from '../common/constants/routes-config/routesConfig';


// Only private route configs are needed.
export const PRIVATE_ROUTE_CONFIG: Record<string, IPRIVATE_CONFIG> = {
    DASHBOARD: { isPrivate: true, title: 'Dashboard', hasProfile: onlyAdmin, hasRight: DASHBOARD, redirectUrl: '/dashboard' },
    STUDENTS: { isPrivate: true, title: 'Students', hasProfile: onlyAdmin, hasRight: STUDENTS, redirectUrl: '/students' },
    INTERNS: { isPrivate: true, title: 'Interns', hasProfile: onlyStudent, hasRight: INTERNS, redirectUrl: '/interns' },
    SETTINGS: { isPrivate: true, title: 'Settings', hasProfile: allUsers, hasRight: SETTINGS, redirectUrl: '/settings' }
};


