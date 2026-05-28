import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bluetooth, Camera, CheckCircle2, CreditCard, LockKeyhole, MapPinned, Menu, Radar, Rocket, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';
import './styles.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Problem', path: '/problem' },
  { label: 'Modules', path: '/modules' },
  { label: 'App', path: '/app' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Verification', path: '/verification' },
  { label: 'Future', path: '/future' },
  { label: 'Contact', path: '/contact' },
];

const moduleCards = [
  { icon: Radar, title: 'Current Spot Module', text: 'A spot-level detection module designed to identify whether a parking space is available, occupied, or pending approval.' },
  { icon: Bluetooth, title: 'Bluetooth Communication', text: 'Modules broadcast status through Bluetooth so nearby gateways or devices can update the ParkLink system.' },
  { icon: Camera, title: 'Street Sweeper Module', text: 'A future camera-based module for street sweeping zones, curb monitoring, and city enforcement workflows.' },
];

const appFlow = [
  'Module detects space status',
  'Bluetooth broadcasts parking data',
  'Gateway or app receives the signal',
  'ParkLink updates the live map',
  'Driver selects a spot or reservation',
  'App navigates the driver to the location',
];

const futureItems = [
  'AI parking predictions',
  'Bluetooth mesh expansion',
  'Street sweeping enforcement',
  'Campus permit automation',
  'EV charging visibility',
  'Operator analytics dashboard',
  'Find-my-car support',
  'Event parking management',
];

function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function usePath() {
  const [path, setPath] = React.useState(window.location.pathname);
  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  const path = usePath();
  const go = (to) => { navigate(to); setOpen(false); };

  return (
    <header className="nav-shell">
      <button className="brand" onClick={() => go('/')} aria-label="Go home">
        <span className="brand-orb">P</span>
        <span><strong>ParkLink</strong><small>Smart Parking Platform</small></span>
      </button>
      <nav className="desktop-nav">
        {navItems.map(item => (
          <button key={item.path} onClick={() => go(item.path)} className={path === item.path ? 'active' : ''}>{item.label}</button>
        ))}
      </nav>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Open navigation">{open ? <X/> : <Menu/>}</button>
      {open && <div className="mobile-nav">{navItems.map(item => <button key={item.path} onClick={() => go(item.path)}>{item.label}</button>)}</div>}
    </header>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <main className="page-shell fade-in">
      <section className="page-hero compact">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </section>
      {children}
    </main>
  );
}

function Home() {
  return (
    <main className="fade-in">
      <section className="hero">
        <div className="glow one" />
        <div className="glow two" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16}/> Smart parking for campuses, cities, garages, and events</p>
          <h1>Real-time parking intelligence, from the spot to the app.</h1>
          <p className="hero-text">ParkLink combines modular parking sensors, Bluetooth communication, app navigation, reservations, payments, and OTP verification to make parking easier for drivers and more manageable for operators.</p>
          <div className="button-row">
            <button className="primary" onClick={() => navigate('/modules')}>Explore Modules <ArrowRight size={18}/></button>
            <button className="secondary" onClick={() => navigate('/app')}>How the App Works</button>
          </div>
        </div>
        <div className="dashboard-card float-card">
          <div className="dash-top"><span></span><span></span><span></span></div>
          <div className="map-grid">
            {Array.from({length: 18}).map((_, i) => <div key={i} className={i % 5 === 0 ? 'spot occupied' : i % 4 === 0 ? 'spot pending' : 'spot available'} />)}
          </div>
          <div className="status-stack">
            <div><b>Available</b><span>42 spaces</span></div>
            <div><b>Pending</b><span>6 approvals</span></div>
            <div><b>Occupied</b><span>73 spaces</span></div>
          </div>
        </div>
      </section>
      <section className="quick-grid">
        {moduleCards.map(({icon: Icon, title, text}) => <button key={title} className="info-card" onClick={() => navigate(title.includes('Street') ? '/modules' : '/modules')}><Icon/><h3>{title}</h3><p>{text}</p></button>)}
      </section>
    </main>
  );
}

function Problem() {
  return (
    <PageShell eyebrow="The Problem" title="Parking congestion is a traffic, safety, and operations problem.">
      <section className="content-grid two">
        <div className="glass-panel">
          <h2>Why ParkLink matters</h2>
          <p>Drivers waste time circling for spaces, operators lack real-time visibility, and busy parking areas become harder to manage during peak demand.</p>
          <p>ParkLink gives drivers live availability and gives operators a system for detection, verification, reservations, payment, and enforcement support.</p>
        </div>
        <div className="stat-panel">
          <div><strong>Up to 30%</strong><span>urban traffic can be tied to drivers searching for parking in congested areas.</span></div>
          <div><strong>50,000+</strong><span>parking lot and garage crashes occur annually in the U.S., according to safety reports.</span></div>
          <div><strong>2028</strong><span>LA mobility needs make smarter parking and traffic reduction especially relevant.</span></div>
        </div>
      </section>
    </PageShell>
  );
}

function Modules() {
  return (
    <PageShell eyebrow="Modules" title="A modular hardware system built for different parking environments.">
      <section className="module-layout">
        <article className="feature-block">
          <Radar/><h2>Current ParkLink Module</h2>
          <p>The current module is designed for spot-level parking detection. A distance sensor checks whether a vehicle is present, then a Bluetooth-enabled controller broadcasts the space status.</p>
          <ul><li>Spot-level availability detection</li><li>Bluetooth status updates</li><li>Garage, campus, and lot deployment</li><li>Expandable to gateway/cloud communication</li></ul>
        </article>
        <article className="feature-block accent">
          <Camera/><h2>Camera-Based Street Sweeper Module</h2>
          <p>This proposed module supports curbside monitoring, street sweeping restrictions, and city enforcement. It is meant for areas where visual context is needed instead of only presence detection.</p>
          <ul><li>Street sweeping zone support</li><li>Restricted-hour monitoring</li><li>City enforcement dashboard integration</li><li>Optional image-based verification workflow</li></ul>
        </article>
      </section>
    </PageShell>
  );
}

function AppPage() {
  return (
    <PageShell eyebrow="App + Bluetooth" title="The app turns parking modules into a live driver experience.">
      <section className="timeline">
        {appFlow.map((step, i) => <div className="timeline-item" key={step}><span>{i+1}</span><p>{step}</p></div>)}
      </section>
      <section className="glass-panel wide">
        <h2>App features</h2>
        <div className="tag-cloud"><span>Live map</span><span>Open spot navigation</span><span>Find my car</span><span>Bluetooth updates</span><span>Gateway support</span><span>Admin dashboard</span></div>
      </section>
    </PageShell>
  );
}

function Reservations() {
  return (
    <PageShell eyebrow="Reservations + Payments" title="Reserve, pay, and manage parking from one platform.">
      <section className="pricing-grid">
        <div className="price-card"><CreditCard/><h2>Driver Payments</h2><p>Support hourly, daily, visitor, event, or premium reserved parking through the app.</p></div>
        <div className="price-card"><MapPinned/><h2>Reservations</h2><p>Drivers can choose a parking area, reserve a space, and receive directions before arrival.</p></div>
        <div className="price-card"><Zap/><h2>Subscriptions</h2><p>ParkLink can support monthly campus passes, premium parking, priority zones, and operator dashboards.</p></div>
      </section>
    </PageShell>
  );
}

function Verification() {
  return (
    <PageShell eyebrow="OTP + Permit Verification" title="Confirm that the right user is approved for the right spot.">
      <section className="verification-flow">
        {['Vehicle detected', 'Spot marked occupied / pending', 'User receives or requests OTP', 'OTP confirmed in app', 'Parking session approved'].map((step, i) => <div key={step}><LockKeyhole/><strong>{String(i+1).padStart(2,'0')}</strong><p>{step}</p></div>)}
      </section>
      <section className="glass-panel wide"><h2>Why this matters</h2><p>OTP verification can support reserved spaces, guest parking, permits, and enforcement workflows without depending only on license plate cameras.</p></section>
    </PageShell>
  );
}

function Future() {
  return (
    <PageShell eyebrow="Future Implementations" title="ParkLink can grow from detection into a full parking intelligence network.">
      <section className="future-grid">
        {futureItems.map(item => <div key={item}><CheckCircle2/><span>{item}</span></div>)}
      </section>
      <section className="glass-panel wide"><Rocket/><h2>Built to expand</h2><p>The platform can expand into AI predictions, curb management, EV charging visibility, enforcement support, event parking, and real-time analytics for operators.</p></section>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Start a ParkLink pilot.">
      <section className="contact-card">
        <ShieldCheck size={42}/>
        <h2>Interested in testing ParkLink?</h2>
        <p>Reach out for campus, garage, city, or event pilot opportunities.</p>
        <a className="primary email-button" href="mailto:tanaysadhwani@gmail.com?subject=ParkLink Pilot Inquiry&body=Hi Tanay,%0D%0A%0D%0AI am interested in learning more about ParkLink.%0D%0A%0D%0AName:%0D%0AOrganization:%0D%0AParking location:%0D%0AMessage:%0D%0A">Email ParkLink</a>
      </section>
    </PageShell>
  );
}

function App() {
  const path = usePath();
  const pages = {'/': <Home/>, '/problem': <Problem/>, '/modules': <Modules/>, '/app': <AppPage/>, '/reservations': <Reservations/>, '/verification': <Verification/>, '/future': <Future/>, '/contact': <Contact/>};
  return <><Nav/>{pages[path] || <Home/>}<footer><b>ParkLink</b><span>Smart parking modules, app navigation, verification, and operator tools.</span></footer></>;
}

createRoot(document.getElementById('root')).render(<App />);
