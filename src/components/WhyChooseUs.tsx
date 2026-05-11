import styles from './WhyChooseUs.module.css';

const benefits = [
  {
    title: "Experienced AV Technicians",
    description: "Our dedicated engineers ensure flawless execution from load-in to strike."
  },
  {
    title: "Enterprise-Grade Equipment",
    description: "We invest in the latest technology from industry-leading brands."
  },
  {
    title: "Redundancy & Reliability",
    description: "Built-in backup systems guarantee your event runs without interruption."
  },
  {
    title: "Scalable Event Support",
    description: "Whether a small meeting or a massive gala, we scale our team and gear to your needs."
  },
  {
    title: "Fast Setup & Strike",
    description: "Efficient workflows respect your venue time limits and reduce overhead costs."
  },
  {
    title: "Professional Execution",
    description: "Clean cable management, polite crew, and a commitment to perfection."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={`section ${styles.whyChooseUs}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="heading-2">Why Choose Us</h2>
          <p className="text-lg">The premium standard for event production in South Florida.</p>
        </div>
        
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
