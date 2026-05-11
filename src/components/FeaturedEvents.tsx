import styles from './FeaturedEvents.module.css';

const events = [
  {
    title: "Corporate Conferences",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hotel Events",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "General Sessions",
    image: "https://images.unsplash.com/photo-1475721025505-117565e3a89e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Product Launches",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Nonprofit Galas",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Trade Shows",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop"
  }
];

export default function FeaturedEvents() {
  return (
    <section className={`section ${styles.featuredEvents}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-2">Event Types We Support</h2>
          <p className="text-lg">Specialized AV solutions tailored to your specific format.</p>
        </div>
        
        <div className={styles.grid}>
          {events.map((event, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.imageBackground}
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
