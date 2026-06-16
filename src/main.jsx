import React, {useMemo, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, AlertTriangle, ArrowRight, BarChart3, BellRing, Bot, CheckCircle2, Database, Dumbbell, Gauge, HeartPulse, LineChart, Lock, MessageSquare, ShieldCheck, Sparkles, Users, Watch, Zap } from 'lucide-react';
import './styles.css';

const tiers = [
  {name:'Launch', clients:'Up to 5 clients', price:149, best:'Early coach', included:['Client + trainer dashboards','AI weekly client summaries','Progress photos + measurements','Basic reminders + check-ins','Messaging hub','Usage monitoring included'], caps:['AI summaries: 150/mo','Storage: 10GB','Wearables: add-on']},
  {name:'Growth', clients:'Up to 10 clients', price:249, best:'Core target', featured:true, included:['Everything in Launch','Slack alert layer','Client risk flags','Nutrition accountability','Premium report templates','Trainer workload dashboard'], caps:['AI summaries: 400/mo','Storage: 30GB','Wearables: 5 connected clients']},
  {name:'Pro', clients:'Up to 25 clients', price:399, best:'Full-time coach', included:['Everything in Growth','Advanced AI recommendations','Retention scoring','Wearable trend analysis','Automated client segmentation','Custom branding basics'], caps:['AI summaries: 1,250/mo','Storage: 100GB','Wearables: 25 connected clients']},
  {name:'Elite', clients:'Up to 50 clients', price:699, best:'High-volume coach', included:['Everything in Pro','Priority AI processing','Advanced automations','Team assistant workflows','Premium analytics','Quarterly success review'], caps:['AI summaries: 3,000/mo','Storage: 250GB','Wearables: 50 connected clients']},
  {name:'Studio', clients:'Up to 200 clients', price:1499, best:'Multi-trainer facility', included:['Multi-trainer management','Owner dashboard','White-label options','Location analytics','Role permissions','Dedicated onboarding'], caps:['Custom AI usage pool','Custom storage pool','Wearables negotiated']}
];

const competitors = [
  ['Typical coaching apps','Workouts, habits, messaging, nutrition, payments'],
  ['Maverick Journey','AI alerts, trainer workload automation, Slack layer, wearables, usage controls, retention intelligence'],
  ['Key wedge','Help trainers charge premium services while avoiding runaway AI/storage costs']
];

function money(n){return n.toLocaleString(undefined,{style:'currency',currency:'USD',maximumFractionDigits:0})}
function App(){
  const [clients,setClients]=useState(10); const [clientPrice,setClientPrice]=useState(750);
  const tier = useMemo(()=> tiers.find(t=> clients <= parseInt(t.clients.match(/\d+/g)?.pop()||'999')) || tiers[4],[clients]);
  const monthlyRevenue=clients*clientPrice; const pct=tier.price/monthlyRevenue*100; const retained=clientPrice-tier.price;
  return <main>
    <section className="hero">
      <nav><div className="brand"><span className="logo">MJ</span><span>Maverick Journey</span></div><a href="#pricing" className="navcta">View pricing</a></nav>
      <div className="heroGrid"><div>
        <div className="eyebrow"><Sparkles size={16}/> Investor + trainer showcase website</div>
        <h1>The AI operating system for modern coaching businesses.</h1>
        <p className="lead">Maverick Journey helps personal trainers, hybrid coaches, and fitness studios scale premium coaching services by automating check-ins, progress tracking, wearable insights, client alerts, and weekly reporting.</p>
        <div className="actions"><a href="#calculator" className="btn primary">Run ROI example <ArrowRight size={18}/></a><a href="#tiers" className="btn secondary">Explore tiers</a></div>
      </div><div className="heroCard">
        <div className="screenTop"><span></span><span></span><span></span></div>
        <div className="alert"><BellRing/><div><b>Client Risk Alert</b><small>Sarah missed 2 check-ins and sleep dropped 18% this week.</small></div></div>
        <div className="metricRow"><div><b>25</b><small>Active clients</small></div><div><b>8.4h</b><small>Admin saved/wk</small></div><div><b>92%</b><small>Engagement</small></div></div>
        <div className="bars"><span style={{height:'42%'}}></span><span style={{height:'68%'}}></span><span style={{height:'76%'}}></span><span style={{height:'54%'}}></span><span style={{height:'88%'}}></span><span style={{height:'71%'}}></span></div>
      </div></div>
    </section>

    <section className="section problem"><div className="sectionHead"><span className="eyebrow"><AlertTriangle size={16}/> The problem</span><h2>Trainers hit a growth ceiling because premium coaching creates premium admin work.</h2><p>When a coach grows from 5 clients to 20+ clients, the work shifts from coaching to chasing updates, reviewing screenshots, remembering client context, and manually following up.</p></div>
      <div className="cards four">{[['Texts & DMs',MessageSquare],['Nutrition review',Activity],['Wearable data',Watch],['Progress reports',BarChart3]].map(([t,I])=><div className="card" key={t}><I/><h3>{t}</h3><p>Usually scattered across disconnected apps, making it hard to deliver a consistent premium experience.</p></div>)}</div>
    </section>

    <section className="section dark"><div className="sectionHead"><span className="eyebrow"><Zap size={16}/> The solution</span><h2>One connected operating system across client, trainer, AI, and communication.</h2></div>
      <div className="pillarGrid"><div><Users/><h3>Client Dashboard</h3><p>Workouts, nutrition, photos, habits, goals, wearable data, check-ins, reminders, and weekly reports.</p></div><div><Dumbbell/><h3>Trainer Dashboard</h3><p>AI summaries, compliance trends, at-risk clients, retention signals, workload prioritization, and progress insights.</p></div><div><MessageSquare/><h3>Slack Layer</h3><p>AI-driven alerts notify trainers when something needs human attention — missed check-ins, sleep drops, plateaus, or urgent updates.</p></div></div>
    </section>

    <section className="section" id="calculator"><div className="sectionHead"><span className="eyebrow"><LineChart size={16}/> ROI calculator</span><h2>Show trainers how Maverick Journey pays for itself.</h2><p>Use this on sales calls or investor conversations to explain why a $249–$699 monthly platform fee is reasonable for high-ticket coaching.</p></div>
      <div className="calculator"><div className="controls"><label>Active clients: <b>{clients}</b><input type="range" min="1" max="60" value={clients} onChange={e=>setClients(+e.target.value)}/></label><label>Average client package: <b>{money(clientPrice)}/mo</b><input type="range" min="200" max="1500" step="50" value={clientPrice} onChange={e=>setClientPrice(+e.target.value)}/></label></div><div className="result"><small>Recommended tier</small><h3>{tier.name} — {money(tier.price)}/mo</h3><div className="big">{money(monthlyRevenue)}/mo</div><p>Trainer gross coaching revenue</p><div className="roiGrid"><span>Platform cost: <b>{pct.toFixed(1)}%</b></span><span>Retain 1 client impact: <b>{money(retained)}</b></span></div></div></div>
    </section>

    <section className="section" id="tiers"><div className="sectionHead"><span className="eyebrow"><Gauge size={16}/> Pricing + usage controls</span><h2>Every tier feels powerful, but usage limits protect margins.</h2><p>The base tier should still feel valuable. Higher tiers unlock scale, heavier AI usage, wearable capacity, storage, advanced analytics, and white-label/studio features.</p></div>
      <div className="pricing" id="pricing">{tiers.map(t=><div className={'priceCard '+(t.featured?'featured':'')} key={t.name}><div className="tag">{t.best}</div><h3>{t.name}</h3><p>{t.clients}</p><div className="price">{money(t.price)}<span>/mo</span></div><ul>{t.included.map(x=><li key={x}><CheckCircle2/> {x}</li>)}</ul><div className="caps"><b>Usage guardrails</b>{t.caps.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
    </section>

    <section className="section muted"><div className="sectionHead"><span className="eyebrow"><ShieldCheck size={16}/> Cost protection model</span><h2>Track heavy users without punishing normal users.</h2></div><div className="cards three">
      <div className="card"><Bot/><h3>AI token budget</h3><p>Set monthly AI summary, chat, and report-generation caps by tier. Show usage in trainer admin so upgrades feel transparent.</p></div>
      <div className="card"><Database/><h3>Storage budget</h3><p>Limit photo/video/document storage per plan. Offer extra storage as an add-on for high-volume transformation coaches.</p></div>
      <div className="card"><Watch/><h3>Wearable budget</h3><p>Wearable syncs create ongoing API and data processing costs. Include limited syncs in Growth, then unlock more in Pro/Elite.</p></div>
    </div></section>

    <section className="section"><div className="sectionHead"><span className="eyebrow"><HeartPulse size={16}/> What trainers can charge clients</span><h2>Position Maverick Journey as a premium coaching enhancer.</h2></div><div className="packageGrid">
      {[
        ['Online Accountability','$300–$600/mo','App access, weekly check-ins, habit tracking, progress photos, AI-supported summaries.'],
        ['Hybrid Coaching','$600–$1,200/mo','In-person sessions plus online accountability, nutrition, wearable monitoring, and weekly reports.'],
        ['Premium Transformation','$1,000–$2,000+/mo','High-touch coaching, frequent communication, advanced data review, concierge-style accountability.']
      ].map(([a,b,c])=><div className="package" key={a}><h3>{a}</h3><div>{b}</div><p>{c}</p></div>)}
    </div></section>

    <section className="section dark"><div className="sectionHead"><span className="eyebrow"><Lock size={16}/> Differentiation</span><h2>Not just another fitness app.</h2><p>Many platforms offer workouts, messaging, habits, and nutrition. Maverick Journey’s wedge is the business operating layer: AI prioritization, Slack alerts, retention monitoring, usage economics, and trainer capacity expansion.</p></div><div className="comparison">{competitors.map(([a,b])=><div key={a}><b>{a}</b><span>{b}</span></div>)}</div></section>

    <section className="section final"><h2>Investor thesis</h2><p>Maverick Journey sits at the intersection of AI, coaching, wearables, and recurring SaaS. The platform helps coaches deliver a more personal service while reducing manual workload — creating a clear path to premium pricing, strong retention, and scalable margins.</p><a className="btn primary" href="mailto:chrisisaak@ccmediacreations.com">Contact Maverick Journey</a></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
