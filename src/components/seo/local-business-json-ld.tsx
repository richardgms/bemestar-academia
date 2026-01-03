import { academia } from "@/lib/data";

export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["ExerciseGym", "LocalBusiness"],
        "name": academia.nome,
        "alternateName": academia.nomeAbreviado,
        "image": [
            "https://bemestaracademia.com.br/assets/logo-icon-laranja.svg"
        ],
        "@id": "https://bemestaracademia.com.br",
        "url": "https://bemestaracademia.com.br",
        "telephone": "+5583986209170", // Correct number from history
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": `${academia.endereco.rua}, ${academia.endereco.numero}`,
            "addressLocality": academia.endereco.cidade,
            "addressRegion": academia.endereco.estado,
            "postalCode": "58300-000",
            "addressCountry": "BR"
        },
        // Geo coordinates for Santa Rita, PB (approximate center or address)
        // Rua Édson de Queiroz, 554, Centro, Santa Rita-PB
        // Coords approx: -7.1132, -34.9754 (Need to be reasonably accurate)
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -7.1132,
            "longitude": -34.9754
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "05:00",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
            }
        ],
        "sameAs": [
            academia.instagramUrl
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Planos",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "Aula Experimental Gratuita",
                    "description": "Agende uma aula experimental gratuita para conhecer nossa estrutura e modalidades.",
                    "price": "0",
                    "priceCurrency": "BRL",
                    "uRl": "https://bemestaracademia.com.br/aula-experimental-gratis-santa-rita"
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
