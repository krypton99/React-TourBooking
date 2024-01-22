import Home from '~/pages/Home';
import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';
import Tour from '~/pages/Tour';
import TourManagement from '~/pages/Admin/TourManagement/Tour';
import About from '~/pages/About';
import Services from '~/pages/Services';
import Admin from '~/pages/Admin';
import ManagementLayout from '~/layouts/ManagementLayout';

// Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: HeaderOnly,
        banner: true,
    },
    {
        path: config.routes.tour,
        component: Tour,
        layout: HeaderOnly,
        banner: true,
    },
    { path: config.routes.about, component: About, layout: HeaderOnly },
    { path: config.routes.services, component: Services, layout: HeaderOnly },
    { path: config.routes.admin, component: Admin, layout: ManagementLayout },
    {
        path: config.routes.tourManagement,
        component: TourManagement,
        layout: ManagementLayout,
    },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
