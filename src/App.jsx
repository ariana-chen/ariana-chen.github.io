import { useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, AtSign, BrainCircuit, Cat, Code2, Heart, MapPin, Music2, Smile, Sparkles, Waves } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const notes = [
  { no: '01', course: 'FOUNDATIONS', title: 'Math', meta: 'Algebra · Calculus · Probability', tone: 'sand', symbol: '∫', href: 'https://disk.pku.edu.cn/anyshare/zh-cn/dir/59B956417C004D76A4FF0525D1FC82F7/6A78130858B54652AB6DF1FFC0ABDC13' },
  { no: '02', course: 'THE PHYSICAL WORLD', title: 'Physics', meta: 'Mechanics · Electromagnetism · Signals', tone: 'rose', symbol: 'φ', href: 'https://disk.pku.edu.cn/anyshare/zh-cn/dir/59B956417C004D76A4FF0525D1FC82F7/F60072F3CCA94EA38C4F7290B41954DC' },
  { no: '03', course: 'COMPUTATION', title: 'CS & AI', meta: 'Algorithms · Machine Learning · Intelligence', tone: 'cocoa', symbol: '</>', href: 'https://disk.pku.edu.cn/anyshare/zh-cn/dir/59B956417C004D76A4FF0525D1FC82F7/1B30D6C340664C2F82D6761592697444' },
  { no: '04', course: 'MIND & BEHAVIOR', title: 'Psychology', meta: 'Cognition · Perception · Behavior', tone: 'clay', symbol: 'Ψ' },
]

const strengths = [
  { icon: BrainCircuit, tag: 'RESEARCH', title: 'Neural Data Decoding', text: 'Experienced with preprocessing, feature construction, normalization, and decoding workflows for spike trains and LFPs.' },
  { icon: Code2, tag: 'BUILD', title: 'Models & Engineering', text: 'I use Python, C++, PyTorch, and TensorFlow/Keras to turn ideas into models that can be tested.' },
  { icon: Waves, tag: 'THINK', title: 'Interdisciplinary Thinking', text: 'I look for meaningful questions at the intersection of cognitive psychology, artificial intelligence, and neuroscience.' },
]

const funFacts = [
  { icon: Heart, label: 'POP ON REPEAT', text: 'A devoted Ariana Grande fan, with Mariah Carey, Britney Spears, and other pop icons always in the rotation.' },
  { icon: Smile, label: 'STILL LEARNING THE GAME', text: 'I love playing volleyball—even if there is still plenty of room to improve.' },
  { icon: Cat, label: 'A SOFT SPOT FOR CATS', text: 'I have always had a soft spot for cats.' },
  { icon: Music2, label: 'LEARNING THE CHOREO', text: 'Lately, I’ve been learning NewJeans choreography—one count at a time.' },
]

function App() {
  const audioRef = useRef(null)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMusicPlaying) {
      audio.pause()
      setIsMusicPlaying(false)
      return
    }

    try {
      audio.volume = 0.22
      await audio.play()
      setIsMusicPlaying(true)
    } catch {
      setIsMusicPlaying(false)
    }
  }

  return (
    <main>
      <audio ref={audioRef} src="/assets/site-soundtrack.ogg" loop preload="metadata" />
      <section className="hero" id="home">
        <img className="hero-media" src="/neuron-hero.webp" alt="Gold neuron microscopy image" fetchPriority="high" decoding="async" />
        <div className="hero-wash" />
        <nav className="nav shell">
          <a className="brand" href="#home">CZH <span>|</span> PKU</a>
          <div className="nav-links">
            <a href="#about">ABOUT</a><a href="#notes">NOTES</a><a href="#strengths">STRENGTHS</a>
            <button className={`music-toggle${isMusicPlaying ? ' is-playing' : ''}`} type="button" onClick={toggleMusic} aria-pressed={isMusicPlaying} aria-label={isMusicPlaying ? 'Pause background music' : 'Play background music'}>
              MUSIC <span className="music-status" aria-hidden="true" />
            </button>
            <a href="#contact">CONTACT</a>
          </div>
          <a className="nav-contact" href="mailto:2500012848@stu.pku.edu.cn">LET'S TALK <ArrowUpRight size={16} /></a>
        </nav>
        <div className="hero-content shell">
          <p className="eyebrow light"><Sparkles size={14} /> STUDENT · EXPLORER · BUILDER</p>
          <h1>Curious about<br /><em>minds</em> & machines.</h1>
          <div className="hero-bottom">
            <p>Decoding stable representations<br />from complex, ever-changing neural signals.</p>
            <a className="round-link" href="#about" aria-label="Continue reading"><ArrowDownRight /></a>
          </div>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span> ABOUT ME</div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <img src="/portrait.webp" alt="Portrait of 陈主寰" loading="lazy" decoding="async" />
            <div className="portrait-caption"><MapPin size={15} /> Beijing, China</div>
          </div>
          <div className="about-copy">
            <p className="kicker">HELLO, I'M</p>
            <h2>陈主寰<br /><i>Chen Zhuhuan</i></h2>
            <p className="lead">An undergraduate in Intelligent Science and Technology at Peking University, curious about NeuroAI, brain-computer interfaces, and emotion decoding.</p>
            <p className="body-copy">I care about how neuroscience can help us understand intelligence—and how these technologies might ultimately support mental health. My current work spans neural data analysis, machine learning, and brain-inspired computation.</p>
            <div className="contact-row">
              <a href="mailto:2500012848@stu.pku.edu.cn"><AtSign size={22} strokeWidth={2.4} /> 2500012848@stu.pku.edu.cn</a>
              <a href="https://github.com/ariana-chen" target="_blank" rel="noreferrer"><FaGithub size={23} /> ariana-chen</a>
            </div>
          </div>
        </div>
        <div className="fun-facts">
          <div className="fun-facts-head">
            <div><span>OFF THE RECORD</span><h3>Fun facts.</h3></div>
            <p>A few things I enjoy beyond<br />coursework and research.</p>
          </div>
          <div className="fun-facts-grid">
            {funFacts.map(({ icon: Icon, label, text }, index) => <article className={`fact-card has-photo photo-${['ariana', 'volleyball', 'cat', 'newjeans'][index]}`} key={label}>
              <div className="fact-top"><Icon size={22} /><span>0{index + 1}</span></div>
              <div><h4>{label}</h4><p>{text}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="notes section" id="notes">
        <div className="shell">
          <div className="section-head">
            <div><div className="section-label"><span>02</span> SELECTED NOTES</div><h2>A record of how I learn—<br />one course, one idea at a time.</h2></div>
            <p>Key concepts, derivations, and reflections from my courses.<br />Course cards serve as the first collection of entries.</p>
          </div>
          <div className="note-grid">
            {notes.map((note) => {
              const Card = note.href ? 'a' : 'article'
              const linkProps = note.href ? { href: note.href, target: '_blank', rel: 'noreferrer', 'aria-label': `Open ${note.title} notes` } : {}
              return <Card className={`note-card ${note.tone}${note.href ? ' linked' : ''}`} key={note.no} {...linkProps}>
                <div className="note-top"><span>{note.no}</span><span>{note.course}</span></div>
                <div className="note-mark">{note.symbol}</div>
                <div><p>{note.meta}</p><h3>{note.title}</h3><span className="note-action">{note.href ? 'OPEN NOTES' : note.tone === 'more' ? 'STAY TUNED' : 'COMING SOON'} <ArrowUpRight size={16} /></span></div>
              </Card>
            })}
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="section-label"><span>03</span> WHAT I BRING</div>
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, tag, title, text }, i) => <article className="strength-card" key={title}>
            <div className="strength-icon"><Icon /></div><span>0{i + 1} / {tag}</span><h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-glow" />
        <div className="shell footer-inner">
          <p className="eyebrow light"><Sparkles size={14} /> OPEN TO IDEAS & COLLABORATION</p>
          <h2>Let's explore<br />what the mind<br /><em>can become.</em></h2>
          <a className="mail-button" href="mailto:2500012848@stu.pku.edu.cn">GET IN TOUCH <ArrowUpRight /></a>
          <div className="footer-bottom"><span>CHEN ZHUHUAN © 2026</span><span>BEIJING · CHINA</span><a href="#home">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  )
}

export default App
