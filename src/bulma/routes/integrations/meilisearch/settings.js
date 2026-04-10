const SettingsIndex = () => import('../../../pages/integrations/settings/Index.vue');

export default {
    name: 'integrations.meilisearch.settings.index',
    path: 'settings',
    component: SettingsIndex,
    meta: {
        breadcrumb: 'settings',
        title: 'Settings',
    },
};
