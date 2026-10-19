import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, Download, Menu, X, ArrowUp, ExternalLink } from 'lucide-react'
import { profile, skills, projects, education, achievements } from '../data/portfolio.js'

const links = ['home', 'about', 'skills', 'projects', 'education', 'contact']
const label = s => s[0].toUpperCase() + s.slice(1)
const Social = () => (<>
  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
  <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
</>)
const Resume = ({ cls = 'btn ghost' }) => (<a className={cls} href={profile.resume} download><Download size={16} /> Download Resume</a>)
const Head = ({ id, children }) => <h2 id={id} className="sec-title">{children}</h2>

export function Nav({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a href="#home" className="brand">{profile.name}</a>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'open' : ''} aria-label="Primary">
        {links.map(l => <a key={l} href={`#${l}`} aria-current={active === l ? 'true' : undefined} onClick={() => setOpen(false)}>{label(l)}</a>)}
        <Resume cls="btn small" />
      </nav>
    </header>)
}

export function Hero() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-h">
      <div>
        <h1 id="hero-h">Hi, I'm {profile.name}.<br /><span className="grad">I build things for the web.</span></h1>
        <p className="role">{profile.title}</p>
        <p className="lead">{profile.intro}</p>
        <div className="row">
          <a className="btn" href="#projects">View My Projects</a><Resume />
          <span className="socials"><Social /></span>
        </div>
      </div>
      <div className="visual">
      {profile.photo && <img className="avatar" src={profile.photo} alt={`Portrait of ${profile.name}`} width="220" height="220" />}
      <div className="code glass" aria-hidden="true">
        <div className="dots"><i /><i /><i /></div>
        <pre>{`const developer = {
  status: "B.Tech final year",
  stack: ["Java", "React",
          "Node.js", "SQL"],
  lookingFor: "entry-level role",
  learning: true,
};`}</pre>
      </div>
      </div>
    </section>)
}

export function About() {
  return (<section id="about" className="wrap" aria-labelledby="about-h"><Head id="about-h">About me</Head>
    <div className="prose">{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div></section>)
}

export function Skills() {
  const groups = Object.entries(skills).filter(([, v]) => v.length)
  return (<section id="skills" className="wrap" aria-labelledby="skills-h"><Head id="skills-h">Technical skills</Head>
    <div className="grid">{groups.map(([g, items]) => (
      <div className="card glass" key={g}><h3>{g}</h3><ul className="tags">{items.map(i => <li key={i}>{i}</li>)}</ul></div>))}</div></section>)
}

function Modal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k); ref.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal glass" role="dialog" aria-modal="true" aria-label={p.name} tabIndex={-1} ref={ref} onClick={e => e.stopPropagation()}>
        <button className="close" aria-label="Close" onClick={onClose}><X /></button>
        <h3>{p.name}</h3>
        <p><strong>Problem:</strong> {p.problem}</p><p>{p.description}</p>
        <h4>Key features</h4><ul className="bul">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
        {p.tech.length > 0 && <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>}
        <div className="row">
          {p.github ? <a className="btn small" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a> : <span className="muted">GitHub link coming soon</span>}
          {p.live ? <a className="btn small" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a> : <span className="muted">Live demo coming soon</span>}
        </div>
      </div>
    </div>)
}

export function Projects() {
  const [sel, setSel] = useState(null)
  return (<section id="projects" className="wrap" aria-labelledby="projects-h"><Head id="projects-h">Featured projects</Head>
    <div className="grid">{projects.map(p => (
      <button className="card glass proj" key={p.id} onClick={() => setSel(p)} aria-haspopup="dialog">
        <div className="shot">{p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" /> : <span>{p.name}</span>}</div>
        <h3>{p.name}</h3><p>{p.description}</p>
        {p.tech.length > 0 && <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>}
        <span className="more">View details</span>
      </button>))}</div>
    {sel && <Modal p={sel} onClose={() => setSel(null)} />}</section>)
}

export function Education() {
  return (<section id="education" className="wrap" aria-labelledby="edu-h"><Head id="edu-h">Education</Head>
    {education.map((e, i) => (<div className="card glass" key={i}>
      <h3>{e.degree}</h3><p>{e.school} · {e.year}</p>
      {e.coursework.length > 0 && <><h4>Relevant coursework</h4><ul className="tags">{e.coursework.map(c => <li key={c}>{c}</li>)}</ul></>}
      {e.highlights.length > 0 && <ul className="bul">{e.highlights.map(h => <li key={h}>{h}</li>)}</ul>}
    </div>))}</section>)
}

export function Achievements() {
  if (!achievements.length) return null
  return (<section id="achievements" className="wrap" aria-labelledby="ach-h"><Head id="ach-h">Experience and achievements</Head>
    <div className="grid">{achievements.map((a, i) => <div className="card glass" key={i}><h3>{a.title}</h3><p>{a.detail}</p></div>)}</div></section>)
}

function Field({ k, f, set, err, t = 'text', area }) {
  const C = area ? 'textarea' : 'input'
  return (<div className="field"><label htmlFor={k}>{label(k)}</label>
    <C id={k} type={area ? undefined : t} rows={area ? 5 : undefined} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} />
    {err[k] && <span id={`${k}-e`} className="err">{err[k]}</span>}</div>)
}

export function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({}); const [status, setStatus] = useState('')
  const env = import.meta.env
  const set = k => e => setF({ ...f, [k]: e.target.value })
  async function submit(e) {
    e.preventDefault()
    const er = {}
    if (!f.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email address.'
    if (!f.subject.trim()) er.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) er.message = 'Write at least 10 characters.'
    setErr(er); if (Object.keys(er).length) return
    if (!env.VITE_EMAILJS_SERVICE_ID) { setStatus('error'); return }
    setStatus('sending')
    try {
      await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID, { from_name: f.name, reply_to: f.email, subject: f.subject, message: f.message }, { publicKey: env.VITE_EMAILJS_PUBLIC_KEY })
      setStatus('ok'); setF({ name: '', email: '', subject: '', message: '' })
    } catch { setStatus('error') }
  }
  const p = { f, set, err }
  return (<section id="contact" className="wrap contact" aria-labelledby="contact-h"><Head id="contact-h">Get in touch</Head>
    <div className="cgrid">
      <div className="prose"><p>I'm open to entry-level software opportunities. Send a message or reach me directly.</p>
        <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p><div className="socials"><Social /></div></div>
      <form className="card glass" onSubmit={submit} noValidate>
        <Field k="name" {...p} /><Field k="email" t="email" {...p} /><Field k="subject" {...p} /><Field k="message" area {...p} />
        <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        <p role="status" aria-live="polite" className={status === 'ok' ? 'ok' : 'err'}>
          {status === 'ok' && 'Message sent. I will reply soon.'}
          {status === 'error' && `Could not send. Email me directly at ${profile.email}.`}</p>
      </form></div></section>)
}

export function Footer() {
  return (<footer className="footer"><div className="socials"><Social /></div>
    <p>© {new Date().getFullYear()} {'Developed By '+profile.name}</p>
    <a href="#home" className="btn small ghost"><ArrowUp size={16} /> Back to top</a></footer>)
}
