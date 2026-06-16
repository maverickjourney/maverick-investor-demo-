
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  Brain,
  CheckCircle2,
  CircleDollarSign,
  Dumbbell,
  HeartPulse,
  LineChart,
  MessageSquareWarning,
  ShieldCheck,
  Sparkles,
  Users,
  Watch,
  Zap
} from "lucide-react";
import "./styles.css";

const tiers = [
  {
    name: "Essential",
    price: 149,
    clients: "Up to 5 clients",
    subtitle: "For early coaches proving their premium system.",
    features: [
      "Client + trainer dashboard",
      "Daily check-ins",
      "Progress photos",
      "AI weekly summaries",
      "Slack alert channel",
      "Basic usage monitoring"
    ]
  },
  {
    name: "Growth",
    price: 249,
    clients: "Up to 10 clients",
    subtitle: "Best starter tier for high-ticket trainers.",
    featured: true,
    features: [
      "Everything in Essential",
      "Relationship intelligence score",
      "Client journey timeline",
      "Retention risk alerts",
      "Trainer action recommendations",
      "ROI reporting"
    ]
  },
  {
    name: "Professional",
    price: 399,
    clients: "Up to 25 clients",
    subtitle: "For hybrid and online coaches scaling service.",
    features: [
      "Everything in Growth",
      "Wearable data integrations",
      "Advanced compliance tracking",
      "Nutrition behavior insights",
      "Priority client dashboard",
      "Usage threshold alerts"
    ]
  },
  {
    name: "Elite / Studio",
    price: 699,
    clients: "50+ clients or teams",
    subtitle: "For studios, gyms, and serious coaching businesses.",
    features: [
      "Multi-trainer management",
      "White-label options",
      "Studio retention dashboard",
      "Advanced analytics",
      "Priority support",
      "Custom enterprise path"
    ]
  }
];

const scenarios = [
  {
    title: "The Silent Churn",
    icon: MessageSquareWarning,
    before: "A client looks fine until they suddenly pause coaching.",
    after: "Maverick Journey sees sleep decline, missed check-ins, lower engagement, and alerts the trainer before the client leaves.",
    result: "Retention saved before revenue is lost."
  },
  {
    title: "The Busy Trainer",
    icon: Users,
    before: "A trainer with 20 clients spends hours reviewing messages, photos, nutrition, and follow-ups.",
    after: "AI summaries highlight who needs attention and what action to take.",
    result: "The trainer can manage more clients without hiring an assistant."
  },
  {
    title: "The Stalled Client",
    icon: HeartPulse,
    before: "The client is following workouts but progress slows down.",
    after: "Wearable patterns show poor recovery, low sleep, and elevated stress.",
    result: "The coach adjusts the strategy with context, not guessing."
  },
  {
    title: "The Gym Owner",
    icon: LineChart,
    before: "The gym knows who paid and who cancelled, but not who is at risk.",
    after: "The studio dashboard flags member engagement, risk, and coach opportunities.",
    result: "More retention, more upsell opportunities, better member experience."
  }
];

const competitors = [
  ["Workout delivery", "Yes", "Yes"],
  ["Nutrition tracking", "Yes", "Yes"],
  ["Progress photos", "Yes", "Yes"],
  ["Messaging", "Yes", "Yes"],
  ["Relationship intelligence", "Limited", "Core platform"],
  ["Churn-risk detection", "Limited", "Built in"],
  ["Slack alert layer", "Limited", "Built in"],
  ["Wearable context engine", "Some", "Designed around it"],
  ["Coach action recommendations", "Limited", "Built in"],
  ["Usage monitoring by tier", "Limited", "Built in"]
];

function ROI() {
  const [clients, setClients] = useState(10);
  const [charge, setCharge] = useState(750);

  const plan = useMemo(() => {
    if (clients <= 5) return { name: "Essential", price: 149 };
    if (clients <= 10) return { name: "Growth", price: 249 };
    if (clients <= 25) return { name: "Professional", price: 399 };
    return { name: "Elite", price: 699 };
  }, [clients]);

  const revenue = clients * charge;
  const percent = revenue ? ((plan.price / revenue) * 100).toFixed(1) : 0;
  const annual = plan.price * 12;

  return (
    <div className="roi-card">
      <div>
        <p className="eyebrow">Interactive ROI example</p>
        <h3>Show investors the math in seconds.</h3>
        <p>
          Maverick Journey becomes easy to justify when investors see that the platform is only a small percentage of a trainer's monthly revenue.
        </p>
      </div>
      <div className="sliders">
        <label>
          Clients managed: <strong>{clients}</strong>
          <input type="range" min="3" max="60" value={clients} onChange={(e) => setClients(Number(e.target.value))} />
        </label>
        <label>
          Monthly coaching price per client: <strong>${charge}</strong>
          <input type="range" min="250" max="2000" step="50" value={charge} onChange={(e) => setCharge(Number(e.target.value))} />
        </label>
      </div>
      <div className="roi-metrics">
        <div><span>Trainer revenue</span><strong>${revenue.toLocaleString()}/mo</strong></div>
        <div><span>Suggested plan</span><strong>{plan.name}</strong></div>
        <div><span>Maverick price</span><strong>${plan.price}/mo</strong></div>
        <div><span>Cost of revenue</span><strong>{percent}%</strong></div>
        <div><span>Annual SaaS revenue</span><strong>${annual.toLocaleString()}</strong></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <div className="brand"><span>MJ</span>Maverick Journey</div>
          <div className="navlinks">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#pricing">Pricing</a>
            <a href="#investors">Investors</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Investor preview</p>
            <h1>The relationship intelligence platform for coaching businesses.</h1>
            <p className="hero-copy">
              Maverick Journey is not another AI fitness app. It brings trainers and clients closer together by helping coaches understand the full client journey — workouts, nutrition, wearables, check-ins, motivation, stress, and engagement — before clients disengage.
            </p>
            <div className="hero-buttons">
              <a href="#investors" className="primary">View investor case</a>
              <a href="#scenarios" className="secondary">See scenarios</a>
            </div>
            <div className="proof-row">
              <div><strong>$249/mo</strong><span>Target growth tier</span></div>
              <div><strong>3.3%</strong><span>Of $7.5k trainer revenue</span></div>
              <div><strong>$2.99M</strong><span>ARR at 1,000 trainers</span></div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-header">
              <span>Trainer Intelligence Feed</span>
              <Sparkles size={18} />
            </div>
            <div className="alert danger">
              <strong>Sarah M. — Churn risk rising</strong>
              <p>Sleep down 22%, missed 2 check-ins, sentiment shifted negative. Recommended: personal outreach today.</p>
            </div>
            <div className="alert warning">
              <strong>David R. — Progress stalled</strong>
              <p>Workouts completed, but recovery indicators are low. Recommend recovery adjustment.</p>
            </div>
            <div className="alert success">
              <strong>Amanda L. — On track</strong>
              <p>Nutrition compliance improved 18%. Send encouragement to reinforce momentum.</p>
            </div>
            <div className="mini-chart">
              <div style={{height: "34%"}}></div>
              <div style={{height: "48%"}}></div>
              <div style={{height: "62%"}}></div>
              <div style={{height: "44%"}}></div>
              <div style={{height: "78%"}}></div>
              <div style={{height: "88%"}}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section">
        <p className="eyebrow">The problem</p>
        <h2>Coaching does not have a workout problem. It has a relationship problem.</h2>
        <p className="section-lead">
          Trainers already have workout builders, messaging apps, nutrition tools, spreadsheets, and wearable dashboards. The missing layer is understanding what is happening with the human behind the data.
        </p>
        <div className="cards three">
          <div><Dumbbell /><h3>Data is scattered</h3><p>Workouts, nutrition, photos, messages, and wearables live in separate tools.</p></div>
          <div><Activity /><h3>Coaches are reactive</h3><p>Most trainers only see the problem after a client misses workouts or cancels.</p></div>
          <div><CircleDollarSign /><h3>Churn hurts revenue</h3><p>Losing one high-ticket client can cost more than an entire year of software.</p></div>
        </div>
      </section>

      <section id="solution" className="section dark-panel">
        <p className="eyebrow">The missing layer</p>
        <h2>Maverick Journey turns client data into coach-ready understanding.</h2>
        <div className="flow">
          <div>Wearables<br/>Nutrition<br/>Workouts<br/>Check-ins<br/>Photos<br/>Messages</div>
          <div className="arrow">→</div>
          <div className="core"><Brain />Relationship Intelligence Engine</div>
          <div className="arrow">→</div>
          <div>Coach Actions<br/>Client Retention<br/>Better Outcomes<br/>Higher Revenue</div>
        </div>
      </section>

      <section id="scenarios" className="section">
        <p className="eyebrow">Real-world use cases</p>
        <h2>What investors should understand immediately.</h2>
        <div className="cards two">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div className="scenario" key={s.title}>
                <Icon />
                <h3>{s.title}</h3>
                <p><strong>Without Maverick:</strong> {s.before}</p>
                <p><strong>With Maverick:</strong> {s.after}</p>
                <div className="result">{s.result}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why we beat competitors</p>
          <h2>Competitors manage programs. Maverick Journey manages the relationship.</h2>
          <p>
            The nearest competitors are platforms like Trainerize, Everfit, TrueCoach, and Coach Catalyst. They support workouts, nutrition, messaging, and progress tracking. Maverick Journey adds the intelligence layer that helps coaches know who needs help, why they need help, and what to do next.
          </p>
        </div>
        <div className="comparison">
          <div className="comp-row head"><span>Capability</span><span>Traditional platforms</span><span>Maverick Journey</span></div>
          {competitors.map((row) => (
            <div className="comp-row" key={row[0]}>
              <span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section">
        <p className="eyebrow">Pricing strategy</p>
        <h2>Base platform with usage-aware tiers.</h2>
        <p className="section-lead">
          The basic tier should feel powerful enough to sell, while premium tiers unlock higher-cost and higher-value capabilities such as wearable integrations, advanced AI analysis, white-labeling, and studio reporting.
        </p>
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div className={`price-card ${tier.featured ? "featured" : ""}`} key={tier.name}>
              {tier.featured && <div className="badge">Recommended launch tier</div>}
              <h3>{tier.name}</h3>
              <p>{tier.subtitle}</p>
              <div className="price">${tier.price}<span>/mo</span></div>
              <div className="clients">{tier.clients}</div>
              <ul>
                {tier.features.map((f) => <li key={f}><CheckCircle2 size={16}/>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-panel">
        <p className="eyebrow">Usage controls</p>
        <h2>Designed to protect margins as trainer usage grows.</h2>
        <div className="cards three">
          <div><Zap /><h3>AI token monitoring</h3><p>Track summaries, chat usage, client reports, and high-cost AI calls by trainer and tier.</p></div>
          <div><Watch /><h3>Integration controls</h3><p>Wearables, Terra, ROOK, Apple Health-style syncs can be tiered or metered when usage becomes expensive.</p></div>
          <div><ShieldCheck /><h3>Storage limits</h3><p>Progress photos, videos, uploads, and exports can have plan-based limits and upgrade triggers.</p></div>
        </div>
      </section>

      <section className="section">
        <ROI />
      </section>

      <section id="investors" className="section investor">
        <p className="eyebrow">Investor thesis</p>
        <h2>AI alone is not the moat. Relationship intelligence is.</h2>
        <p>
          AI fitness products are becoming common. Maverick Journey is different because it does not simply generate workouts or summaries. It builds a continuous understanding of the client journey and translates that understanding into timely trainer action.
        </p>
        <div className="metrics">
          <div><strong>$298K</strong><span>ARR at 100 trainers on Growth</span></div>
          <div><strong>$1.49M</strong><span>ARR at 500 trainers</span></div>
          <div><strong>$2.99M</strong><span>ARR at 1,000 trainers</span></div>
          <div><strong>$14.9M</strong><span>ARR at 5,000 trainers</span></div>
        </div>
      </section>

      <footer>
        <div className="brand"><span>MJ</span>Maverick Journey</div>
        <p>The future of coaching is not more data. It is better understanding.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
