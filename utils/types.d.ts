interface Error {
    status: number | undefined,
    message: string | undefined,
    errors: Record<string, string[]> | undefined
}

interface Service {
    id: number;
    title: string;
    content: string;
    config: {
        titleColor: string;
        contextColor: string;
        titleBackColor: string;
    };
    image: string;
    created_at: number;
    updated_at: number;
}

interface Post {
    id: number;
    title: string;
    subtitle: string;
    videos: string[]
    images: string[]
    tags: string[]
    views_count: number,
    likes_count: number,
    comments_count: number,
    created_at: number;
    updated_at: number;
}



interface Comment {
    id: number;
    comment: string;
    reply: string;
    is_approved: boolean;
    user_id: number;
    commentable: Post;
    commentator: User;
    created_at: number;
    updated_at: number;
}


interface Testimonial {
    id: number;
    full_name: string;
    service: string;
    date: string;
    image: string;
    content: string;
    created_at: number;
    updated_at: number;
}

interface Setting {
    id: string
    group: string
    name: string
    locked: boolean
    payload: string | Array<Object> | undefined
    created_at: number
    updated_at: number
}




type CarouselSettings = {
    verticalDelimiters: boolean | "left" | "right"
    hideDelimiters: boolean
    delimitersColor: string
    cycle: boolean
    intervalTime: string | number
}


type AboutItems = {
    title: string
    icon: string
    text: string
    iconColor: string
    iconBackColor: string
    textColor: string
}


type AboutSettings = {
    image: string
    items: AboutItems[]
}


type GallerySettings = {
    tabBackColor: string,
    tabRounded: string | null,
    tabActiveBtnColor: string,
    selectedSortItemColor: string,
    cardVariant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain",
    cardElevation: number,
    cardBorderColor: string,
    delimitersColor: string,
    cardTitleColor: string,
    tagsColor: string,
    tagsVariant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain",
    iconColor: string,
    iconBadgeTextColor: string,
    videoBorder: string,
    videoCardBackColor: string,
    videoCardBorderColor: string,
    videoHidden: "d-none" | null
}

type TestimonialSettings = {
    backColor: string,
    backRounded: string,
    cardVariant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain",
    cardElevation: number,
    cardBorderSize: string,
    cardColor: string,
    cardBorderColor: string,
    cardContextColor: string,
}

type ContactusSettings = {
    title: string;
    subtitle: string;
    sendBtnColor: string;
    cardBgColor: string;
    map: {
        lat: number;
        lng: number;
    };
}

type HeaderSettings = {
    headerLogo: string,
    headerItems: HeaderItems[]
}

type HeaderItems = {
    key: string
    label: string
}

type FooterSettings = {
    footerBgColor: string;
    footerHoverColor: string;
    footerTextColor: string;
    footerSocialMediaIconsColor: string;
    footerFirstAddress: string;
    footerSecondAddress: string | null;
    footerFirstPhone: string;
    footerSecondPhone: string | null;
    footerFirstEmail: string;
    footerSecondEmail: string | null;
    footerInstagram: string | null;
    footerYoutube: string | null;
    footerLinkedin: string | null;
    footerFacebook: string | null;
    footerAparat: string | null;
    footerRubika: string | null;
    footerTelegram: string | null;
};


interface Preview {
    id: string
    url: string
    mime_type: string
    size: string
    created_at: number
}

interface MediaPreview {
    picture: Preview | null;
    track: Preview | null;
}

interface Media {
    collection_name: string;
    created_at: number
    custom_properties: object
    disk: string
    file_name: string
    mime_type: string
    name: string
    size: string
    urls: {
        original: string | undefined
        large: string | undefined
        medium: string | undefined
        small: string | undefined
    }
    uuid: string
    _entity: string
}


interface User {
    uuid: string
    name: string
    email: string
    avatar: Media['urls']
    roles: string[]
    email_verified_at: number | null
    created_at: number
    updated_at: number
}


interface Category {
    id: number
    name: string
    slug: string
    description: string
    parent_id: number
    created_at: number
    updated_at: number
    deleted_at: number
}


interface ValidationRule {
    (value: any, param?: any): string | boolean;
}

interface ValidationRules {
    [key: string]: ValidationRule
}

export {
    Error,
    Setting,
    CarouselSettings,
    AboutSettings,
    AboutItems,
    GallerySettings,
    TestimonialSettings,
    ContactusSettings,
    HeaderItems,
    FooterSettings,
    HeaderSettings,
    Service,
    Post,
    Comment,
    Testimonial,
    User,
    Preview,
    MediaPreview,
    Media,
    Category,
    ValidationRules,
}