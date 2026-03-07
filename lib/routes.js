export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    DOCTORS: "/doctors",
    BLOG: "/blog",
    CONTACT: "/contact",

    // Auth
    LOGIN: "/login",
    SIGNUP: "/signup",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",

    // Dynamic
    DOCTOR_DETAIL: (slug) => `/doctors/${slug}`,
    SERVICE_DETAIL: (slug) => `/services/${slug}`,
    BLOG_DETAIL: (slug) => `/blog/${slug}`,

    // Booking
    APPOINTMENTS: "/appointments",
    APPOINTMENTS_CONFIRMATION: "/appointments/confirmation",

    // Search & Misc
    SEARCH: "/search",
    FAQ: "/faq",
    PRIVACY: "/privacy-policy",
    TERMS: "/terms-and-conditions"
};
