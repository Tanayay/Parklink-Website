
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes, Link } from "react-router-dom";
import {
  ArrowRight, Bluetooth, Camera, CheckCircle2, ChevronRight, Cpu, DollarSign,
  Gauge, LockKeyhole, MapPinned, Menu, MessageSquare, Navigation, Radar,
  Satellite, ShieldCheck, Sparkles, Timer, WalletCards, X, Zap
} from "lucide-react";
import "./styles.css";

const emailHref =
  "mailto:tanaysadhwani@gmail.com?subject=ParkLink%20Pilot%20Inquiry&body=Hi%20Tanay%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20ParkLink.%0D%0A%0D%0AName%3A%0D%0AOrganization%3A%0D%0AParking%20location%3A%0D%0AMessage%3A%0D%0A";

const sources = [
  { label: "National Safety Council", text: "Parking lots and garages see tens of thousands of crashes every year, with hundreds of deaths and thousands of injuries.", url: "https://www.nsc.org/road/safety-topics/distracted-driving/parking-lot-safety" },
  { label: "LA Metro 2028 Games", text: "LA transportation planning emphasizes transit, bus-only lanes, micromobility, and zero-emission fleet expansion for 2028 mobility.", url: "https://www.metro.net/2028games/" },
  { label: "Reuters on LA 2028", text: "LA officials have discussed a transit-focused 'no-car Games' strategy and thousands of additional buses for the 2028 Olympics.", url: "https://www.reuters.com/sports/olympics/los-angeles-will-urge-public-transit-no-car-2028-olympic-games-2024-08-10/" },
  { label: "Smart Parking Market", text: "Multiple market reports project strong smart parking growth as cities invest in IoT, smart mobility, and parking management.", url: "https://www.grandviewresearch.com/industry-analysis/smart-parking-system-market" },
  { label: "Sensor vs Camera Research Brief", text: "Sensor-based and camera-based parking systems are commonly evaluated on accuracy, cost, maintenance, privacy, and installation infrastructure.", url: "https://eleven-x.com/assets/Uploads/eleven-x-A-Closer-Look-at-Cameras-Vs-Sensors-Tech-Brief.pdf" },
  { label: "On-street Smart Parking Survey", text: "Smart on-street parking implementations vary from small pilots to large city mobility deployments.", url: "https://arxiv.org/abs/2602.06517" }
];

const navItems = [
  ["Home", "/"],
  ["Problem", "/problem"],
  ["Modules", "/modules"],
  ["App", "/app"],
  ["Cost", "/cost"],
  ["Reservations", "/reservations"],
  ["Verification", "/verification"],
  ["Future", "/future"],
  ["Contact", "/contact"],
];

function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="site-shell">
      <AnimatedBackground />
      <header className="nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-orb"><Radar size={20} /></span>
          <span>ParkLink</span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {navItems.map(([name, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {name}
            </NavLink>
          ))}
          <a className="nav-cta" href={emailHref}>Contact</a>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/cost" element={<CostPage />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/future" element={<Future />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <strong>ParkLink</strong>
          <p>Smart parking modules, app guidance, reservations, verification, and operator analytics.</p>
        </div>
        <div className="footer-links">
          <Link to="/modules">Modules</Link>
          <Link to="/app">App</Link>
          <Link to="/contact">Pilot</Link>
        </div>
      </footer>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="grid-glow" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="scanline" />
      <div className="particles">
        {Array.from({ length: 32 }).map((_, i) => <span key={i} style={{ "--i": i }} />)}
      </div>
    </div>
  );
}

function PageHero({ eyebrow, title, body, children }) {
  return (
    <section className="page-hero reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-body">{body}</p>
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero reveal">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Smart parking platform</p>
          <h1>Real-time parking intelligence for campuses, cities, garages, and events.</h1>
          <p className="hero-body">
            ParkLink combines spot-level sensing, Bluetooth communication, app navigation,
            reservations, payments, OTP verification, and operator analytics into one scalable parking system.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/modules">Explore the system <ArrowRight size={18} /></Link>
            <Link className="btn ghost" to="/app">See app flow</Link>
          </div>
          <div className="trust-row">
            <span><CheckCircle2 /> LiDAR-first sensing</span>
            <span><CheckCircle2 /> App-ready</span>
            <span><CheckCircle2 /> Built for pilots</span>
          </div>
        </div>
        <HeroDashboard />
      </section>

      <section className="section reveal">
        <div className="section-head">
          <p className="eyebrow">What ParkLink does</p>
          <h2>Detect, guide, reserve, verify, and manage parking.</h2>
        </div>
        <div className="feature-grid">
          <Feature icon={<Radar />} title="Spot-level detection" text="Each parking spot can report whether it is available, occupied, or pending verification." />
          <Feature icon={<Bluetooth />} title="Bluetooth communication" text="Modules broadcast local parking status, allowing gateways or nearby devices to update the live system." />
          <Feature icon={<Navigation />} title="In-app navigation" text="Drivers can choose a lot, see open spaces, and get routed toward the best available parking area." />
          <Feature icon={<WalletCards />} title="Reservations + payments" text="ParkLink can support paid parking, event parking, campus visitor parking, and premium reserved spaces." />
          <Feature icon={<LockKeyhole />} title="OTP verification" text="A vehicle can be detected first, then approved through an OTP or permit flow before being fully verified." />
          <Feature icon={<Gauge />} title="Operator dashboard" text="Lot owners can view occupancy, revenue, enforcement needs, and long-term demand patterns." />
        </div>
      </section>

      <EvidenceStrip />
    </>
  );
}

function HeroDashboard() {
  return (
    <div className="dashboard-card reveal">
      <div className="dash-top">
        <span className="live-dot" /> Live Lot A
        <span>82% confidence</span>
      </div>
      <div className="parking-map">
        {Array.from({ length: 28 }).map((_, i) => {
          const states = ["open", "taken", "pending"];
          const state = states[(i * 7 + 3) % 3];
          return <span className={`spot ${state}`} key={i}><small>{i+1}</small></span>;
        })}
      </div>
      <div className="dash-metrics">
        <Metric label="Available" value="14" />
        <Metric label="Occupied" value="32" />
        <Metric label="Pending" value="5" />
      </div>
      <div className="route-line">
        <span>Entry</span><div /><span>Best spot: A-14</span>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return <div className="metric"><strong>{value}</strong><span>{label}</span></div>;
}

function Feature({ icon, title, text }) {
  return <article className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </article>;
}

function EvidenceStrip() {
  return (
    <section className="section evidence reveal">
      <div className="section-head">
        <p className="eyebrow">Why it matters</p>
        <h2>Parking is a mobility, safety, and operations problem.</h2>
      </div>
      <div className="stat-grid">
        <StatGraph value={30} label="Up to 30% traffic from parking search in dense cases" />
        <StatGraph value={80} label="Other traffic causes" muted />
        <StatGraph value={20} label="Parking lot/garage crash share often cited" />
      </div>
      <p className="note">
        These numbers should be used carefully: parking-search traffic varies by city and time, but the pattern is real enough that cities and operators are investing in smart parking systems.
      </p>
    </section>
  );
}

function StatGraph({ value, label, muted }) {
  return (
    <div className="stat-card">
      <div className="donut" style={{ "--value": value, "--color": muted ? "rgba(130,165,255,.55)" : "rgba(0,229,255,.9)" }}>
        <span>{value}%</span>
      </div>
      <p>{label}</p>
    </div>
  );
}

function Problem() {
  return (
    <>
      <PageHero
        eyebrow="The problem"
        title="Drivers do not just need parking. They need certainty."
        body="A parking lot can have open spaces and still feel full if drivers cannot see where those spaces are. ParkLink reduces the guesswork by turning each parking spot or zone into live data."
      />
      <section className="section split reveal">
        <div>
          <h2>The hidden cost of circling</h2>
          <p>
            In busy campuses, downtown areas, event venues, and garages, drivers waste time circling because availability is invisible until they physically reach the space. That creates avoidable congestion, frustration, emissions, and late arrivals.
          </p>
          <p>
            ParkLink’s approach is to make parking searchable before the driver starts circling: detect the space, publish the status, route the driver, and verify the session.
          </p>
        </div>
        <div className="glass-panel">
          <h3>Parking pain points</h3>
          <ul className="check-list">
            <li>Drivers cannot see availability in real time.</li>
            <li>Lot owners lack accurate spot-level data.</li>
            <li>Reserved and permit spaces are hard to verify.</li>
            <li>Events create sudden traffic spikes.</li>
            <li>Street sweeping and temporary restrictions are difficult to manage.</li>
          </ul>
        </div>
      </section>

      <section className="section reveal">
        <div className="graph-board">
          <AnimatedBars title="Parking impact model" data={[
            ["Search traffic", 30],
            ["Safety risk", 20],
            ["Operator visibility gap", 65],
            ["Reservation opportunity", 45],
          ]} />
          <div className="callout">
            <h3>ParkLink advantage</h3>
            <p>
              Instead of relying on drivers to find parking manually, ParkLink creates a feedback loop:
              live detection → app guidance → verification → analytics.
            </p>
          </div>
        </div>
      </section>

      <SourcePanel />
    </>
  );
}

function AnimatedBars({ title, data }) {
  return <div className="bars">
    <h3>{title}</h3>
    {data.map(([name, val]) => (
      <div className="bar-row" key={name}>
        <span>{name}</span>
        <div className="bar-track"><div className="bar-fill" style={{ width: `${val}%` }} /></div>
        <strong>{val}%</strong>
      </div>
    ))}
  </div>
}

function Modules() {
  return (
    <>
      <PageHero
        eyebrow="Modules"
        title="A modular system instead of one expensive parking overhaul."
        body="ParkLink can start with a small pilot: a few LiDAR-based modules, a local gateway, and a live app/dashboard. Then it can expand by adding more spots, lots, and enforcement features."
      />

      <section className="section reveal">
        <div className="section-head">
          <h2>Current LiDAR parking module</h2>
          <p>The first ParkLink module focuses on direct vehicle presence detection at the parking-space level.</p>
        </div>
        <div className="module-grid">
          <Feature icon={<Radar />} title="LiDAR / distance sensor" text="Measures distance toward the parking space to determine whether a vehicle is present." />
          <Feature icon={<Cpu />} title="Microcontroller" text="Processes sensor readings and updates the module’s parking status logic." />
          <Feature icon={<Bluetooth />} title="BLE broadcast" text="Shares spot status locally for the app, gateway, or mesh system to collect." />
          <Feature icon={<Zap />} title="Low power design" text="Built to support efficient scanning intervals, battery backup, or solar-assisted future versions." />
        </div>
      </section>

      <section className="section split reveal">
        <div>
          <p className="eyebrow">Why LiDAR-first?</p>
          <h2>LiDAR can be more privacy-friendly and simpler for spot-level detection.</h2>
          <p>
            Cameras are powerful for wide-area monitoring, but they bring added concerns: lighting, occlusion, privacy, image storage, mounting angles, and computer vision complexity. ParkLink’s current module does not need to identify the driver or read a plate to know whether a space is occupied.
          </p>
          <p>
            Compared with basic magnetometer-only sensors, a distance-based approach can be easier to reason about for a single known parking space because it directly measures whether an object is in the expected detection zone.
          </p>
        </div>
        <ComparisonMatrix />
      </section>

      <section className="section reveal">
        <div className="section-head">
          <p className="eyebrow">Additional module concept</p>
          <h2>Camera-based street sweeper / curb module</h2>
          <p>
            For city street sweeping and curbside enforcement, a separate camera-based module can be used where visual context is actually useful. This is different from the current LiDAR parking-spot module.
          </p>
        </div>
        <div className="timeline">
          <TimelineStep title="Restricted-hour detection" text="Identify vehicles parked in zones during street sweeping, loading, or temporary closure windows." />
          <TimelineStep title="Operator alert" text="Notify city staff or property managers about spaces requiring enforcement review." />
          <TimelineStep title="Optional visual proof" text="Use images only when necessary for curbside or street enforcement workflows." />
        </div>
      </section>
    </>
  );
}

function ComparisonMatrix() {
  const rows = [
    ["Privacy", "Strong: no image needed", "Weaker: captures visual scene", "Strong: no image"],
    ["Lighting", "Works without visible light", "Needs lighting/IR/computer vision tuning", "Usually not light-dependent"],
    ["Use case", "Spot-level presence", "Street/curb context + enforcement", "Basic vehicle presence"],
    ["Complexity", "Moderate", "High", "Low-moderate"],
    ["Risk", "Mounting angle + calibration", "Privacy, occlusion, camera maintenance", "False readings from metal/electrical interference"],
  ];
  return <div className="matrix">
    <div className="matrix-head"><span>Factor</span><span>LiDAR</span><span>Camera</span><span>Magnetic/Other</span></div>
    {rows.map(r => <div className="matrix-row" key={r[0]}>{r.map(c => <span key={c}>{c}</span>)}</div>)}
  </div>
}

function TimelineStep({ title, text }) {
  return <div className="timeline-step"><span /><div><h3>{title}</h3><p>{text}</p></div></div>
}

function AppPage() {
  return (
    <>
      <PageHero
        eyebrow="App + Bluetooth system"
        title="The app turns parking sensors into a usable driver experience."
        body="The module detects the space. Bluetooth shares the local status. A gateway or connected device updates the cloud. The app shows live availability, routes the driver, handles reservations, and verifies parking sessions."
      />

      <section className="section reveal">
        <AppFlow />
      </section>

      <section className="section split reveal">
        <div>
          <h2>How the Bluetooth architecture works</h2>
          <p>
            Each ParkLink module can broadcast a simple status packet: spot ID, availability state, confidence, battery/health, and timestamp. A nearby gateway, app device, or mesh relay collects this data and forwards it to the ParkLink backend.
          </p>
          <p>
            In a campus or parking structure, this avoids needing every single module to connect directly to Wi-Fi. Bluetooth handles local spot communication, while a smaller number of gateways can handle internet connectivity.
          </p>
        </div>
        <div className="signal-card">
          <div className="phone-mock">
            <span className="phone-top" />
            <h3>ParkLink</h3>
            <p className="status-pill">Spot B-12 Available</p>
            <div className="mini-map">
              <span className="pin start" />
              <span className="pin end" />
              <div className="route" />
            </div>
            <button>Navigate</button>
          </div>
          <div className="rings"><span /><span /><span /></div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-head">
          <h2>Driver app functions</h2>
        </div>
        <div className="feature-grid">
          <Feature icon={<MapPinned />} title="Live map" text="Color-coded availability by lot, floor, row, or specific spot." />
          <Feature icon={<Navigation />} title="Navigation" text="Route to a parking lot or assigned space, then optionally help users find their car later." />
          <Feature icon={<Timer />} title="Session tracking" text="Track reservation start/end, grace periods, overtime, and check-out." />
          <Feature icon={<WalletCards />} title="In-app payment" text="Support hourly, daily, event, visitor, or premium reserved parking." />
          <Feature icon={<ShieldCheck />} title="Permit mode" text="Match an approved user, pass, or OTP with a physically detected vehicle." />
          <Feature icon={<MessageSquare />} title="Alerts" text="Notify users about expiring reservations, pending verification, or spot changes." />
        </div>
      </section>
    </>
  );
}

function AppFlow() {
  const [step, setStep] = useState(0);
  const steps = [
    ["Detect", "LiDAR checks whether a car is physically occupying the parking space."],
    ["Broadcast", "The module sends a Bluetooth status packet with spot ID and availability."],
    ["Sync", "A phone, gateway, or mesh relay forwards the update to the backend."],
    ["Display", "The app shows the space as available, occupied, or pending verification."],
    ["Navigate", "The driver chooses a lot/space and receives directions."],
    ["Verify", "OTP, permit, or payment confirms the parking session."]
  ];
  return (
    <div className="flow-sim">
      <div>
        <p className="eyebrow">Interactive flow</p>
        <h2>{steps[step][0]}</h2>
        <p>{steps[step][1]}</p>
        <div className="flow-controls">
          {steps.map((s, i) => <button className={i===step ? "active" : ""} onClick={() => setStep(i)} key={s[0]}>{i+1}</button>)}
        </div>
      </div>
      <div className={`flow-visual step-${step}`}>
        <div className="node car">Car</div>
        <div className="node module">Module</div>
        <div className="node gateway">Gateway</div>
        <div className="node cloud">Cloud</div>
        <div className="node app">App</div>
        <div className="pulse-line one" />
        <div className="pulse-line two" />
        <div className="pulse-line three" />
      </div>
    </div>
  );
}

function CostPage() {
  return (
    <>
      <PageHero
        eyebrow="Cost analysis"
        title="A pilot can start small, then scale module-by-module."
        body="These are planning estimates for prototype and early pilot conversations. Final pricing depends on sensor choice, enclosure, PCB design, power system, installation, and volume."
      />
      <section className="section reveal">
        <CostCalculator />
      </section>
      <section className="section reveal">
        <div className="section-head">
          <h2>Estimated module cost breakdown</h2>
          <p>Prototype ranges are intentionally conservative. Bulk manufacturing can reduce costs after custom PCB and enclosure design.</p>
        </div>
        <CostTable />
      </section>
    </>
  );
}

function CostCalculator() {
  const [modules, setModules] = useState(50);
  const [cost, setCost] = useState(42);
  const [gateway, setGateway] = useState(3);
  const total = modules * cost + gateway * 85 + 750;
  return (
    <div className="calculator">
      <div>
        <p className="eyebrow">Pilot estimator</p>
        <h2>${total.toLocaleString()}</h2>
        <p>Estimated hardware + gateway + pilot setup budget</p>
        <small>Use this as a pitch estimate, not a final quote.</small>
      </div>
      <label>Number of spot modules <strong>{modules}</strong>
        <input type="range" min="4" max="300" value={modules} onChange={e=>setModules(Number(e.target.value))} />
      </label>
      <label>Estimated module cost <strong>${cost}</strong>
        <input type="range" min="25" max="95" value={cost} onChange={e=>setCost(Number(e.target.value))} />
      </label>
      <label>Gateways <strong>{gateway}</strong>
        <input type="range" min="1" max="15" value={gateway} onChange={e=>setGateway(Number(e.target.value))} />
      </label>
    </div>
  );
}

function CostTable() {
  const rows = [
    ["Distance sensor / LiDAR-class sensor", "$12–$30", "Detects whether a vehicle is present in the target zone."],
    ["BLE microcontroller", "$6–$18", "Processes data and broadcasts spot status."],
    ["Power components", "$3–$12", "Regulation, battery backup, charging, or solar-ready support."],
    ["PCB / wiring / connectors", "$4–$12", "Moves prototype wiring toward a manufacturable board."],
    ["Enclosure + mounting", "$5–$20", "Weather-resistant housing and installation bracket."],
    ["Gateway share", "$2–$10 per spot", "Shared Wi-Fi/cellular bridge for local BLE data."],
    ["Software + cloud", "variable", "App, dashboard, database, alerts, and analytics."],
  ];
  return <div className="table-card">
    {rows.map(([part, range, note]) => (
      <div className="table-row" key={part}><strong>{part}</strong><span>{range}</span><p>{note}</p></div>
    ))}
  </div>
}

function Reservations() {
  return (
    <>
      <PageHero
        eyebrow="Reservations + payments"
        title="ParkLink can turn parking into a managed digital product."
        body="Beyond showing open spaces, ParkLink can support reservations, paid parking, premium spots, permit upgrades, event passes, and subscription tiers."
      />
      <section className="section reveal">
        <div className="pricing-grid">
          <Plan name="Free" price="$0" features={["General lot availability", "Basic navigation", "Public parking status"]} />
          <Plan name="ParkLink Plus" price="$4.99/mo" features={["Advance reservations", "Find-my-car", "Preferred lot recommendations", "Parking history"]} highlighted />
          <Plan name="Campus / Operator" price="Custom" features={["Permit integration", "Live dashboard", "Enforcement review", "Analytics + reports"]} />
        </div>
      </section>
      <section className="section split reveal">
        <div>
          <h2>Payment model ideas</h2>
          <p>
            ParkLink can support pay-per-use and recurring revenue. A campus could use it for visitor parking and permit verification. A city could use it for street zones. A venue could use it for event reservations.
          </p>
        </div>
        <div className="glass-panel">
          <ul className="check-list">
            <li>Hourly and daily parking</li>
            <li>Reserved event parking</li>
            <li>Premium close-space reservations</li>
            <li>Monthly campus or employee passes</li>
            <li>Operator analytics subscription</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function Plan({ name, price, features, highlighted }) {
  return <div className={highlighted ? "plan highlighted" : "plan"}>
    <h3>{name}</h3><strong>{price}</strong>
    <ul>{features.map(f => <li key={f}><CheckCircle2 size={16} /> {f}</li>)}</ul>
  </div>
}

function Verification() {
  return (
    <>
      <PageHero
        eyebrow="OTP verification"
        title="Detect the vehicle first. Approve the parking session second."
        body="OTP verification lets ParkLink separate physical occupancy from authorization. A spot can be occupied but not approved until the user confirms through the app."
      />
      <section className="section reveal">
        <OtpDemo />
      </section>
      <section className="section split reveal">
        <div>
          <h2>Why OTP matters</h2>
          <p>
            For permit lots, reserved spaces, and guest parking, just knowing a car is present is not enough. ParkLink can mark a space as occupied/pending, then require OTP, passkey, permit, payment, or operator approval before labeling it verified.
          </p>
        </div>
        <div className="glass-panel">
          <h3>Verification states</h3>
          <ul className="status-list">
            <li><span className="dot open" /> Available</li>
            <li><span className="dot pending" /> Occupied / pending approval</li>
            <li><span className="dot taken" /> Occupied / approved</li>
            <li><span className="dot alert" /> Occupied / violation review</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function OtpDemo() {
  const [state, setState] = useState("available");
  return <div className="otp-demo">
    <div>
      <p className="eyebrow">Live status demo</p>
      <h2>{state === "available" ? "Available" : state === "pending" ? "Occupied / Pending Approval" : "Approved Parking Session"}</h2>
      <p>
        {state === "available" && "A car has not been detected yet."}
        {state === "pending" && "A vehicle was detected, but the user still needs OTP or permit approval."}
        {state === "approved" && "The OTP was confirmed and the session is now approved."}
      </p>
      <div className="hero-actions">
        <button className="btn ghost" onClick={()=>setState("available")}>Reset</button>
        <button className="btn ghost" onClick={()=>setState("pending")}>Detect car</button>
        <button className="btn primary" onClick={()=>setState("approved")}>Confirm OTP</button>
      </div>
    </div>
    <div className={`big-spot ${state}`}>
      <span>{state === "available" ? "OPEN" : state === "pending" ? "PENDING" : "APPROVED"}</span>
    </div>
  </div>
}

function Future() {
  return (
    <>
      <PageHero
        eyebrow="Future roadmap"
        title="From parking detection to parking intelligence."
        body="ParkLink can grow into a full mobility layer: predictions, enforcement, event logistics, EV charging, reservations, street sweeping, and analytics."
      />
      <section className="section reveal">
        <div className="roadmap">
          <TimelineStep title="Phase 1: Working pilot" text="3–10 modules, app display, Bluetooth status updates, and a basic operator dashboard." />
          <TimelineStep title="Phase 2: Reservation + verification" text="Add user accounts, reservations, payments, OTP approval, permit support, and notification logic." />
          <TimelineStep title="Phase 3: City/campus deployment" text="Expand modules, add gateways, analytics, enforcement review, and street sweeper camera modules." />
          <TimelineStep title="Phase 4: AI optimization" text="Predict demand, suggest pricing, rebalance reservations, and recommend traffic routing around lots." />
        </div>
      </section>
      <section className="section reveal">
        <div className="feature-grid">
          <Feature icon={<Satellite />} title="Mesh + gateways" text="Reduce Wi-Fi dependence by using BLE locally and gateways for cloud sync." />
          <Feature icon={<Camera />} title="Street sweeper camera module" text="Use visual context where it makes sense: curb zones, sweeping windows, and enforcement review." />
          <Feature icon={<Gauge />} title="AI prediction" text="Predict which lots fill first based on class schedules, events, time of day, and historical occupancy." />
          <Feature icon={<Zap />} title="EV-ready" text="Show charger availability, idle time, reserved charging, and verified charging sessions." />
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a ParkLink pilot."
        body="Use the button below to open a pre-filled email. This is the fastest reliable contact setup and does not require a backend."
      />
      <section className="section contact-card reveal">
        <div>
          <h2>ParkLink Pilot Inquiry</h2>
          <p>Best for campuses, parking structures, event lots, city curbside zones, and private operators.</p>
          <a className="btn primary" href={emailHref}>Email ParkLink <ArrowRight size={18} /></a>
          <a className="btn ghost" href="mailto:tanaysadhwani@gmail.com">Direct email fallback</a>
        </div>
        <div className="glass-panel">
          <h3>Include this in your message</h3>
          <ul className="check-list">
            <li>Organization or campus name</li>
            <li>Parking location type</li>
            <li>Number of spaces for pilot</li>
            <li>Reservation, enforcement, or analytics needs</li>
            <li>Timeline for testing</li>
          </ul>
        </div>
      </section>
      <SourcePanel />
    </>
  );
}

function SourcePanel() {
  return <section className="section sources reveal">
    <div className="section-head">
      <p className="eyebrow">Research notes</p>
      <h2>Sources used to support the business case</h2>
    </div>
    <div className="source-grid">
      {sources.map(s => <a key={s.label} className="source-card" href={s.url} target="_blank" rel="noreferrer">
        <strong>{s.label}</strong>
        <p>{s.text}</p>
        <span>Open source <ChevronRight size={15} /></span>
      </a>)}
    </div>
  </section>
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
