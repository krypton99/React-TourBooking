import Home from '~/pages/Home';
import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';
import Tour from '~/pages/Tour';
import About from '~/pages/About';
import Services from '~/pages/Services';

// Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: HeaderOnly,
        banner: true,
    },
    { path: config.routes.tour, component: Tour, layout: HeaderOnly },
    { path: config.routes.about, component: About, layout: HeaderOnly },
    { path: config.routes.services, component: Services, layout: HeaderOnly },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
