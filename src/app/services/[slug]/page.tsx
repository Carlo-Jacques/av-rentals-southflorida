import { Metadata } from 'next';
import Link from 'next/link';

const servicesData = {
  'led-wall-rental': {
    title: 'LED Wall Rentals in South Florida',
    description:
      'Professional LED wall rentals for conferences, corporate events, trade shows, galas, and live productions throughout South Florida.',

    intro:
      'Small displays and dim projection screens can make even a well-organized event feel underwhelming. LED video walls help create a more modern and visually impressive experience by delivering bright, high-resolution visuals that remain visible in ballrooms, convention centers, conference halls, and live event environments. AV Rentals South Florida provides professional LED wall rental services designed to help businesses, event organizers, and production teams create stronger audience engagement throughout South Florida.',

    sections: [
      {
        heading: 'Professional LED Wall Rental Solutions',
        body:
          'LED walls have become one of the most effective ways to improve visibility and audience engagement during live events. Whether used for keynote presentations, sponsor branding, multimedia playback, stage backdrops, or trade show displays, LED video walls help create a cleaner and more professional presentation environment. Our LED wall rental solutions are scalable for conferences, corporate meetings, conventions, product launches, galas, and large-format business events throughout South Florida.',
      },
      {
        heading: 'LED Video Walls for Conferences and Corporate Events',
        body:
          'Corporate events and conferences often require presentation systems capable of remaining bright and visible in large venues with significant ambient lighting. LED walls provide a high-impact alternative to traditional projection systems while helping presenters maintain audience attention during keynotes, presentations, panel discussions, and general sessions. We support conferences, executive meetings, trade shows, and corporate events with LED display systems configured around venue size, audience layout, and presentation goals.',
      },
      {
        heading: 'Trade Show and Exhibit Display Support',
        body:
          'Trade shows are highly competitive environments where exhibitors need to capture attention quickly. LED video walls help booths and exhibit spaces stand out with bright visuals, promotional content, branded messaging, and product demonstrations visible from across the convention floor. Depending on the event setup, LED wall systems can support sponsor activations, exhibit presentations, live demonstrations, branded stages, and multimedia playback designed to improve attendee engagement throughout the event.',
      },
      {
        heading: 'Indoor and Large-Format LED Display Systems',
        body:
          'Different venues require different display configurations depending on viewing distance, room size, stage design, and presentation needs. Our LED wall rental inventory supports a range of display environments including hotel ballrooms, convention centers, conference stages, networking events, gala productions, and corporate presentation spaces throughout South Florida. LED systems can also integrate with staging, lighting, audio systems, presentation switchers, livestream feeds, and additional event production infrastructure when required.',
      },
      {
        heading: 'LED Wall Rentals Across South Florida',
        body:
          'AV Rentals South Florida provides LED wall rental support throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and surrounding South Florida markets. We support conferences, business meetings, conventions, nonprofit galas, trade shows, corporate presentations, product launches, and live event environments hosted in hotels, resorts, convention centers, offices, and private venues throughout the region.',
      },
      {
        heading: 'Reliable Visual Support for Live Events',
        body:
          'Visual presentation quality can significantly affect how attendees experience an event. Poor visibility, dim displays, or unreliable playback systems can quickly reduce engagement during important presentations and live productions. Our goal is to help event organizers create a more polished and visually impressive event environment through dependable LED wall rental support tailored to the pace and demands of professional live events.',
      },
    ],

    relatedEvents: [
      { slug: 'trade-shows', label: 'Trade Shows' },
      { slug: 'corporate-events', label: 'Corporate Events' },
      { slug: 'conferences', label: 'Conferences' },
      { slug: 'hybrid-events', label: 'Hybrid Events' },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/services/led-walls-video-displays/',
        label: 'LED wall and video display systems',
      },
      {
        href: 'https://showtechinc.com/events/conventions-trade-shows/',
        label: 'trade show and convention production',
      },
      {
        href: 'https://showtechinc.com/events/meetings-conferences/',
        label: 'conference and meeting production',
      },
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
    ],
  },

  'corporate-av-rental': {
    title: 'Corporate AV Rental in South Florida',
    description:
      'Professional corporate AV rental services for meetings, conferences, presentations, training sessions, and business events throughout South Florida.',

    intro:
      'Corporate events depend heavily on clear communication, reliable presentation systems, and a professional experience for attendees. Technical problems, poor audio quality, dim displays, or presentation interruptions can quickly affect the way a company is perceived during meetings and live events. AV Rentals South Florida provides corporate AV rental solutions designed to help businesses create smoother, more polished event experiences throughout Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Hollywood, and surrounding South Florida markets.',

    sections: [
      {
        heading: 'Professional AV Support for Corporate Events',
        body:
          'Corporate events often involve executive presentations, keynote sessions, internal meetings, training programs, client-facing events, and multi-room conferences where professionalism and reliability are critical. Our corporate AV rental services are designed to support these environments with dependable audio systems, presentation displays, wireless microphones, staging, lighting, and technical support tailored to the needs of business events. Whether your event takes place in a ballroom, conference room, office, hotel, or convention venue, we help create a cleaner and more organized presentation environment.',
      },

      {
        heading: 'Corporate Meetings and Presentation Systems',
        body:
          'Business presentations need to feel clear, professional, and easy for attendees to follow. We support corporate meetings with AV systems designed to improve visibility, communication, and audience engagement throughout the event. Typical setups may include wireless microphones, projection systems, presentation displays, confidence monitors, sound systems, LED walls, presentation laptops, switchers, and video playback support configured around the venue size and presentation goals.',
      },

      {
        heading: 'Conference and General Session AV Rentals',
        body:
          'Conferences and general sessions require dependable AV systems capable of supporting multiple presenters, branded content, keynote presentations, and audience interaction without technical distractions. We provide scalable AV support for conferences, leadership meetings, educational seminars, association events, and executive programs throughout South Florida. Our systems are designed to help presentations run smoothly while creating a more professional experience for speakers, sponsors, and attendees.',
      },

      {
        heading: 'LED Displays and Visual Presentation Solutions',
        body:
          'Strong visual presentation systems help keep audiences engaged while improving visibility throughout meeting rooms, ballrooms, and conference environments. Depending on the event size and layout, we provide projection systems, large-format displays, confidence monitors, and LED wall solutions designed to support presentations, multimedia playback, branded visuals, sponsor content, and live event environments. For larger productions requiring expanded technical coordination, additional resources are available through our partners providing full-service audio visual production and LED wall systems.',
      },

      {
        heading: 'Corporate AV Rental Across South Florida',
        body:
          'AV Rentals South Florida supports corporate meetings and business events throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and surrounding South Florida markets. We provide AV rental support for conferences, networking events, nonprofit functions, training sessions, company meetings, investor presentations, educational programs, and executive events hosted in hotels, resorts, offices, convention centers, and private venues throughout the region.',
      },

      {
        heading: 'Reliable AV Support for Business Events',
        body:
          'Corporate events operate on strict schedules where delays and technical problems can quickly interrupt presentations and reduce audience engagement. Our focus is on helping events run more smoothly through dependable equipment, organized setup, and responsive technical support designed around the demands of professional business environments. AV Rentals South Florida provides scalable corporate AV rental services that help businesses create a more polished and confident event experience from setup through final presentation.',
      },
    ],

    relatedEvents: [
      {
        slug: 'corporate-events',
        label: 'Corporate Events',
      },
      {
        slug: 'conferences',
        label: 'Conferences',
      },
      {
        slug: 'hybrid-events',
        label: 'Hybrid Events',
      },
      {
        slug: 'trade-shows',
        label: 'Trade Shows',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
      {
        href: 'https://showtechinc.com/events/corporate/',
        label: 'corporate event production',
      },
      {
        href: 'https://showtechinc.com/events/meetings-conferences/',
        label: 'conference and meeting production',
      },
      {
        href: 'https://showtechinc.com/services/led-walls-video-displays/',
        label: 'LED wall and video display systems',
      },
    ],
  },

  'hybrid-event-solutions': {
    title: 'Hybrid Event Solutions in South Florida',
    description:
      'Professional hybrid event solutions for conferences, corporate meetings, livestreams, and virtual audience integration throughout South Florida.',

    intro:
      'Hybrid events need to work seamlessly for both the audience in the room and the people attending remotely. Poor audio, unstable livestreams, disconnected virtual attendees, or presentation delays can quickly reduce engagement and make an event feel disorganized. AV Rentals South Florida provides professional hybrid event solutions designed to help businesses, organizations, and event teams create smoother communication between live and remote audiences throughout South Florida.',

    sections: [
      {
        heading: 'Professional Hybrid Event Production',
        body:
          'Hybrid event production combines traditional live event AV with livestreaming, virtual audience integration, and remote presentation support. Successful hybrid events require clear communication between presenters, onsite attendees, and remote participants while maintaining reliable audio and video quality across every platform. Our hybrid event solutions are designed to help meetings, conferences, educational seminars, and business events feel more connected and professionally managed regardless of where attendees are joining from.',
      },

      {
        heading: 'Livestreaming and Remote Audience Support',
        body:
          'Remote attendees expect a smooth viewing experience with clear sound, stable video, and professional presentation quality. We support hybrid events with livestreaming systems, camera setups, presentation feeds, audio routing, switching systems, and virtual integration workflows designed to improve communication between onsite presenters and online audiences. Hybrid event support may also include remote presenters, virtual panel discussions, audience Q&A, recording services, and post-event playback support.',
      },

      {
        heading: 'Hybrid Conferences and Corporate Meetings',
        body:
          'Many conferences and corporate meetings now include both live and virtual participation. Hybrid event solutions help organizations expand audience reach while allowing remote attendees to participate in presentations, keynote sessions, and live discussions in real time. We support hybrid conferences, executive meetings, training sessions, leadership events, educational programs, nonprofit events, and multi-room business conferences throughout South Florida with scalable AV systems tailored to the size and flow of each event.',
      },

      {
        heading: 'Reliable Audio and Presentation Systems',
        body:
          'Clear communication is one of the most important parts of any hybrid event. Weak audio, unstable presentation feeds, or poor synchronization between onsite and remote audiences can quickly create frustration for attendees and presenters alike. Our hybrid AV systems are designed to prioritize dependable sound reinforcement, presentation visibility, livestream stability, and smoother interaction between speakers and audiences across both physical and virtual environments.',
      },

      {
        heading: 'Hybrid Event Solutions Across South Florida',
        body:
          'AV Rentals South Florida supports hybrid events throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and surrounding South Florida markets. We provide hybrid AV support for conferences, business meetings, educational seminars, livestream presentations, training programs, nonprofit events, and corporate functions hosted in hotels, convention centers, offices, resorts, and private venues throughout the region.',
      },

      {
        heading: 'Dependable Support for Modern Business Events',
        body:
          'Hybrid events involve more moving parts than traditional meetings, which makes preparation and technical coordination especially important. Our goal is to help organizations create a smoother and more professional experience for both onsite and remote attendees while reducing stress during presentations and live broadcasts. AV Rentals South Florida provides scalable hybrid event solutions designed to help businesses communicate more effectively while maintaining a polished event experience from setup through final presentation.',
      },
    ],

    relatedEvents: [
      {
        slug: 'hybrid-events',
        label: 'Hybrid Events',
      },
      {
        slug: 'conferences',
        label: 'Conferences',
      },
      {
        slug: 'corporate-events',
        label: 'Corporate Events',
      },
      {
        slug: 'trade-shows',
        label: 'Trade Shows',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/services/hybrid-virtual-event-solutions/',
        label: 'hybrid and virtual event solutions',
      },
      {
        href: 'https://showtechinc.com/events/in-person-hybrid-solutions/',
        label: 'in-person and hybrid event production',
      },
      {
        href: 'https://showtechinc.com/events/live-streaming/',
        label: 'professional live streaming support',
      },
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
    ],
  },

  'live-streaming': {
    title: 'Live Streaming Services in South Florida',
    description:
      'Professional live streaming services for conferences, corporate events, hybrid meetings, and virtual audiences throughout South Florida.',

    intro:
      'A poor livestream experience can quickly cause remote attendees to disconnect from an event. Weak audio, unstable video, buffering, and unreliable presentation feeds can make even a well-organized production feel unprofessional online. AV Rentals South Florida provides professional live streaming services designed to help conferences, corporate meetings, presentations, and hybrid events reach remote audiences with clearer communication and more reliable broadcast quality throughout South Florida.',

    sections: [
      {
        heading: 'Professional Live Streaming Support',
        body:
          'Live streaming has become an important part of modern business events, conferences, training sessions, and hybrid productions. Organizations frequently need to connect with remote audiences, presenters, clients, and attendees who cannot be physically present at the venue. Our live streaming services are designed to help businesses create smoother online viewing experiences through reliable video capture, clear audio, presentation integration, and professionally managed streaming workflows.',
      },

      {
        heading: 'Streaming for Conferences and Corporate Events',
        body:
          'Conferences and corporate meetings often include keynote presentations, educational sessions, executive discussions, panel conversations, and sponsor content that need to be shared with remote participants in real time. We support livestream events with camera systems, audio capture, presentation feeds, streaming encoders, switching systems, and technical coordination designed around the needs of professional business environments. Whether your event includes a single presentation or a multi-room conference, our systems are scalable for a range of event formats throughout South Florida.',
      },

      {
        heading: 'Hybrid Event and Virtual Audience Integration',
        body:
          'Many live events now include both in-person attendees and virtual audiences joining remotely. Live streaming helps bridge the gap between physical and online participation while expanding the reach of conferences, meetings, training programs, and presentations. We support hybrid workflows with livestream integration, remote presenter support, audience Q&A, recording services, and presentation synchronization designed to create a smoother experience for both onsite and virtual attendees.',
      },

      {
        heading: 'Reliable Audio and Video Quality',
        body:
          'Clear communication is one of the most important parts of any livestream event. Poor audio quality, unstable video feeds, or delayed presentation playback can quickly reduce audience engagement and create frustration for viewers. Our live streaming systems are designed to prioritize dependable audio capture, stable video transmission, smooth presentation integration, and professional broadcast quality while helping presenters communicate more effectively with remote audiences.',
      },

      {
        heading: 'Live Streaming Services Across South Florida',
        body:
          'AV Rentals South Florida provides live streaming support throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and surrounding South Florida markets. We support livestream production for conferences, business meetings, nonprofit events, educational seminars, executive presentations, training programs, product launches, and hybrid events hosted in hotels, convention centers, offices, resorts, and private venues throughout the region.',
      },

      {
        heading: 'Dependable Streaming Support for Professional Events',
        body:
          'Live broadcasts involve multiple technical elements working together simultaneously, which makes preparation and coordination especially important. Our goal is to help organizations create a more polished and reliable streaming experience while reducing stress during live broadcasts, remote presentations, and virtual audience interaction. AV Rentals South Florida provides scalable live streaming services designed to help businesses communicate more effectively while maintaining a professional event experience from start to finish.',
      },
    ],

    relatedEvents: [
      {
        slug: 'hybrid-events',
        label: 'Hybrid Events',
      },
      {
        slug: 'conferences',
        label: 'Conferences',
      },
      {
        slug: 'corporate-events',
        label: 'Corporate Events',
      },
      {
        slug: 'trade-shows',
        label: 'Trade Shows',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/events/live-streaming/',
        label: 'professional live streaming production',
      },
      {
        href: 'https://showtechinc.com/services/hybrid-virtual-event-solutions/',
        label: 'hybrid and virtual event solutions',
      },
      {
        href: 'https://showtechinc.com/events/in-person-hybrid-solutions/',
        label: 'in-person and hybrid event production',
      },
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return {
      title: 'Service Not Found | AV Rentals South Florida',
    };
  }

  return {
    title: `${service.title} | AV Rentals South Florida`,
    description: service.description,
    alternates: {
      canonical: `https://avrentalssouthflorida.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | AV Rentals South Florida`,
      description: service.description,
      url: `https://avrentalssouthflorida.com/services/${slug}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <main className="container section">
        <h1 className="heading-1">Service not found</h1>
      </main>
    );
  }

  return (
    <main className="container section">
      <article style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-xl)' }}>
        <p style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
          South Florida AV Rentals
        </p>

        <h1 className="heading-1" style={{ marginBottom: 'var(--space-md)' }}>
          {service.title}
        </h1>

        <p className="text-lg" style={{ marginBottom: 'var(--space-lg)' }}>
          {service.description}
        </p>

        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            padding: 'var(--space-lg)',
            borderRadius: '12px',
            marginBottom: 'var(--space-xl)',
          }}
        >
          <p style={{ lineHeight: 1.8 }}>{service.intro}</p>
        </div>

        {service.sections.map((section) => (
          <section key={section.heading} style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
              {section.heading}
            </h2>
            <p style={{ lineHeight: 1.8 }}>{section.body}</p>
          </section>
        ))}

        <section style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
            Related Event Types
          </h2>

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {service.relatedEvents.map((event) => (
              <li key={event.slug}>
                <Link
                  href={`/events/${event.slug}`}
                  style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {event.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
            Additional Production Resources
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            For larger programs that require broader production planning, Show Technology provides{' '}
            {service.externalLinks.map((link, index) => (
              <span key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {link.label}
                </a>
                {index < service.externalLinks.length - 2
                  ? ', '
                  : index === service.externalLinks.length - 2
                    ? ', and '
                    : '.'}
              </span>
            ))}
          </p>
        </section>

        <section
          style={{
            backgroundColor: 'var(--bg-surface)',
            padding: 'var(--space-lg)',
            borderRadius: '12px',
          }}
        >
          <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
            Need Professional AV Support?
          </h2>

          <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>
            Tell us about your event, venue, audience size, presentation needs, and timeline. We can help match the
            right AV rental setup to your event goals.
          </p>

          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              color: '#fff',
              backgroundColor: 'var(--accent-blue)',
              padding: '0.85rem 1.2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Request AV Support
          </Link>
        </section>
      </article>
    </main>
  );
}