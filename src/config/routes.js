const routes = {
    home: '/',
    about: '/about',
    services: '/services',
    tour: '/tour',
    detail: '/tour/detail/:id',
    admin: '/admin',
    tourManagement: {
        tours: '/admin/tour',
        createTour: '/admin/tour/create',
        editTour: '/admin/tour/:id',
        tourPrice: '/admin/tour/prices/:id',
        addTourPrice: '/admin/tour/prices/create/:id',
        editTourPrice: '/admin/tour/prices/edit/:id',
    },
};

export default routes;
