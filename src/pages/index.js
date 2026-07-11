import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const cards = [
  {
    title: 'Is your plant struggling?',
    text: 'Recognize practical signs of increasing solids loading—even when the exact design limit is hard to find.',
    to: '/guide/plants-struggle',
  },
  {
    title: 'How does FECR work?',
    text: 'See how microscreening, dewatering, drying and pyrolysis connect as one modular treatment train.',
    to: '/guide/process-overview',
  },
  {
    title: 'Can it be phased?',
    text: 'Start with a microscreen retrofit and add drying or pyrolysis later as needs and funding evolve.',
    to: '/guide/implementation',
  },
  {
    title: 'Can we test it first?',
    text: 'Use the transparent model and trailer-mounted unit to demonstrate and measure performance at a real plant.',
    to: '/guide/demonstrations',
  },
];

const stages = [
  ['1', 'Microscreen', 'Relieve downstream solids loading'],
  ['2', 'Solids management', 'Use or dispose of a drier cake'],
  ['3', 'Heat-pump drying', 'Create stable, transportable material'],
  ['4', 'Pyrolysis', 'Destroy organics and produce biochar'],
];

export default function Home() {
  const flowImage = useBaseUrl('/img/fecr-flow.svg');
  const trailerImage = useBaseUrl('/img/demo-trailer.jpg');

  return (
    <Layout
      title="Front End Carbon Recovery"
      description="A practical, modular strategy for recovering carbon-rich solids near the beginning of wastewater treatment."
    >
      <main>
        <section className={styles.heroBand}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>FECR Knowledge Base · Version 1.0</div>
              <Heading as="h1" className={styles.heroTitle}>
                Recover solids early.<br />Simplify treatment.<br />Create value.
              </Heading>
              <p className={styles.heroLead}>
                Front End Carbon Recovery is a practical, modular strategy for removing carbon-rich solids near the beginning of a wastewater treatment plant—before they burden downstream processes or become difficult-to-dewater biological sludge.
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/guide/why-fecr">
                  Why FECR?
                </Link>
                <Link className="button button--secondary button--lg" to="/guide/process-overview">
                  See the process
                </Link>
              </div>
            </div>
            <div className={styles.heroGraphic}>
              <img src={flowImage} alt="Front End Carbon Recovery process flow" />
            </div>
          </div>
        </section>

        <section className={styles.problemBand}>
          <div className={styles.wideInner}>
            <div className={styles.problemLabel}>The near-term opportunity</div>
            <Heading as="h2">A practical retrofit for existing wastewater treatment plants</Heading>
            <p>
              Many plants approach hydraulic and solids-related constraints together. The exact solids limit may be difficult to locate or quantify, but operators often see the symptoms. FECR gives utilities a way to reduce the load on the entire plant without committing to a complete replacement project.
            </p>
          </div>
        </section>

        <section className={styles.cardsSection}>
          <div className={styles.wideInner}>
            <div className={styles.sectionHeading}>
              <div>
                <div className={styles.eyebrow}>Choose your entry point</div>
                <Heading as="h2">Start with the question you need answered</Heading>
              </div>
              <Link to="/guide/why-fecr">Take the guided tour →</Link>
            </div>
            <div className={styles.cardGrid}>
              {cards.map((card) => (
                <Link className={styles.homeCard} to={card.to} key={card.title}>
                  <Heading as="h3">{card.title}</Heading>
                  <p>{card.text}</p>
                  <span>Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.stagesSection}>
          <div className={styles.wideInner}>
            <div className={styles.stageIntro}>
              <div className={styles.eyebrow}>No all-or-nothing commitment</div>
              <Heading as="h2">Implement FECR in stages</Heading>
              <p>Each stage can solve a current problem while preserving a clear path to the next step.</p>
            </div>
            <div className={styles.stageGrid}>
              {stages.map(([number, title, text]) => (
                <div className={styles.stageCard} key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              ))}
            </div>
            <Link className={styles.inlineLink} to="/guide/implementation">
              View the implementation roadmap →
            </Link>
          </div>
        </section>

        <section className={styles.demoSection}>
          <div className={styles.demoInner}>
            <img src={trailerImage} alt="Portable microscreen demonstration trailer" />
            <div>
              <div className={styles.eyebrow}>Demonstrate before committing</div>
              <Heading as="h2">Test the concept at the plant</Heading>
              <p>
                The portable unit can evaluate more than one possible installation point, measure solids capture and cake dryness, and provide plant-specific evidence before a permanent project is designed.
              </p>
              <Link to="/guide/demonstrations">Explore the demonstration program →</Link>
            </div>
          </div>
        </section>

        <section className={styles.quoteBand}>
          <blockquote>“The best sludge is the sludge you never create.”</blockquote>
          <p>
            Recovering solids before biological treatment reduces the amount of back-end sludge that must later be thickened, dewatered, hauled and disposed of.
          </p>
        </section>
      </main>
    </Layout>
  );
}
