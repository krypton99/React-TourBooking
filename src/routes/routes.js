import Home from '~/pages/Home';
import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';
import Tour from '~/pages/Tour';
import TourManagement from '~/pages/Admin/TourManagement/Tour';
import About from '~/pages/About';
import Services from '~/pages/Services';
import Admin from '~/pages/Admin';
import ManagementLayout from '~/layouts/ManagementLayout';
import CreateTour from '~/pages/Admin/TourManagement/CreateTour';
import EditTour from '~/pages/Admin/TourManagement/EditTour/EditTour';
import Price from '~/pages/Admin/PriceManagement/Price/Price';
import CreatePrice from '~/pages/Admin/PriceManagement/CreatePrice';
import EditPrice from '~/pages/Admin/PriceManagement/EditPrice/EditPrice';
import TourDetail from '~/pages/TourDetail';

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
    {
        path: config.routes.detail,
        component: TourDetail,
        layout: HeaderOnly,
        banner: true,
    },
    { path: config.routes.admin, component: Admin, layout: ManagementLayout },
    {
        path: config.routes.tourManagement.tours,
        component: TourManagement,
        layout: ManagementLayout,
    },
    {
        path: config.routes.tourManagement.createTour,
        component: CreateTour,
        layout: ManagementLayout,
    },
    {
        path: config.routes.tourManagement.editTour,
        component: EditTour,
        layout: ManagementLayout,
    },
    {
        path: config.routes.tourManagement.tourPrice,
        component: Price,
        layout: ManagementLayout,
    },
    {
        path: config.routes.tourManagement.addTourPrice,
        component: CreatePrice,
        layout: ManagementLayout,
    },
    {
        path: config.routes.tourManagement.editTourPrice,
        component: EditPrice,
        layout: ManagementLayout,
    },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
