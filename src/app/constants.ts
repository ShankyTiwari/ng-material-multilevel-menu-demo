export const constant = {
    sidebarDemoLinks: [
        {
            label: 'Home',
            link: '/',
            icon: 'favorite'
        },
        {
            label: 'Layout Variations',
            icon: 'favorite',
            items: [
                {
                    label: 'Default',
                    link: '/demo-one',
                    icon: 'favorite'
                },
                {
                    label: 'Changing Colours',
                    link: '/demo-two',
                    icon: 'favorite_border'
                },
                {
                    label: 'Working with Padding',
                    link: '/demo/12',
                    icon: 'favorite_border'
                },
                {
                    label: 'Changing Background & Colours',
                    link: '/demo-number/12',
                    icon: 'favorite_border'
                }
            ]                ,
        },
        {
            label: 'Routing Features',
            icon: 'favorite',
            items: [
                {
                    label: 'Redirect',
                    link: '/demo-five',
                    icon: 'favorite'
                },
                {
                    label: 'Absolute Route Redirect',
                    link: '/demo-six',
                    icon: 'favorite_border'
                },
                {
                    label: 'Detecting the Route change',
                    link: '/demo-seven',
                    icon: 'favorite_border'
                }
            ]
        },
        {
            label: 'More Configurations',
            icon: 'favorite',
            items: [
                {
                    label: 'Disable Routing',
                    link: '/demo-five',
                    icon: 'favorite'
                },
                {
                    label: 'Disable Padding at start',
                    link: '/demo-six',
                    icon: 'favorite_border'
                },
                {
                    label: 'Add Custom classname',
                    link: '/demo-seven',
                    icon: 'favorite_border'
                }
            ]
        }
    ],
    sidebarConfigurations: {
        paddingAtStart: false,
        interfaceWithRoute: true
    }
};
