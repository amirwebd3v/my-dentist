/*--Navigation Links---*/
const header = [
    {
        key: "about-us",
        label: "درباره",
    },
    {
        key: "services",
        label: "خدمات",
    },
    {
        key: "gallery",
        label: "گالری",
    },
    {
        key: "testimonials",
        label: "نظرات",
    },
    {
        key: "faq",
        label: "سوالات متداول",
    },
    {
        key: "contact-us",
        label: "تماس سریع",
    },
];

/*--Brand Banner--*/
const slideBanners = [
    {
        id: '1',
        tag: 'دندان پزشک و جراح',
        title: 'دکتر سمیرا رونقی',
        context: 'به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید.',
        tagChipSize: 'small',
        tagColor: 'white',
        tagVariant: 'elevated',
        titleColor: 'black',
        contextColor: 'black',
        contextFontSize: 'font-18',
        btnText: 'تماس با من',
        btnLink: '/',
        btnColor: 'white',
        btnSize: 'default',
        imageSource: 'https://www.inglewoodfamilydental.ca/wp-content/uploads/2023/10/choosing-the-right-dentist-for-your-dental-crown-procedure-scaled.jpg',
    },
    {
        id: '2',
        tag: 'دندان پزشک و جراح',
        title: 'دکتر سمیرا رونقی',
        context: 'به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید.',
        tagChipSize: 'small',
        tagColor: 'white',
        tagVariant: 'elevated',
        titleColor: 'black',
        contextColor: 'black',
        contextFontSize: 'font-18',
        btnText: 'تماس با من',
        btnLink: '/',
        btnColor: 'white',
        btnSize: 'default',
        imageSource: 'https://www.pinnacledentalgroupmi.com/wp-content/uploads/2023/11/FemaleDentist_1110x700.jpeg',
    },
    {
        id: '3',
        tag: 'دندان پزشک و جراح',
        title: 'دکتر سمیرا رونقی',
        context: 'به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید.',
        tagChipSize: 'small',
        tagColor: 'white',
        tagVariant: 'elevated',
        titleColor: 'black',
        contextColor: 'black',
        contextFontSize: 'font-18',
        btnText: 'تماس با من',
        btnLink: '/',
        btnColor: 'white',
        btnSize: 'default',
        imageSource: 'https://www.pinnacledentalgroupmi.com/wp-content/uploads/2023/11/FemaleDentist_1110x700.jpeg',
    },
    {
        id: '4',
        tag: 'دندان پزشک و جراح',
        title: 'دکتر سمیرا رونقی',
        context: 'به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید. به وبسایت من خوش آمدید.',
        tagChipSize: 'small',
        tagColor: 'white',
        tagVariant: 'elevated',
        titleColor: 'black',
        contextColor: 'black',
        contextFontSize: 'font-18',
        btnText: 'تماس با من',
        btnLink: '/',
        btnColor: 'white',
        btnSize: 'default',
        imageSource: 'https://www.pinnacledentalgroupmi.com/wp-content/uploads/2023/11/FemaleDentist_1110x700.jpeg',
    },
];


const slideBannerSettings = [
    {
        hideDelimiters: true,
        cycle: true,
        intervalTime: 6 * 1000,
        verticalDelimiters: false,
        delimitersColor: '#FFFFFF',
    }
];
/*--Feature 1--*/
const about = [
    {
        id: 1,
        title: "تعهد",
        icon: "mdi mdi-hand-heart",
        text: "در کلینیک دندانپزشکی دکتر سمیرا رونقی، تعهد به سلامت و رضایت بیماران اولویت اصلی است. با دقت و توجه به جزئیات، شما بهترین خدمات دندانپزشکی را دریافت مینمایید. تعهد ایشان به استفاده از مواد با کیفیت و روش‌های درمانی پیشرفته، تضمین‌کننده‌ی لبخندی زیبا و ماندگار برای شماست.",
        iconColor: 'white',
        iconBackColor: '#03192C',
        textColor: '#08232d'
    },
    {
        id: 2,
        title: "تجربه",
        icon: "mdi mdi-tooth",
        text: "با بیش از ۱۰ سال تجربه در ارائه خدمات دندانپزشکی در تهران، دکتر سمیرا رونقی به عنوان یکی از متخصصان برجسته در این حوزه شناخته می‌شود. با بهره‌گیری از جدیدترین تکنولوژی‌ها و روش‌های درمانی، دکتر رونقی بهترین خدمات را به شما ارائه می‌دهد. تجربه‌ی ایشان تضمین‌کننده‌ی لبخندی زیبا و دندان هایی سالم برای شماست.",
        iconColor: 'white',
        iconBackColor: '#03192C',
        textColor: '#08232d'
    },
    {
        id: 3,
        title: "تخصص",
        icon: "mdi mdi-toothbrush",
        text: "دکتر سمیرا رونقی، با بهره‌گیری از جدیدترین تکنولوژی‌ها و روش‌های درمانی، خدمات جامع دندانپزشکی را ارائه می‌دهد. دکتر سمیرا رونقی با شماره نظام پزشکی ۱۷۲۸۵۴، دارای دکترای حرفه‌ای دندانپزشکی است و با تجربه و تخصص خود، به بهبود سلامت و زیبایی دهان و دندان بیماران کمک می‌کند.",
        iconColor: 'white',
        iconBackColor: '#03192C',
        textColor: '#08232d'
    },
];

/*--Service--*/
const services = [
    {
        id: 1,
        context: "تخصص در پرکردن دندان و ایجاد لبخند عالی برای شما تخصص در پرکردن دندان و ایجاد لبخند عالی برای شما",
        titleBackColor: 'white',
        contextColor: 'black',
        title: 'پر کردن دندان',
        titleColor: 'white',
        icon: '',
    },
    {
        id: 2,
        context: "تخصص در بهداشت دندان و ایجاد لبخند عالی برای شما تخصص در پرکردن دندان و ایجاد لبخند عالی برای شما",
        titleBackColor: 'white',
        contextColor: 'black',
        title: 'بهداشت دندان',
        titleColor: 'white',
        icon: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    },
    {
        id: 3,
        context: "تخصص در روکش های دندان و ایجاد لبخند عالی برای شما تخصص در پرکردن دندان و ایجاد لبخند عالی برای شما",
        titleBackColor: 'white',
        contextColor: 'black',
        title: 'روکش های دندان',
        titleColor: 'white',
        icon: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
    },
    {
        id: 4,
        context: "تخصص در سفید کردن دندان و ایجاد لبخند عالی برای شما تخصص در پرکردن دندان و ایجاد لبخند عالی برای شما",
        titleBackColor: 'white',
        title: 'سفید کردن دندان',
        titleColor: 'white',
        icon: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
    },
];

/*--Gallery--*/
const gallery = [
    {
        id: 1,
        title: "کامپوزیت",
        posts: [
            {
                id: 101,
                title: 'Mountain Sunset',
                subtitle: 'A beautiful sunset over the mountain range',
                tags: ['sunset', 'mountain', 'landscape'],
                views: 201,
                likes: 48,
                images: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'

            },
            {
                id: 102,
                title: 'Ocean Cliffside',
                subtitle: 'Waves crashing into the cliffs',
                tags: ['ocean', 'cliff', 'seascape'],
                views: 174,
                likes: 31,
                images: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
                id: 103,
                title: 'Countryside Meadow',
                subtitle: 'A lush green meadow with flowers',
                tags: ['meadow', 'countryside', 'nature'],
                views: 149,
                likes: 23,
                images: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
        ],
    },
    // {
    //     id: 2,
    //     title: "لمینت",
    //     posts: [
    //         {
    //             id: 201,
    //             title: 'Downtown Skyscrapers',
    //             subtitle: 'Glass skyscrapers towering over the city',
    //             tags: ['city', 'skyscraper', 'downtown'],
    //             views: 127,
    //             likes: 14,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 202,
    //             title: 'Street Market',
    //             subtitle: 'Vendors selling wares on the busy street',
    //             tags: ['market', 'city', 'street'],
    //             views: 94,
    //             likes: 22,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 203,
    //             title: 'City Park',
    //             subtitle: 'Trees and pathways cutting through the urban park',
    //             tags: ['park', 'city', 'nature'],
    //             views: 107,
    //             likes: 17,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 204,
    //             title: 'Historic Theater',
    //             subtitle: 'An old theater with ornate architecture',
    //             tags: ['theater', 'history', 'city'],
    //             views: 88,
    //             likes: 12,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 205,
    //             title: 'Cityscape',
    //             subtitle: 'An urban landscape of towering skyscrapers',
    //             tags: ['city', 'skyline', 'skyscraper'],
    //             views: 163,
    //             likes: 29,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         }
    //     ],
    // },
    // {
    //     id: 3,
    //     title: "جرم گیری",
    //     posts: [
    //         {
    //             id: 301,
    //             title: 'Elephant Herd',
    //             subtitle: 'A family of elephants walking together',
    //             tags: ['elephant', 'herd', 'mammal'],
    //             views: 221,
    //             likes: 41,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 302,
    //             title: 'Leopard',
    //             subtitle: 'A leopard prowling through the bush',
    //             tags: ['leopard', 'wildlife', 'big cat'],
    //             views: 187,
    //             likes: 34,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 303,
    //             title: 'Monkey',
    //             subtitle: 'A monkey swinging from a tree branch',
    //             tags: ['monkey', 'primate', 'mammal'],
    //             views: 173,
    //             likes: 27,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 304,
    //             title: 'Zebras',
    //             subtitle: 'Zebras grazing together in a herd',
    //             tags: ['zebra', 'herd', 'mammal'],
    //             views: 156,
    //             likes: 22,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 305,
    //             title: 'Lion Cub',
    //             subtitle: 'A baby lion resting in the grass',
    //             tags: ['lion', 'cub', 'wildlife'],
    //             views: 201,
    //             likes: 33,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         }
    //     ],
    // },
    // {
    //     id: 4,
    //     title: "جراحی",
    //     posts: [
    //         {
    //             id: 401,
    //             title: 'Aurora Borealis',
    //             subtitle: 'Beautiful northern lights in the night sky',
    //             tags: ['northern lights', 'aurora borealis', 'sky'],
    //             views: 173,
    //             likes: 29,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 402,
    //             title: 'Beach Sunset',
    //             subtitle: 'Sun setting over the ocean horizon',
    //             tags: ['sunset', 'beach', 'ocean'],
    //             views: 164,
    //             likes: 27,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 403,
    //             title: 'Mountain Lake',
    //             subtitle: 'A crystal clear mountain lake',
    //             tags: ['lake', 'mountain', 'nature'],
    //             views: 158,
    //             likes: 24,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 404,
    //             title: 'Forest Stream',
    //             subtitle: 'A stream running through a lush forest',
    //             tags: ['stream', 'forest', 'nature'],
    //             views: 183,
    //             likes: 32,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 405,
    //             title: 'Desert Canyon',
    //             subtitle: 'A deep canyon cutting through the desert landscape',
    //             tags: ['desert', 'canyon', 'nature'],
    //             views: 201,
    //             likes: 38,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         }
    //     ],
    // },
    // {
    //     id: 5,
    //     title: "Sionage Mokcup",
    //     posts: [
    //         {
    //             id: 501,
    //             title: 'Great Wall of China',
    //             subtitle: 'The Great Wall winding through the hills',
    //             tags: ['great wall', 'china', 'history'],
    //             views: 187,
    //             likes: 31,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 502,
    //             title: 'Machu Picchu',
    //             subtitle: 'The ancient Inca citadel high in the Andes Mountains',
    //             tags: ['machu picchu', 'inca', 'history'],
    //             views: 165,
    //             likes: 28,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 503,
    //             title: 'Great Barrier Reef',
    //             subtitle: 'Coral and marine life in Australia\'s reef',
    //             tags: ['barrier reef', 'ocean', 'australia'],
    //             views: 159,
    //             likes: 24,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 504,
    //             title: 'Venice Canals',
    //             subtitle: 'The canals and bridges of Venice, Italy',
    //             tags: ['venice', 'italy', 'canal'],
    //             views: 174,
    //             likes: 27,
    //             images: [
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             ],
    //         },
    //         {
    //             id: 505,
    //             title: 'Victoria Falls',
    //             subtitle: 'Waterfall on the border of Zambia and Zimbabwe',
    //             tags: ['victoria falls', 'waterfall', 'africa'],
    //             views: 203,
    //             likes: 42,
    //             media: [
    //
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //                 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //
    //             ],
    //         }
    //     ],
    // },
];
const gallerySettings = [
    {
        tabBackColor: '#03192c',
        tabRounded: 'rounded-t',
        tabActiveBtnColor: 'white',
        selectedSortItemColor: '#03192c',
        cardVariant: 'outlined',
        cardElevation: 1,
        cardBorderColor: 'Black',
        delimitersColor: 'white',
        cardTitleColor: '#03192C',
        tagsColor: '#3e4555',
        tagsVariant: 'outlined',
        iconColor: '#03192C',
        iconBadgeTextColor: 'white',
    }
];

const videoSettings = [{
    border: 'border-xl',
    cardBackColor: 'white',
    cardBorderColor: '#03192c',
    hidden: 'd-none',
    link: '',
}]

/*--Testimonials--*/
const testimonials = [
    {
        id: 1,
        img: "1.jpg",
        testimonial:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
        name: "امیرحسین ",
        serviceName: "عصب کشی",
        date: "۱۲ تیر ۱۴۰۲"
    },
    {
        id: 2,
        img: "2.jpg",
        testimonial:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
        name: "حمیدرضا ",
        serviceName: "عصب کشی",
        date: "۱۲ تیر ۱۴۰۲"
    },
    {
        id: 3,
        img: "3.jpg",
        testimonial:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.",
        name: "جلال ",
        serviceName: "عصب کشی",
        date: "۱۲ تیر ۱۴۰۲"
    },
    {
        id: 4,
        img: "3.jpg",
        testimonial:
            "Cum sociis natoque یسشسیشسیییییییی.",
        name: "رضا ",
        serviceName: "جراحی فک",
        date: "۱۲ تیر ۱۴۰۲"
    },
];

const testimonialSettings = [
    {
        backColor: '',
        backRounded: '',
        cardVariant: 'outlined',
        cardElevation: 1,
        cardBorderSize: 'small',
        cardColor: '',
        cardBorderColor: '#03192C',
        cardContextColor: '#03192C',
    }
];


/*--articles--*/
const articles = [
    {
        id: 1,
        img: "https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/JSD/13/1/JSD_Cover.jpg",
        title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
        link: "",
        desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
        year: "1402",
        month: "تیر",
    },
    {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
        link: "",
        desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
        year: "1402",
        month: "تیر",
    },
    {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
        link: "",
        desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
        year: "1402",
        month: "تیر",
    },
    // {
    //     id: 4,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 5,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // }
    // ,{
    //     id: 6,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 7,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 8,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 9,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 10,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 11,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 12,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 13,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },{
    //     id: 14,
    //     img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    //     title: "از چیزهای کوچک بیاموزید تا چیزی بزرگتر خلق کنید.",
    //     desc: "مسواک زدن یکی از موارد مهم در مساله مراقبت از دندان میباشد",
    //     year: "1402",
    //     month: "تیر",
    // },

];

//comments
const comments = [
    {
        username: 'User 1',
        date: '3 days ago',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin congue erat, sed bibendum odio vestibulum vel.',
        avatar: '/avatars/user-1.jpg',
        replies: [
            {
                username: 'User 2',
                date: '2 days ago',
                text: 'Nice post! I really enjoyed reading this.',
                avatar: '/avatars/user-2.jpg'
            },
            {
                username: 'User 3',
                date: '2 days ago',
                text: 'I agree, great comment!',
                avatar: '/avatars/user-3.jpg'
            }
        ]
    },

    {
        username: 'User 4',
        date: '3 days ago',
        text: 'Pellentesque accumsan turpis vel felis scelerisque, sit amet mattis mi tempor.',
        avatar: '/avatars/user-4.jpg',
        replies: [
            {
                username: 'User 5',
                date: '2 days ago',
                text: 'Interesting perspective.',
                avatar: '/avatars/user-5.jpg'
            }
        ]
    },


];


const faq = [
    {
        id: 1,
        question: ' چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟',
        answer: '.در این بخش میتوانید پاسخ سوالاتی که به صورت عمومی در زمینه دهان و دندان مطرح هست را پیدا کنید.در این بخش میتوانید پاسخ سوالاتی که به صورت عمومی در زمینه دهان و دندان مطرح هست را پیدا کنید.',
    },
    {
        id: 2,
        question: '  چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟',
        answer: 'پاسخگوی سوالات شما مراجعه کنندگان عزیز در زمینه دهان و دندان هستیم.',
    },
    {
        id: 3,
        question: ' چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟',
        answer: 'پاسخگوی سوالات شما مراجعه کنندگان عزیز در زمینه دهان و دندان هستیم.',
    },
    {
        id: 4,
        question: ' چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟ چگونه قبل از معاینه میتوانم وقت خود را ثبت کنم؟',
        answer: 'پاسخگوی سوالات شما مراجعه کنندگان عزیز در زمینه دهان و دندان هستیم.',
    }
]

const faqSettings = [
    {
        title: ' سوالات متداول',
        subtitle: 'پاسخگوی سوالات شما مراجعه کنندگان عزیز در زمینه دهان و دندان هستیم.',
        cardBgColor: '#03192C',
        titleColor: '#ffffff',
        contextColor: '#03192C',
        contextBgColor: '#ffffff',
        mainImage: './images/features/3/img1.jpg',
        rightSideImage: './images/faq/OIP.jpeg',
        leftSideImage: './images/faq/cute-model-looking-copy-space.png',
    }
]

const contactusSettings = [
    {
        title: ' انتقادات و پیشنهادات',
        subtitle: 'شما می‌توانید هر زمان که تمایل داشتید با ما تماس بگیرید یا\n' +
            '                ایمیل بفرستید. هدف ما این است که به شما بهترین تجربه ممکن را\n' +
            '                در مطب دندانپزشکی دکتر سمیرا رونقی ارائه دهیم و درخواست‌ها و نیازهای شما را برآورده کنیم.',
        sendBtnColor: 'رنگ دکمه ارسال',
        cardBgColor: 'رنگ زمینه کارت',
        map: {
            "lat": 35.78778,
            "lng": 51.38319
        }
    }
]




const footer = [
    {
        footerBgColor: '#03192C',
        footerTextColor: '#FFFFFF',
        footerSocialMediaIconsColor: '#03192C',
        footerHoverColor: '#fec500',
        footerFirst_address: 'تهران، سعادت آباد، بلوار ۲۴متری(محمد علی کشاورز)،نبش چهارم شرقی، پلاک ۲۹، طبقه دوم، واحد ۲۰۲',
        footerSecond_address: 'دومین آدرس',
        footerFirst_phone: '021-2237-2127',
        footerSecond_phone: '021-2237-2128',
        footerFirst_email: 'اولین پست الکترونیک',
        footerSecond_email: 'دومین پست الکترونیک',
        footerInstagram: 'https://www.instagram.com/dr.ronaghi_s_dds',
        footerYoutube: 'لینک یوتیوب',
        footerLinkedin: 'لینک لینکدین',
        footerFacebook: 'لینک فیسبوک',
        footerAparat: 'لینک آپارات',
        footerRubika: 'لینک روبیکا',
        footerTelegram: 'لینک تلگرام',
    }
]

export {
    header,
    about,
    services,
    gallery,
    gallerySettings,
    videoSettings,
    testimonials,
    testimonialSettings,
    articles,
    slideBanners,
    slideBannerSettings,
    comments,
    faq,
    faqSettings,
    contactusSettings,
    footer,
};
