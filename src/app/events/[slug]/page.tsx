import { Metadata } from 'next';
import Link from 'next/link';

const showTechLinks = {
  audioVisualProduction: 'https://showtechinc.com/services/audio-visual-production/',
  meetingsConferences: 'https://showtechinc.com/events/meetings-conferences/',
  hybridSolutions: 'https://showtechinc.com/services/hybrid-virtual-event-solutions/',
  ledWalls: 'https://showtechinc.com/services/led-walls-video-displays/',
  staging: 'https://showtechinc.com/services/event-staging-set-design/',
};

const eventsData = {
  'conferences': {
    title: 'Conference AV Production in South Florida',
    description:
      'Professional conference AV production for keynote sessions, breakout rooms, hybrid conferences, and corporate meetings throughout South Florida.',

    intro:
      'A conference can lose momentum fast when the audio cuts out, presentations fail, or attendees cannot clearly see or hear what is happening on stage. AV Rentals South Florida helps conference organizers avoid those problems with dependable audio visual support designed for smooth, professional event execution. From executive meetings and association conferences to multi-room business events and hotel general sessions, we provide scalable AV support throughout Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Hollywood, and surrounding South Florida markets.',

    sections: [
      {
        heading: 'Conference AV That Keeps Your Event Running Smoothly',
        body:
          'Conferences move quickly, and there is very little room for technical mistakes. Presentations need to start on time, speakers need to sound clear, and every attendee should be able to see the content comfortably from anywhere in the room. Our conference AV services are built around reliability, clear communication, and professional execution so your team can stay focused on the event instead of troubleshooting equipment problems.',
      },

      {
        heading: 'Support for General Sessions and Breakout Rooms',
        body:
          'Whether your event includes a single ballroom or multiple breakout spaces, we help create a seamless experience for both presenters and attendees. We support keynote sessions, educational seminars, panel discussions, sponsor presentations, leadership conferences, and corporate meetings with professional sound systems, wireless microphones, presentation displays, staging, lighting, and video support tailored to the size and flow of the event.',
      },

      {
        heading: 'Professional Displays and LED Wall Solutions',
        body:
          'Large conferences often require more than a basic projector setup. Bright, high-visibility displays help keep attendees engaged and improve visibility in large ballrooms and convention spaces. Depending on the venue and audience size, we provide projection systems, confidence monitors, large-format displays, and LED wall solutions that create a polished and modern presentation environment. For larger productions requiring expanded visual support, additional resources are available through our partners providing full-service audio visual production and LED wall systems.',
      },

      {
        heading: 'Hybrid Conference and Livestream Support',
        body:
          'Many conferences now include remote attendees, virtual presenters, or livestream components. We help bridge the gap between in-person and online audiences with hybrid event support designed to keep communication clear and presentations running smoothly. Hybrid conference support can include livestreaming, camera systems, presentation feeds, remote presenter integration, and recording services for post-event distribution.',
      },

      {
        heading: 'Conference AV Support Across South Florida',
        body:
          'We support conferences throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and nearby South Florida markets. Our systems are scalable for hotel conferences, business meetings, educational events, nonprofit conferences, association gatherings, and multi-day corporate programs. Whether your event is hosted in a ballroom, convention center, resort, or private venue, we help create a professional and organized AV experience from setup through final presentation.',
      },

      {
        heading: 'Reliable AV Support for Corporate Conferences',
        body:
          'A successful conference depends on more than equipment alone. It depends on preparation, responsiveness, and a team that understands how live events operate under pressure. AV Rentals South Florida focuses on delivering dependable conference AV support that helps presentations run smoothly, keeps attendees engaged, and creates a polished experience for your speakers, sponsors, and guests.',
      },
    ],

    relatedServices: [
      {
        slug: 'corporate-av-rental',
        label: 'Corporate AV Rental',
      },
      {
        slug: 'hybrid-event-solutions',
        label: 'Hybrid Event Solutions',
      },
      {
        slug: 'led-wall-rental',
        label: 'LED Wall Rental',
      },
      {
        slug: 'live-streaming',
        label: 'Live Streaming',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/events/meetings-conferences/',
        label: 'meetings and conference production',
      },
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
      {
        href: 'https://showtechinc.com/services/hybrid-virtual-event-solutions/',
        label: 'hybrid and virtual event solutions',
      },
      {
        href: 'https://showtechinc.com/services/led-walls-video-displays/',
        label: 'LED wall and video display systems',
      },
    ],
  },

  'trade-shows': {
    title: 'Trade Show AV Services in South Florida',
    description:
      'Professional trade show AV services including LED walls, display systems, audio support, staging, and booth presentation technology throughout South Florida.',

    intro:
      'Trade shows are highly competitive environments where exhibitors only have a few seconds to capture attention. Poor visibility, weak audio, or outdated displays can cause attendees to walk past without engaging. AV Rentals South Florida helps exhibitors, sponsors, and event organizers create cleaner, more professional trade show environments with scalable AV support designed to improve visibility, presentation quality, and attendee engagement throughout South Florida.',

    sections: [
      {
        heading: 'Professional AV Support for Trade Show Booths and Exhibits',
        body:
          'Trade show floors are crowded, fast-moving, and visually competitive. Your booth needs to stand out immediately while still maintaining a polished and professional appearance. We provide trade show AV solutions that help businesses create stronger visual impact through LED displays, presentation monitors, branded content playback, sound systems, staging, lighting, and presentation support tailored to exhibit spaces, conference halls, and convention centers.',
      },

      {
        heading: 'LED Wall Rentals for Trade Shows',
        body:
          'Large-format displays and LED walls are one of the most effective ways to attract attention on a busy trade show floor. Bright, high-resolution displays help exhibitors showcase presentations, videos, product demonstrations, sponsor content, and branded visuals while remaining visible from across the venue. Depending on the booth layout and event size, LED wall systems can be configured for compact exhibits, large convention spaces, presentation stages, or interactive brand activations.',
      },

      {
        heading: 'Audio Visual Solutions That Improve Engagement',
        body:
          'Successful trade show booths create opportunities for conversation and interaction. Clear audio, reliable presentation systems, and organized visual content help keep attendees engaged while improving communication with potential clients, sponsors, and partners. Our trade show AV services support presentations, product launches, panel discussions, live demonstrations, sponsor activations, and branded experiences designed to create stronger audience engagement throughout the event.',
      },

      {
        heading: 'AV Support for Convention Centers and Corporate Exhibits',
        body:
          'Trade shows often involve strict setup schedules, venue regulations, and logistical coordination between exhibitors, organizers, and venue staff. AV Rentals South Florida supports trade shows and convention events throughout Miami, Fort Lauderdale, West Palm Beach, Boca Raton, Hollywood, and surrounding South Florida markets. Whether your event takes place in a hotel ballroom, convention center, resort, or exhibit hall, we help streamline the AV process so your team can focus on presentations, networking, and attendee interaction.',
      },

      {
        heading: 'Scalable AV Services for Exhibitors and Event Organizers',
        body:
          'Every trade show has different technical requirements depending on audience size, booth layout, presentation goals, and venue configuration. Our inventory supports a wide range of exhibit environments including sponsor booths, presentation stages, educational sessions, product launch events, networking spaces, and multi-room convention programs. For larger productions requiring expanded technical coordination or integrated event production support, additional resources are available through our partners providing full-service audio visual production and event staging solutions.',
      },

      {
        heading: 'Reliable Trade Show AV Support Across South Florida',
        body:
          'Trade shows move quickly, and technical problems can immediately affect attendee engagement and brand perception. Our goal is to help exhibitors create a cleaner, more professional presentation environment while reducing stress during setup, live presentations, and event operation. AV Rentals South Florida provides dependable trade show AV support designed to help businesses present confidently while maintaining a polished experience throughout the event.',
      },
    ],

    relatedServices: [
      {
        slug: 'led-wall-rental',
        label: 'LED Wall Rental',
      },
      {
        slug: 'corporate-av-rental',
        label: 'Corporate AV Rental',
      },
      {
        slug: 'stage-lighting-rental',
        label: 'Stage Lighting Rental',
      },
      {
        slug: 'live-streaming',
        label: 'Live Streaming',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/events/conventions-trade-shows/',
        label: 'conventions and trade show production',
      },
      {
        href: 'https://showtechinc.com/services/led-walls-video-displays/',
        label: 'LED wall and video display systems',
      },
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
      {
        href: 'https://showtechinc.com/services/event-staging-set-design/',
        label: 'event staging and scenic support',
      },
    ],
  },

  'corporate-events': {
    title: 'Corporate Event Production in South Florida',
    description:
      'Professional corporate event AV production for meetings, presentations, company events, executive sessions, and branded experiences throughout South Florida.',

    intro:
      'Corporate events reflect directly on your company, your brand, and your professionalism. Technical problems, weak audio, poor presentation visibility, or disorganized execution can quickly affect the experience for attendees, clients, executives, and stakeholders. AV Rentals South Florida provides professional corporate event AV support designed to help meetings, presentations, and business events run smoothly while creating a polished and organized environment throughout South Florida.',

    sections: [
      {
        heading: 'Professional AV Support for Corporate Events',
        body:
          'Corporate events often involve tight schedules, executive presentations, branded content, and high expectations from attendees. Our corporate AV services are designed to help businesses create a cleaner and more professional presentation environment with dependable audio systems, presentation displays, microphones, staging, lighting, and technical support tailored to the needs of each event. Whether you are planning a company meeting, leadership conference, awards ceremony, networking event, or executive presentation, we help create an experience that feels organized, polished, and reliable.',
      },

      {
        heading: 'Corporate Meetings, General Sessions, and Presentations',
        body:
          'Business presentations need to feel clear, professional, and easy for attendees to follow. We support corporate meetings and general sessions with presentation systems designed to improve visibility, communication, and audience engagement throughout the event. Typical corporate AV setups may include wireless microphones, presentation displays, LED walls, projection systems, confidence monitors, stage lighting, sound systems, and video playback support configured around the size and flow of the venue.',
      },

      {
        heading: 'AV Solutions for Executive and Client-Facing Events',
        body:
          'Corporate events frequently serve as opportunities to present ideas, strengthen business relationships, and reinforce brand credibility. Clean visuals, clear sound, and reliable technical execution help create a more confident experience for both presenters and attendees. From executive meetings and investor presentations to company celebrations and client-facing events, our AV solutions are designed to support professional communication while minimizing distractions caused by technical problems or inconsistent presentation quality.',
      },

      {
        heading: 'LED Displays and Visual Presentation Systems',
        body:
          'Strong visual presentation systems help keep attendees engaged while improving visibility throughout conference rooms, ballrooms, and event venues. Depending on the event size and presentation goals, we provide projection systems, presentation displays, confidence monitors, and LED wall solutions capable of supporting keynote presentations, branded visuals, sponsor content, multimedia playback, and stage environments. For larger productions requiring expanded display systems or integrated technical coordination, additional resources are available through our partners providing full-service audio visual production and LED wall systems.',
      },

      {
        heading: 'Corporate Event AV Support Across South Florida',
        body:
          'AV Rentals South Florida supports corporate events throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and surrounding South Florida markets. We provide AV support for hotel meetings, conferences, training sessions, corporate galas, networking events, educational programs, nonprofit functions, and executive presentations hosted in hotels, convention centers, resorts, offices, and private venues throughout the region.',
      },

      {
        heading: 'Reliable Event Execution for Business Events',
        body:
          'Corporate events operate on strict timelines, and technical issues can quickly interrupt presentations and attendee engagement. Our focus is on helping events run smoothly through dependable equipment, organized setup, and responsive technical support throughout the event. AV Rentals South Florida provides scalable corporate AV support designed to help businesses create a more polished event experience while reducing stress for presenters, organizers, and production teams.',
      },
    ],

    relatedServices: [
      {
        slug: 'corporate-av-rental',
        label: 'Corporate AV Rental',
      },
      {
        slug: 'led-wall-rental',
        label: 'LED Wall Rental',
      },
      {
        slug: 'hybrid-event-solutions',
        label: 'Hybrid Event Solutions',
      },
      {
        slug: 'live-streaming',
        label: 'Live Streaming',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/events/corporate/',
        label: 'corporate event production',
      },
      {
        href: 'https://showtechinc.com/services/audio-visual-production/',
        label: 'full-service audio visual production',
      },
      {
        href: 'https://showtechinc.com/services/led-walls-video-displays/',
        label: 'LED wall and video display systems',
      },
      {
        href: 'https://showtechinc.com/services/hybrid-virtual-event-solutions/',
        label: 'hybrid and virtual event solutions',
      },
    ],
  },

  'hybrid-events': {
    title: 'Hybrid Event Production in South Florida',
    description:
      'Professional hybrid event production for conferences, corporate meetings, livestreams, and virtual audience integration throughout South Florida.',

    intro:
      'Hybrid events create a unique challenge because the experience needs to work equally well for both in-person attendees and remote participants. Poor audio, unstable livestreams, disconnected virtual audiences, or weak presentation quality can quickly reduce engagement and make an event feel unorganized. AV Rentals South Florida provides professional hybrid event production designed to help businesses, organizations, and event teams create smoother communication between live and remote audiences throughout South Florida.',

    sections: [
      {
        heading: 'Professional Hybrid Event AV Support',
        body:
          'Hybrid event production combines traditional live event AV with livestreaming, remote presentation support, and virtual audience integration. Successful hybrid events require clear communication between presenters, onsite attendees, and online participants while maintaining consistent audio and visual quality across every platform. Our hybrid event solutions are designed to help meetings, conferences, and business events feel more connected and professionally managed regardless of where attendees are joining from.',
      },

      {
        heading: 'Livestreaming and Virtual Audience Integration',
        body:
          'Remote attendees expect a reliable viewing experience with clear sound, stable video, and smooth presentation transitions. We support hybrid events with livestreaming systems, camera setups, presentation feeds, audio capture, switching systems, and virtual integration workflows designed to improve communication between onsite presenters and online audiences. Hybrid event support may also include remote presenters, recorded playback, virtual panel discussions, audience Q&A, and post-event recording services for future distribution.',
      },

      {
        heading: 'Hybrid Conference and Corporate Meeting Support',
        body:
          'Many corporate meetings, educational seminars, leadership conferences, and association events now include both live and remote participation. Hybrid production allows organizations to expand audience reach while giving remote attendees access to presentations, speakers, and event content in real time. We support hybrid conferences, business meetings, training sessions, executive presentations, nonprofit events, and multi-room programs throughout South Florida with scalable AV systems tailored to the event size and venue layout.',
      },

      {
        heading: 'Reliable Audio and Presentation Systems',
        body:
          'Clear communication is one of the most important parts of any hybrid event. Weak audio or unstable presentation feeds can quickly disconnect virtual participants and create frustration for presenters and attendees. Our hybrid event setups are designed to prioritize reliable sound reinforcement, presentation visibility, and stable streaming performance while helping presenters feel more confident during live broadcasts and virtual interactions.',
      },

      {
        heading: 'Hybrid Event Production Across South Florida',
        body:
          'AV Rentals South Florida supports hybrid events throughout Miami, Fort Lauderdale, Boca Raton, Hollywood, West Palm Beach, Miami Beach, and surrounding South Florida markets. We provide hybrid AV support for hotel conferences, corporate meetings, educational seminars, livestream presentations, nonprofit events, training sessions, and business programs hosted in hotels, offices, resorts, convention centers, and private venues throughout the region.',
      },

      {
        heading: 'Dependable Hybrid Event Execution',
        body:
          'Hybrid events involve more moving parts than traditional live events, which makes preparation and technical coordination especially important. Our goal is to help event organizers create a smoother and more professional experience for both onsite and remote audiences while reducing stress during presentations, livestreams, and live event operation. AV Rentals South Florida provides dependable hybrid event support designed to help organizations communicate more effectively while maintaining a polished event experience from start to finish.',
      },
    ],

    relatedServices: [
      {
        slug: 'hybrid-event-solutions',
        label: 'Hybrid Event Solutions',
      },
      {
        slug: 'live-streaming',
        label: 'Live Streaming',
      },
      {
        slug: 'corporate-av-rental',
        label: 'Corporate AV Rental',
      },
      {
        slug: 'led-wall-rental',
        label: 'LED Wall Rental',
      },
    ],

    externalLinks: [
      {
        href: 'https://showtechinc.com/events/in-person-hybrid-solutions/',
        label: 'in-person and hybrid event solutions',
      },
      {
        href: 'https://showtechinc.com/services/hybrid-virtual-event-solutions/',
        label: 'hybrid and virtual event solutions',
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
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData[slug as keyof typeof eventsData];

  if (!event) {
    return {
      title: 'Event Not Found | AV Rentals South Florida',
    };
  }

  return {
    title: `${event.title} | AV Rentals South Florida`,
    description: event.description,
    alternates: {
      canonical: `https://avrentalssouthflorida.com/events/${slug}`,
    },
    openGraph: {
      title: `${event.title} | AV Rentals South Florida`,
      description: event.description,
      url: `https://avrentalssouthflorida.com/events/${slug}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(eventsData).map((slug) => ({
    slug,
  }));
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = eventsData[slug as keyof typeof eventsData];

  if (!event) {
    return (
      <main className="container section">
        <h1 className="heading-1">Event not found</h1>
      </main>
    );
  }

  return (
    <main className="container section">
      <article style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-xl)' }}>
        <p style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
          South Florida Event AV
        </p>

        <h1 className="heading-1" style={{ marginBottom: 'var(--space-md)' }}>
          {event.title}
        </h1>

        <p className="text-lg" style={{ marginBottom: 'var(--space-lg)' }}>
          {event.description}
        </p>

        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            padding: 'var(--space-lg)',
            borderRadius: '12px',
            marginBottom: 'var(--space-xl)',
          }}
        >
          <p style={{ lineHeight: 1.8 }}>{event.intro}</p>
        </div>

        {event.sections.map((section) => (
          <section key={section.heading} style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
              {section.heading}
            </h2>
            <p style={{ lineHeight: 1.8 }}>{section.body}</p>
          </section>
        ))}

        <section style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
            Recommended AV Services
          </h2>

          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
            {event.relatedServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 className="heading-3" style={{ marginBottom: 'var(--space-sm)' }}>
            Full-Service Production Resources
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            For larger programs that require broader production planning, Show Technology provides{' '}
            {event.externalLinks.map((link, index) => (
              <span key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-blue)', textDecoration: 'underline', textUnderlineOffset: '4px' }}
                >
                  {link.label}
                </a>
                {index < event.externalLinks.length - 2
                  ? ', '
                  : index === event.externalLinks.length - 2
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
            Need AV Support for an Upcoming Event?
          </h2>

          <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-md)' }}>
            Tell us about your venue, room count, expected attendance, presentation needs, and whether your event
            includes livestreaming or hybrid participation.
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