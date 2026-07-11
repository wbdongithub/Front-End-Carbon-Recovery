import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const cards = [
  ['Why FECR?', 'Understand the solids-loading problem and why early recovery can relieve an existing plant.', '/guide/why-fecr'],
  ['How It Works', 'Follow the process from raw wastewater through microscreening, dewatering, drying, and pyrolysis.', '/guide/process-overview'],
  ['Implement in Stages', 'Start with the microscreen and add drying or pyrolysis later as needs and funding evolve.', '/guide/staged-implementation'],
  ['See the Demonstrations', 'Explore the transparent teaching model and the trailer-mounted field demonstration unit.', '/guide/demonstration-program'],
  ['Is My Plant a Candidate?', 'Use practical operating symptoms when the exact solids design limit is hard to find.', '/guide/candidate-checklist'],
  ['Technical Library', 'Move from a concise explanation into papers, reports, specifications, and supporting evidence.', '/guide/technical-library']
];

function Home() {
  return <Layout title="Front End Carbon Recovery" description="A practical, staged strategy for relieving solids loading in wastewater treatment plants.">
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.kicker}>FECR Knowledge Base · Version 0.1</div>
        <Heading as="h1" className={styles.title}>Front End Carbon Recovery</Heading>
        <p className={styles.subtitle}>Recover solids early. Simplify treatment. Create value.</p>
        <p className={styles.lede}>A practical, modular strategy for existing wastewater treatment plants that are approaching hydraulic and solids-processing constraints.</p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/guide/why-fecr">Start with the problem</Link>
          <Link className="button button--secondary button--lg" to="/guide/process-overview">See the full process</Link>
        </div>
      </div>
    </header>

    <main>
      <section className={styles.problemBand}>
        <div className="container">
          <Heading as="h2">Many plants feel the symptoms before they can name the limit.</Heading>
          <p>Solids capacity is often buried in the original design basis and spread across clarifiers, aeration, digestion, dewatering, and hauling. Operators may still see rising sludge inventories, stressed clarifiers, higher polymer use, difficult dewatering, or growing biosolids costs.</p>
        </div>
      </section>

      <section className={styles.flowSection}>
        <div className="container">
          <div className={styles.split}>
            <div>
              <div className={styles.eyebrow}>The FECR idea</div>
              <Heading as="h2">Remove a large fraction of incoming solids before they burden the rest of the plant.</Heading>
              <p>A microscreen, also called a rotating belt filter (RBF), captures fibrous and other suspended solids just downstream of the grit chamber. An integral screw press can produce a much drier material than conventional back-end sludge.</p>
              <Link to="/guide/process-overview">Follow the process →</Link>
            </div>
            <img className={styles.flowImage} src={require('@site/static/img/fecr-flow.png').default} alt="Microscreen, drying and pyrolysis process flow" />
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className="container">
          <Heading as="h2">Choose the question you need answered</Heading>
          <div className={styles.cards}>
            {cards.map(([title,text,to]) => <Link key={title} className={styles.card} to={to}>
              <Heading as="h3">{title}</Heading><p>{text}</p><span>Explore →</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className={styles.stageSection}>
        <div className="container">
          <div className={styles.eyebrow}>No all-or-nothing commitment</div>
          <Heading as="h2">FECR can be installed in stages.</Heading>
          <div className={styles.stages}>
            {['1 · Microscreen','2 · Solids management','3 · Heat-pump drying','4 · Pyrolysis'].map((s,i)=><div className={styles.stage} key={s}><strong>{s}</strong><small>{['Relieve the plant now','Use or dispose of drier solids','Create stable Class A material','Destroy organics and produce biochar'][i]}</small></div>)}
          </div>
          <Link className="button button--primary" to="/guide/staged-implementation">View the implementation roadmap</Link>
        </div>
      </section>
    </main>
  </Layout>
}
export default Home;
