const routes = {
    home: '/',
    about: '/about',
    services: '/services',
    tour: '/tour',
    admin: '/admin',
    tourManagement: {
        tours: '/admin/tour',
        createTour: '/admin/tour/create',
        editTour: '/admin/tour/:id',
        editTourPrice: '/admin/tour/prices/:id',
    },
};

export default routes;
