import { mockImages } from "./mockImages";

export const doctors = [
    {
        id: 1,
        slug: "dr-sarah-johnson",
        name: "Dr. Sarah Johnson",
        title: "Senior Cardiologist",
        specialty: "Cardiology",
        image: mockImages.doctors[0],
        experience: "15+ Years",
        languages: ["English", "Spanish"],
        education: "Gastroenterology, Johns Hopkins University",
        rating: 4.9,
        reviews: 124,
        about: "Dr. Sarah Johnson is a world-renowned specialist in cardiovascular health. She has dedicated her career to helping patients manage complex heart conditions through both traditional and innovative treatment methods. Her patient-centered approach ensures that everyone receives personalized care tailored to their unique needs.",
        services: ["Heart Rhythm Monitoring", "Coronary Artery Disease", "Heart Failure Management"],
        availability: ["Mon, Wed, Fri", "09:00 AM - 04:00 PM"],
        insurances: ["BlueCross BlueShield", "Aetna", "Cigna", "UnitedHealthcare", "Medicare"]
    },
    {
        id: 2,
        slug: "dr-michael-chen",
        name: "Dr. Michael Chen",
        title: "Pediatric Specialist",
        specialty: "Pediatrics",
        image: mockImages.doctors[1],
        experience: "12+ Years",
        languages: ["English", "Mandarin"],
        education: "Harvard Medical School",
        rating: 4.8,
        reviews: 98,
        about: "Dr. Michael Chen is passionate about providing the highest quality care for children from infancy through adolescence. He believes in building strong relationships with families to support children's physical and emotional development.",
        services: ["Well-child Visits", "Immunizations", "Asthma Management"],
        availability: ["Tue, Thu", "10:00 AM - 06:00 PM"],
        insurances: ["BlueCross BlueShield", "Aetna", "Humana", "Medicaid"]
    },
    {
        id: 3,
        slug: "dr-alex-maba",
        name: "Dr. Alex Maba",
        title: "Expert Dentist",
        specialty: "Dentistry",
        image: mockImages.doctors[2],
        experience: "10+ Years",
        languages: ["English", "French"],
        education: "University of Pennsylvania School of Dental Medicine",
        rating: 4.7,
        reviews: 156,
        about: "Dr. Alex Maba combines artistry and science to give his patients beautiful, healthy smiles. He specializes in restorative and cosmetic dentistry, using the latest technology to ensure comfortable treatment.",
        services: ["Cosmetic Contouring", "Root Canal Therapy", "Dental Implants"],
        availability: ["Mon - Fri", "08:00 AM - 05:00 PM"],
        insurances: ["Delta Dental", "Cigna Dental", "MetLife", "Aetna Dental"]
    },
    {
        id: 4,
        slug: "dr-emily-white",
        name: "Dr. Emily White",
        title: "Neurologist Specialist",
        specialty: "Neurology",
        image: mockImages.doctors[3],
        experience: "18+ Years",
        languages: ["English"],
        education: "Stanford University School of Medicine",
        rating: 4.9,
        reviews: 210,
        about: "Dr. Emily White is a leading expert in neurological disorders. She has extensive experience treating conditions such as migraine, epilepsy, and multiple sclerosis, focusing on improving her patients' quality of life.",
        services: ["EEG Interpretation", "Neuromuscular Evaluation", "Stroke Prevention"],
        availability: ["Wed, Thu", "09:00 AM - 01:00 PM"],
        insurances: ["UnitedHealthcare", "Cigna", "Medicare", "Kaiser Permanente"]
    }
];

export const services = [
    {
        id: 1,
        slug: "general-consultation",
        name: "General Consultation",
        category: "Primary Care",
        icon: "Activity",
        image: mockImages.services[0],
        overview: "Our check-up services are designed to give you a complete picture of your health. We offer comprehensive examinations that cover every aspect of your well-being.",
        benefits: ["Early detection of potential issues", "Personalized health roadmap", "Peace of mind"],
        procedure: ["Consultation with a specialist", "Diagnostic tests if required", "Detailed report and follow-up plan"],
        faq: [
            { q: "How long does a consultation take?", a: "A typical consultation lasts about 20-30 minutes." },
            { q: "Do I need to fast?", a: "Only if blood work is required; we will inform you beforehand." }
        ]
    },
    {
        id: 2,
        slug: "dental-surgery",
        name: "Dental Surgery",
        category: "Surgery",
        icon: "Heart",
        image: mockImages.services[1],
        overview: "Advanced dental surgical procedures provided in a comfortable, state-of-the-art environment. We handle everything from wisdom tooth extractions to complex implants.",
        benefits: ["Restores oral function", "Improved aesthetics", "Prevents further complications"],
        procedure: ["Initial X-ray and assessment", "Surgical planning", "Operation and recovery guidance"],
        faq: [
            { q: "Is it painful?", a: "We use effective anesthesia and sedation to ensure a painless experience." }
        ]
    },
    {
        id: 3,
        slug: "cardiac-screening",
        name: "Cardiac Screening",
        category: "Specialized",
        icon: "Activity",
        image: mockImages.services[2],
        overview: "Comprehensive heart health evaluation using advanced ECG and stress testing protocols.",
        benefits: ["Early risk assessment", "Detailed heart mapping", "Expert cardiologist review"],
        procedure: ["History check", "Physical exam", "ECG/ECHO tests"],
        faq: [{ q: "How long is the test?", a: "Usually 45 to 60 minutes." }]
    },
    {
        id: 4,
        slug: "mri-diagnostics",
        name: "MRI Diagnostics",
        category: "Diagnostics",
        icon: "ShieldCheck",
        image: mockImages.services[0],
        overview: "High-resolution magnetic resonance imaging for precise internal diagnostics.",
        benefits: ["Non-invasive", "Extremely detailed", "Fast results"],
        procedure: ["Screening", "Imaging session", "Radiologist analysis"],
        faq: [{ q: "Are scans safe?", a: "Yes, MRI uses magnetic fields, not radiation." }]
    }
];

export const blogPosts = [
    {
        id: 1,
        slug: "advancements-in-cardiac-care",
        title: "The Future of Medicine: Advancements in Cardiac Care",
        category: "Clinical Updates",
        date: "March 15, 2024",
        readTime: "8 min read",
        image: mockImages.blog[0],
        excerpt: "Discover the latest breakthrough technologies and treatments that are transforming the landscape of heart health.",
        content: "Cardiac care is entering a new era with innovations like minimally invasive heart surgery and personalized genomic medicine..."
    },
    {
        id: 2,
        slug: "mental-health-importance",
        title: "Understanding the Importance of Mental Health",
        category: "Wellness",
        date: "March 12, 2024",
        readTime: "6 min read",
        image: mockImages.blog[1],
        excerpt: "Mental wellness is as crucial as physical health. Learn how to maintain a healthy mind in today's fast-paced world.",
        content: "Maintaining mental health requires a proactive approach involving mindfulness, professional support, and healthy lifestyle choices..."
    },
    {
        id: 3,
        slug: "ai-in-diagnostics",
        title: "How AI is Revolutionizing Medical Diagnostics",
        category: "Technology",
        date: "March 10, 2024",
        readTime: "10 min read",
        image: mockImages.blog[2],
        excerpt: "Artificial Intelligence is no longer a buzzword. It's saving lives by identifying diseases months before traditional methods.",
        content: "AI algorithms are now capable of analyzing X-rays, MRIs, and CT scans with accuracy that rivals senior radiologists..."
    }
];

export const specialties = [
    "Cardiology", "Pediatrics", "Dentistry", "Neurology", "Gastroenterology", "Orthopedics", "Dermatology"
];

export const insuranceProviders = [
    "Aetna", "BlueCross BlueShield", "Cigna", "Delta Dental", "Humana", "Kaiser Permanente", "Medicaid", "Medicare", "MetLife", "UnitedHealthcare"
];
