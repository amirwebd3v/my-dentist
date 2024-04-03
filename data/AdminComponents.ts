const sidebarSingleItems = [
    {
        title: "میز کار",
        icon: "mdi mdi-view-dashboard-outline",
        to: "/admin/desktop",
    },
    {
        title: "کاربران",
        icon: "mdi mdi-account-group-outline",
        to: "/admin/users",
    },
    {
        title: "نوبت ها",
        icon: "mdi mdi-calendar-clock-outline",
        to: "/admin/appointments",
    },
    {
        title: "پیام ها",
        icon: "mdi mdi-message-text-outline",
        to: "/admin/messages",
    },
    {
        title: "اعلان ها",
        icon: "mdi mdi-bell-outline",
        to: "/admin/notifications",
    },
];


const sidebarGroupItems = [
    {
        head: "تنظیمات",
        sub: [
            {to: '/admin/settings/header', title: 'نوار هدایت'},
            {to: '/admin/settings/slide-banner', title: 'اسلاید بنر'},
            {to: '/admin/settings/services', title: 'خدمات'},
            {to: '/admin/settings/gallery', title: 'گالری'},
            {to: '/admin/settings/about', title: 'درباره'},
            {to: '/admin/settings/comments', title: 'نظرات'},
            // {to: '/admin/settings/articles', title: 'مقالات'},
            {to: '/admin/settings/footer', title: 'پاورقی'},
        ],
        icon: 'mdi mdi-cogs'
    },

]
export {sidebarSingleItems, sidebarGroupItems};