// Structured data for SEO (JSON-LD)
document.addEventListener('DOMContentLoaded', function () {
    const siteUrl = "https://nogrene.netlify.app/";
    const logoUrl = siteUrl + "images/logo2.png";
    const portraitUrl = siteUrl + "images/david-nogrene.jpg";

    // Person schema for the homepage
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": siteUrl + "#person",
            "name": "David Nogrene",
            "url": siteUrl,
            "image": portraitUrl,
            "jobTitle": "Web Developer",
            "description": "Professional web developer with experience in creating beautiful, responsive websites and web applications.",
            "email": "nogrenedavid@gmail.com",
            "telephone": "+254 746753921",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
            },
            "sameAs": [
                "https://wa.me/+254746753921",
                "https://www.instagram.com/davie_web?igsh=ZHJsYjFyOWc2M3V2",
                "https://www.facebook.com/share/1ATMfsWN2z/",
                "https://www.tiktok.com/@nogrene"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
            },
            "knowsAbout": [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Responsive Web Design",
                "Frontend Development",
                "Web Development",
                "SEO"
            ],
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": siteUrl
            }
        };

        const proServiceSchema = {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "David Nogrene Web Development",
            "image": logoUrl,
            "@id": siteUrl + "#service",
            "url": siteUrl,
            "telephone": "+254 746753921",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.2921,
                "longitude": 36.8219
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "16:00"
            }
        };

        // Add the schemas to the page
        [personSchema, proServiceSchema].forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);
        });
    }

    // Service schema for the services page
    if (window.location.pathname.includes('services.html')) {
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development Services",
            "provider": {
                "@id": siteUrl + "#person"
            },
            "areaServed": [
                {
                    "@type": "Country",
                    "name": "Kenya"
                },
                {
                    "@type": "City",
                    "name": "Nairobi"
                },
                {
                    "@type": "Place",
                    "name": "Worldwide"
                }
            ],
            "description": "Professional web development services including responsive design, website optimization, SEO services, and more.",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Custom Website Development",
                    "description": "Custom websites built from scratch using the latest technologies. Fully responsive and optimized for performance."
                },
                {
                    "@type": "Offer",
                    "name": "Responsive Design",
                    "description": "Ensure your website looks perfect on all devices. Mobile-friendly and accessible design."
                },
                {
                    "@type": "Offer",
                    "name": "E-Commerce Solutions",
                    "description": "Complete online store setup with payment integration, product management, and secure checkout."
                },
                {
                    "@type": "Offer",
                    "name": "Website Optimization",
                    "description": "Speed up your existing website with optimization services. Improve loading times and SEO rankings."
                },
                {
                    "@type": "Offer",
                    "name": "Ongoing Maintenance",
                    "description": "Regular updates and technical support to keep your website running smoothly."
                },
                {
                    "@type": "Offer",
                    "name": "SEO Services",
                    "description": "Improve your search engine rankings with comprehensive SEO strategies and optimization techniques."
                }
            ]
        };

        // Add the schema to the page
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(serviceSchema);
        document.head.appendChild(script);
    }
});
