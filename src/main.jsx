import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bluetooth, Car, Cpu, Gauge, LockKeyhole, MapPinned, Radar, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import './styles.css';

const features = [
  {
    icon: <Radar />,
    title: 'Real-Time Spot Detection',
    text: 'Each ParkLink module uses sensor data to detect whether a parking space is open, occupied, or pending verification.'
  },
  {
    icon: <Bluetooth />,
    title: 'Bluetooth Mesh Coverage',
    text: 'Modules can relay data across a parking lot so the system keeps updating even across large structures.'
  },
  {
    icon: <MapPinned />,
    title: 'Navigate to Open Spots',
    text: 'Drivers can see available spaces faster instead of circling around and wasting time.'
  },
  {
    icon: <ShieldCheck />,
    title: 'Permit + Security Layer',
    text: 'ParkLink can support approved access, verification states, and enforcement-friendly workflows.'
  }
];

const stats = [
  ['10–15 sec', 'refresh cycle'],
  ['BLE + LiDAR', 'module stack'],
  ['Campus ready', 'pilot direction'],
  ['Lower cost', 'modular rollout']
];

function App() {
  return (
    <main>
      <div className="noise" />
      <div className="aurora auroraOne" />
      <div className="aurora auroraTwo" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="ParkLink home">
          <span className="brandMark">P</span>
          <span>ParkLink</span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#pilot">Pilot</a>
        </div>
        <a className="navCta" href="mailto:tanaysadhwani@gmail.com">Contact</a>
      </nav>

      <section id="top" className="hero section">
        <div className="heroCopy revealUp">
          <div className="eyebrow"><Sparkles size={16} /> Smart parking infrastructure for modern lots</div>
          <h1>Find open parking before you even enter the lot.</h1>
          <p>
            ParkLink turns ordinary parking spaces into connected, real-time smart spots using compact modules,
            wireless communication, and a driver-friendly app experience.
          </p>
          <div className="heroButtons">
            <a className="primaryBtn" href="#pilot">Start a Pilot <ArrowRight size={18} /></a>
            <a className="ghostBtn" href="#dashboard">View System</a>
          </div>
          <div className="miniStats">
            {stats.map(([number, label]) => (
              <div key={label} className="miniStat">
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="heroVisual revealFloat" aria-label="Animated ParkLink dashboard mockup">
          <div className="orbital orbitalOne" />
          <div className="orbital orbitalTwo" />
          <div className="phoneFrame">
            <div className="phoneTop" />
            <div className="appHeader">
              <div>
                <span className="tiny">ParkLink Live</span>
                <h3>Lot A Status</h3>
              </div>
              <span className="livePill">LIVE</span>
            </div>
            <div className="mapGrid">
              {Array.from({ length: 18 }).map((_, i) => (
                <div className={`spot ${[1,4,9,13].includes(i) ? 'open' : [6,11,16].includes(i) ? 'pending' : 'taken'}`} key={i}>
                  <Car size={20} />
                </div>
              ))}
            </div>
            <div className="routeCard">
              <div className="routePulse" />
              <div>
                <strong>Nearest open spot</strong>
                <span>Space A-14 · 42 ft away</span>
              </div>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section featuresSection">
        <div className="sectionHead revealUp">
          <span className="eyebrow"><Zap size={16} /> Built for pilots</span>
          <h2>Small modules. Big parking intelligence.</h2>
          <p>Use this section later for real photos, module renders, and app screenshots.</p>
        </div>
        <div className="featureGrid">
          {features.map((feature, index) => (
            <article className="featureCard revealUp" style={{ '--delay': `${index * 100}ms` }} key={feature.title}>
              <div className="featureIcon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="dashboard" className="section dashboardSection">
        <div className="dashboardShell revealUp">
          <div className="dashSidebar">
            <div className="logoRow"><span className="brandMark small">P</span> Control</div>
            <a className="active">Overview</a>
            <a>Enforcement</a>
            <a>Analytics</a>
            <a>Modules</a>
          </div>
          <div className="dashMain">
            <div className="dashTop">
              <div>
                <span className="tiny">PILOT DASHBOARD</span>
                <h2>Live occupancy control center</h2>
              </div>
              <button>Export Report</button>
            </div>
            <div className="dashCards">
              <div className="dashCard"><Gauge /><strong>83%</strong><span>Lot utilization</span></div>
              <div className="dashCard"><Cpu /><strong>24</strong><span>Modules online</span></div>
              <div className="dashCard"><LockKeyhole /><strong>7</strong><span>Pending approvals</span></div>
            </div>
            <div className="activityPanel">
              <div className="activityLine"><span className="dot open" /> Space A-14 marked available</div>
              <div className="activityLine"><span className="dot pending" /> Space B-02 awaiting verification</div>
              <div className="activityLine"><span className="dot taken" /> Space C-11 occupied</div>
              <div className="activityLine"><span className="dot open" /> Driver routed to nearest open space</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="section pilotSection revealUp">
        <div className="pilotGlow" />
        <h2>Ready for a campus or city pilot.</h2>
        <p>
          ParkLink can help universities, event venues, and cities test real-time parking visibility without replacing
          their entire infrastructure.
        </p>
        <div className="pilotActions">
          <a className="primaryBtn" href="mailto:tanaysadhwani@gmail.com?subject=ParkLink Pilot Inquiry">Request Pilot Info</a>
          <a className="ghostBtn" href="#top">Back to Top</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
