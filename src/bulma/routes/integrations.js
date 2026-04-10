import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter.fromGlob(import.meta.glob('./integrations/*.js', { eager: true }));

export default {
    path: '/integrations',
    children: routes,
};
