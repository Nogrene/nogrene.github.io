// Structured data for SEO (JSON-LD)
document.addEventListener('DOMContentLoaded', function() {
    // Person schema for the homepage
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "David Nogrene",
            "url": "https://nogrene.github.io/",
            "image": "https://nogrene.github.io/images/david-nogrene.jpg",
            "jobTitle": "Frontend Developer",
            "description": "Professional frontend developer with 1+ years of experience creating beautiful, responsive websites and web applications.",
            "email": "nogrenedavid@gmail.com",
            "telephone": "+254 746753921",
            "sameAs": [
                // Add social media profiles when available
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
                "Frontend Development"
            ]
        };

        // Add the schema to the page
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(personSchema);
        document.head.appendChild(script);
    }

    // Service schema for the services page
    if (window.location.pathname.includes('services.html')) {
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development Services",
            "provider": {
                "@type": "Person",
                "name": "David Nogrene",
                "url": "https://nogrene.github.io/"
            },
            "description": "Professional web development services including responsive design, website optimization, SEO services, and more.",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Free Website Development",
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
