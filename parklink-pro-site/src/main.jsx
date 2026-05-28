import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bluetooth,
  Car,
  Camera,
  CreditCard,
  Gauge,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TrafficCone,
  Wifi,
  Zap,
  CheckCircle2,
  LockKeyhole,
  RadioTower,
  CalendarClock,
  BarChart3,
  Building2,
  Smartphone,
  Route,
  Clock,
  Satellite,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['problem', 'Problem'],
  ['modules', 'Modules'],
  ['app', 'App'],
  ['reservations', 'Reservations'],
  ['verification', 'Verification'],
  ['future', 'Future'],
  ['contact', 'Pilot'],
];

const stats = [
  { value: 'Up to 30%', label: 'urban traffic can be linked to drivers searching for parking in dense areas' },
  { value: 'Tens of thousands', label: 'of crashes happen in parking lots and parking structures every year' },
  { value: '2028', label: 'LA is preparing for a transit-focused Olympic Games, raising the value of smarter mobility tools' },
];

const currentModule = [
  { icon: Gauge, title: 'Spot-level detection', body: 'A distance sensor monitors whether a vehicle is present in a space.' },
  { icon: Bluetooth, title: 'Bluetooth broadcast', body: 'The module broadcasts availability status to nearby receivers or gateways.' },
  { icon: Wifi, title: 'Gateway-ready', body: 'BLE data can be relayed to a web dashboard or app through Wi-Fi-enabled gateway hardware.' },
  { icon: Zap, title: 'Low-cost rollout', body: 'A modular design lets operators start with a pilot and scale lot-by-lot.' },
];

const cameraModule = [
  { icon: Camera, title: 'Street sweeping support', body: 'Camera-based monitoring can help cities identify vehicles parked in restricted sweeping zones.' },
  { icon: TrafficCone, title: 'Curbside intelligence', body: 'Designed for time-limited zones, temporary restrictions, loading areas, and enforcement workflows.' },
  { icon: ShieldCheck, title: 'Evidence layer', body: 'Optional image-based verification can help staff review violations or parking events.' },
  { icon: Building2, title: 'City dashboard', body: 'Municipal users can view zones, status, alerts, and enforcement history from one place.' },
];

const appFlow = [
  ['1', 'Detect', 'Module senses whether a space is open, occupied, or pending approval.'],
  ['2', 'Broadcast', 'Bluetooth sends the spot status to a gateway or nearby device.'],
  ['3', 'Sync', 'The system updates the live ParkLink dashboard and app.'],
  ['4', 'Navigate', 'Drivers select a space and receive guidance to the best available option.'],
  ['5', 'Verify', 'Reservations, permits, OTPs, or payments confirm that the session is approved.'],
];

const appFeatures = [
  { icon: MapPinned, title: 'Live parking map', body: 'See available, occupied, reserved, and pending spaces in real time.' },
  { icon: Route, title: 'Navigation', body: 'Guide drivers toward a selected lot, level, zone, or exact spot depending on deployment.' },
  { icon: Smartphone, title: 'Find my car', body: 'Use saved parking-session data to help users return to their vehicle.' },
  { icon: RadioTower, title: 'BLE + gateway system', body: 'Spot modules communicate locally, then gateways push the data online.' },
];

const tiers = [
  {
    name: 'Free',
    price: 'Basic access',
    items: ['General lot availability', 'Basic parking directions', 'Public spot status'],
  },
  {
    name: 'ParkLink Plus',
    price: 'Driver upgrade',
    items: ['Reserve parking in advance', 'Find-my-car tools', 'Priority spot suggestions', 'Parking history'],
    featured: true,
  },
  {
    name: 'Operator Dashboard',
    price: 'Campus / city / property',
    items: ['Live occupancy analytics', 'Permit and OTP review', 'Payment reporting', 'Street sweeping alerts'],
  },
];

const future = [
  'AI parking predictions',
  'Bluetooth mesh networking',
  'EV charging availability',
  'Campus permit automation',
  'Event parking operations',
  'Street sweeping enforcement',
  'Solar/battery modules',
  'Operator analytics dashboard',
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [activeModule, setActiveModule] = useState('current');
  const moduleCards = useMemo(() => (activeModule === 'current' ? currentModule : cameraModule), [activeModule]);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav glass">
        <button className="brand" onClick={() => scrollTo('home')}>
          <span className="brand-mark"><Car size={18} /></span>
          <span>ParkLink</span>
        </button>
        <div className="nav-links">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Start Pilot</button>
      </nav>

      <section id="home" className="hero section-shell">
        <div className="hero-copy reveal">
          <div className="eyebrow"><Sparkles size={16} /> Smart parking for campuses, cities, and events</div>
          <h1>Real-time parking detection, navigation, reservations, and verification.</h1>
          <p>
            ParkLink turns ordinary parking spaces into connected smart spots. Drivers find parking faster,
            operators see live occupancy, and organizations gain tools for payments, permits, reservations, and enforcement.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo('modules')}>Explore modules <ArrowRight size={18} /></button>
            <button className="secondary" onClick={() => scrollTo('app')}>How the app works</button>
          </div>
        </div>

        <div className="dashboard-card glass reveal delay-1">
          <div className="dash-top">
            <div>
              <span className="muted">Live Lot View</span>
              <h3>CPP Structure A</h3>
            </div>
            <span className="live-dot">LIVE</span>
          </div>
          <div className="parking-grid">
            {Array.from({ length: 36 }).map((_, i) => {
              const status = [2, 5, 8, 13, 19, 27, 31].includes(i) ? 'occupied' : [7, 21, 32].includes(i) ? 'pending' : 'open';
              return <span key={i} className={`spot ${status}`} />;
            })}
          </div>
          <div className="dash-metrics">
            <div><strong>26</strong><span>Open</span></div>
            <div><strong>7</strong><span>Occupied</span></div>
            <div><strong>3</strong><span>Pending OTP</span></div>
          </div>
          <div className="route-line"><MapPinned size={16} /> Fastest available spot: Level 2, B14</div>
        </div>
      </section>

      <section id="problem" className="section-shell problem-section">
        <div className="section-heading reveal">
          <div className="eyebrow">The problem</div>
          <h2>Parking wastes time before the trip even starts.</h2>
          <p>
            In busy areas, parking uncertainty creates circling, congestion, emissions, safety issues, and frustrated visitors.
            ParkLink attacks the problem with live space-level data instead of guesswork.
          </p>
        </div>
        <div className="stat-grid">
          {stats.map((stat, index) => (
            <div className="stat-card glass reveal" style={{ animationDelay: `${index * 120}ms` }} key={stat.value}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="modules" className="section-shell modules-section">
        <div className="section-heading reveal">
          <div className="eyebrow">Clickable module pages</div>
          <h2>Two module paths: current hardware and future street enforcement.</h2>
          <p>
            The professional version separates the product you are building now from the future camera-based version,
            so pilots understand what exists today and what can come next.
          </p>
        </div>

        <div className="module-tabs glass reveal">
          <button className={activeModule === 'current' ? 'active' : ''} onClick={() => setActiveModule('current')}>Current Parking Module</button>
          <button className={activeModule === 'camera' ? 'active' : ''} onClick={() => setActiveModule('camera')}>Camera Street Sweeper Module</button>
        </div>

        <div className="module-layout">
          <div className="module-visual glass reveal">
            <div className="module-core">
              {activeModule === 'current' ? <Bluetooth size={58} /> : <Camera size={58} />}
              <span>{activeModule === 'current' ? 'BLE + Sensor' : 'Camera + Curb AI'}</span>
            </div>
            <div className="pulse-ring ring-a" />
            <div className="pulse-ring ring-b" />
            <div className="pulse-ring ring-c" />
          </div>
          <div className="feature-grid">
            {moduleCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="feature-card glass reveal" style={{ animationDelay: `${index * 100}ms` }} key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="app" className="section-shell app-section">
        <div className="section-heading reveal">
          <div className="eyebrow">App + Bluetooth system</div>
          <h2>From a single parking spot to a live map in the app.</h2>
          <p>
            ParkLink’s app experience is built around Bluetooth spot data, gateway syncing, live navigation,
            reservations, payments, subscriptions, and verification tools.
          </p>
        </div>
        <div className="flow glass reveal">
          {appFlow.map(([num, title, text]) => (
            <div className="flow-step" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="feature-grid four">
          {appFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div className="feature-card glass reveal" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="reservations" className="section-shell pay-section">
        <div className="section-heading reveal">
          <div className="eyebrow">Reservations, payments, subscriptions</div>
          <h2>ParkLink can generate value for drivers and operators.</h2>
          <p>
            Drivers can reserve a spot, pay in the app, and receive directions. Operators can manage visitor parking,
            event parking, reserved zones, premium spots, and permit upgrades from one dashboard.
          </p>
        </div>
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div className={`tier-card glass reveal ${tier.featured ? 'featured' : ''}`} key={tier.name}>
              <div className="tier-top">
                <h3>{tier.name}</h3>
                <span>{tier.price}</span>
              </div>
              {tier.items.map((item) => <p key={item}><CheckCircle2 size={17} /> {item}</p>)}
            </div>
          ))}
        </div>
        <div className="payment-strip glass reveal">
          <CreditCard size={22} /> Hourly parking • Daily parking • Event parking • Reserved spaces • Premium zones • Permit upgrades
        </div>
      </section>

      <section id="verification" className="section-shell verification-section">
        <div className="verification-card glass reveal">
          <div>
            <div className="eyebrow">OTP + permit verification</div>
            <h2>Occupied does not always mean approved.</h2>
            <p>
              When a vehicle is detected, the space can appear as occupied but pending approval. The user confirms the
              parking session through an OTP, permit, reservation, or payment. Once confirmed, the session becomes approved.
            </p>
            <div className="verification-flow">
              <span>Car parks</span><ArrowRight size={16}/><span>Module detects</span><ArrowRight size={16}/><span>Pending approval</span><ArrowRight size={16}/><span>OTP verified</span><ArrowRight size={16}/><span>Approved</span>
            </div>
          </div>
          <div className="phone glass">
            <div className="phone-bar" />
            <LockKeyhole size={28} />
            <h3>Verify Parking</h3>
            <p>Spot B14 is occupied. Enter OTP to approve session.</p>
            <div className="otp-boxes"><span>8</span><span>4</span><span>2</span><span>9</span></div>
            <button>Confirm Session</button>
          </div>
        </div>
      </section>

      <section id="future" className="section-shell future-section">
        <div className="section-heading reveal">
          <div className="eyebrow">Future implementations</div>
          <h2>Built to become a full parking intelligence platform.</h2>
          <p>
            ParkLink can start with a small hardware pilot, then expand into AI predictions, street parking,
            enforcement tools, event operations, and operator analytics.
          </p>
        </div>
        <div className="future-grid">
          {future.map((item, index) => (
            <div className="future-pill glass reveal" style={{ animationDelay: `${index * 80}ms` }} key={item}>
              {index % 3 === 0 ? <Satellite size={18}/> : index % 3 === 1 ? <CalendarClock size={18}/> : <BarChart3 size={18}/>} {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div className="contact-card glass reveal">
          <div>
            <div className="eyebrow">Pilot program</div>
            <h2>Ready for campus, city, event, and garage pilots.</h2>
            <p>
              ParkLink can be presented as a phased pilot: start with a few monitored spaces, connect them to a live dashboard,
              test user navigation, then expand into reservations, OTP verification, and operator tools.
            </p>
          </div>
          <a className="primary link-button" href="mailto:tanaysadhwani@gmail.com?subject=ParkLink%20Pilot%20Inquiry">Contact ParkLink <ArrowRight size={18}/></a>
        </div>
      </section>

      <footer>
        <span>ParkLink</span>
        <span>Smart parking hardware • app • operator dashboard</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
