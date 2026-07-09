import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Front End Carbon Recovery" description="A practical, modular strategy for front-end solids recovery, drying, and pyrolysis in wastewater treatment plants.">
      <header className="hero hero--fecr">
        <div className="container">
          <div className="row">
            <div className="col col--7">
              <h1 className="hero__title">Front End Carbon Recovery</h1>
              <p className="hero__subtitle">Recover solids early. Simplify treatment. Create value.</p>
              <p>
                FECR is a practical, modular strategy for improving wastewater treatment plant performance by recovering carbon-rich solids near the headworks, before they burden downstream biological and solids-handling processes.
              </p>
              <Link className="button button--secondary button--lg" to="/docs/why-fecr/why-plants-become-solids-constrained">Why FECR?</Link>
              <Link className="button button--outline button--secondary button--lg" to="/docs/process/overview">See the process</Link>
            </div>
            <div className="col col--5">
              <img className="heroImage" src="/Front-End-Carbon-Recovery/img/microscreen-portable-photo-1.jpg" alt="Portable microscreen demonstration trailer" />
            </div>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <section>
          <h2>A website first. A knowledge base underneath.</h2>
          <p>
            This site is designed to make a complicated wastewater process easy to understand. Visitors can begin with the big picture, then follow links into engineering detail, demonstrations, and technical references as needed.
          </p>
          <div className="cards">
            <Link className="cardLink" to="/docs/why-fecr/why-plants-become-solids-constrained">
              <h3>Why plants become constrained</h3>
              <p>Understand why solids loading increasingly stresses existing WWTPs.</p>
            </Link>
            <Link className="cardLink" to="/docs/process/overview">
              <h3>The FECR process</h3>
              <p>Follow the treatment train from microscreening through drying and pyrolysis.</p>
            </Link>
            <Link className="cardLink" to="/docs/implementation/staged-roadmap">
              <h3>Staged implementation</h3>
              <p>Start with the stage that solves today's problem and add modules later.</p>
            </Link>
            <Link className="cardLink" to="/docs/demonstrations/demo-program">
              <h3>Demonstrations</h3>
              <p>Use models and trailer-mounted testing to show how the process performs.</p>
            </Link>
          </div>
        </section>
        <section className="callout">
          <h2>The FECR philosophy</h2>
          <p><strong>The best sludge is the sludge you never create.</strong></p>
          <p>Every pound of solids removed at the front of the plant is a pound that does not have to be aerated, converted into biological sludge, digested, dewatered, hauled, or disposed of later.</p>
        </section>
      </main>
    </Layout>
  );
}
