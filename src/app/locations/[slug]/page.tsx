import { Metadata } from 'next';
import Link from 'next/link';

// Mock database for scalability
const locationsData = {
  'miami': {
    title: 'Miami AV Rentals',
    description: 'We provide enterprise-grade corporate AV rentals for businesses across the Miami metro area.',
    content: 'From the Miami Beach Convention Center to downtown corporate venues, we deliver rapid-response technology rentals. When your Miami event outgrows regional capabilities, we integrate with Show Technology, Inc. for comprehensive production services.',
    relatedServices: ['corporate-av-rental', 'led-wall-rental']
  },
  'fort-lauderdale': {
    title: 'Fort Lauderdale Event Technology',
    description: 'Professional event production and AV equipment rentals in Fort Lauderdale.',
    content: 'Our local warehouse and expert technicians ensure reliable execution for your Fort Lauderdale conferences and trade shows. We scale our team to meet your needs.',
    relatedServices: ['hybrid-event-solutions', 'live-streaming']
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData[slug as keyof typeof locationsData];
  
  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.title} | AV Rentals South Florida`,
    description: location.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationsData[slug as keyof typeof locationsData];

  if (!location) {
    return (
      <div className="container section">
        <h1 className="heading-1">Location not found</h1>
      </div>
    );
  }

  return (
    <main className="container section">
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--space-xl)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--space-md)' }}>{location.title}</h1>
        <p className="text-lg" style={{ marginBottom: 'var(--space-lg)' }}>{location.description}</p>
        
        <div style={{ backgroundColor: 'var(--bg-surface)', padding: 'var(--space-md)', borderRadius: '8px', marginBottom: 'var(--space-xl)' }}>
          <p style={{ lineHeight: 1.8 }}>{location.content}</p>
        </div>

        <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>Top Services in {location.title.replace(' AV Rentals', '').replace(' Event Technology', '')}</h2>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {location.relatedServices.map(serviceSlug => (
            <li key={serviceSlug}>
              <Link 
                href={`/services/${serviceSlug}`}
                style={{ 
                  color: 'var(--accent-blue)', 
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px'
                }}
              >
                {serviceSlug.replace(/-/g, ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
