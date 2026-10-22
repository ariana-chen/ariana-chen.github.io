import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowUpRight, AtSign, BrainCircuit, Cat, Clock3, Code2, Heart, MapPin, Music2, Smile, Sparkles, Waves } from 'lucide-react'
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

const blogPosts = [
  {
    slug: 'how-to-learn-calculus-at-pku',
    no: '01',
    date: 'SEP 01, 2026',
    category: 'LEARNING',
    readTime: '5 MIN READ',
    title: '在北大如何学好高数？',
    excerpt: '从老师和助教的选择，到作业、讲义与往年题：一份以取得好成绩为目标的北大高数学习复盘。',
    opening: '作为一个在北大并没有把高数学得特别好的人，我自认为自己没有什么天资上的优势，但在高数 A2 的学习中我也慢慢“领悟”了如何**学好高数**。当然，这里的**学好**只是取得一个比较好的分数，并不是参透某种数学思想——因为我在期末考完一个月后，已经忘记了如何证明级数收敛了（）。接下来分几个板块讲讲吧：',
    sections: [
      { heading: '1. 上课及老师、助教选择', body: ['现在回头看，各种课程评价都挺关注老师的讲课水平的，但学了一年高数之后，我深深地感觉到，**自学的效果和效率远远高于上课**。上学期我选的是陈大岳老师，但平时听课选择的都是黄得老师。黄得老师讲课还是很清楚的，个人上课也能听懂，然而成绩并不理想。下学期选的是刘培东老师，说实话在上课的时候我常常沉迷于刷小红书，但下学期成绩提升了许多。我认为很大的原因是：**助教变了**。', '如果一个助教会精心准备讲义（这个真的很有用），认真批改作业并且指出你的错误或不严谨的地方，极大程度上依赖往年题进行教学，别犹豫，选 ta！就选 ta！', '选定了老师和助教之后，我们来到**如何上课**。我真心觉得，上课听与不听对于考试影响是不大的，甚至我觉得自己看书效率更高。不过呢，老师上课会有很多有价值的观点，很可能无意中给你提供了一个理解的捷径，所以我非常推荐**上课＋随堂笔记＋课后看书＋自己总结一遍知识点**的形式。'] },
      { heading: '2. 作业', body: ['这个没啥好说的，作业基本都是教材的课后题或例题，而且很多考试题都是从教材题目里变出来的。尤其是有一些比较难的**课后题或例题**，真的每年都会考！！！真心建议大家写完作业后不要漏掉剩下的那些题，全部动笔写一遍才是最好滴～'] },
      { heading: '3. 练习', body: ['北大高数学习的主流资源其实就是 **xyt 讲义**，可能近些年还有 **ztf 讲义**。前者真的是十分完美的资源呀！每一个学高数 A 的同学相信都绕不开这份资料。后者也有很高的价值嘿嘿，尤其是**按题目类型对往年题进行了完整的划分和涵盖**。但是我觉得 ztf 学长的答案写得太严谨、太详尽，有时候我甚至看不懂（），所以一般都直接把题目甩给 GPT 生成简洁的答案——不要学我。', '我个人非常喜欢刘兴沛学长撰写的讲义，可惜的是本人并没有进行开源。有幸上到这位学长习题课的同学，一定不要错过这个大好资源！'] },
      { heading: '4. 考试', body: ['考试很难，一般都是期中简单、期末难，呜呜呜。我不太擅长应试，最好的成绩是高数 A2 的期末。能给出的唯一建议就是：大家还是反复看往年题并总结做题思路吧！有些东西真的是会反复考。'] },
    ],
  },
]

function formatInline(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => part.startsWith('**') && part.endsWith('**')
    ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    : part)
}

function BlogPost({ post }) {
  if (!post) return null

  return <main className="article-page">
    <nav className="article-nav shell">
      <a className="brand" href="#home">CZH <span>|</span> PKU</a>
      <a className="article-back" href="#blog"><ArrowLeft size={16} /> BACK TO HOME</a>
    </nav>
    <article>
      <header className="article-hero shell">
        <div className="article-meta"><span>{post.category}</span><span>{post.date}</span><span><Clock3 size={13} /> {post.readTime}</span></div>
        <h1>{post.title}</h1>
        <p>{formatInline(post.opening)}</p>
      </header>
      <div className="article-rule shell" />
      <div className="article-body shell">
        <aside><span>ESSAY {post.no}</span><p>{post.excerpt}</p></aside>
        <div className="article-copy">
          {post.sections.map((section) => <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{formatInline(paragraph)}</p>)}
          </section>)}
        </div>
      </div>
    </article>
    <footer className="article-footer">
      <div className="shell"><p>Keep exploring.</p><a href="#blog">ALL STORIES <ArrowUpRight size={17} /></a></div>
    </footer>
  </main>
}

function BlogArchive() {
  return <main className="archive-page">
    <nav className="article-nav shell">
      <a className="brand" href="#home">CZH <span>|</span> PKU</a>
      <a className="article-back" href="#blog"><ArrowLeft size={16} /> BACK TO HOME</a>
    </nav>
    <header className="archive-header shell">
      <p className="kicker">WRITING & REFLECTIONS</p>
      <h1>Ideas in progress,<br /><i>made visible.</i></h1>
      <div className="archive-intro">
        <p>Essays on intelligence, neural signals, learning, and the questions I want to keep following.</p>
        <span>{String(blogPosts.length).padStart(2, '0')} STORIES · 2026—NOW</span>
      </div>
    </header>
    <div className="archive-content shell">
      <div className="archive-grid">
        {blogPosts.map((post) => <a className="archive-card" href={`#/blog/${post.slug}`} key={post.slug}>
          <div className="blog-card-top"><span>{post.no}</span><span>{post.category}</span></div>
          <div><div className="blog-date">{post.date} · {post.readTime}</div><h3>{post.title}</h3><p>{post.excerpt}</p></div>
          <span className="blog-action">READ STORY <ArrowUpRight size={17} /></span>
        </a>)}
      </div>
    </div>
    <footer className="article-footer"><div className="shell"><p>More stories to come.</p><a href="#blog">BACK TO HOME <ArrowUpRight size={17} /></a></div></footer>
  </main>
}

function App() {
  const audioRef = useRef(null)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [activePost, setActivePost] = useState(() => typeof window !== 'undefined' && window.location.hash.startsWith('#/blog/') ? window.location.hash.replace('#/blog/', '') : null)
  const [isArchive, setIsArchive] = useState(() => typeof window !== 'undefined' && window.location.hash === '#/blog')

  useEffect(() => {
    const handleHashChange = () => {
      const slug = window.location.hash.startsWith('#/blog/') ? window.location.hash.replace('#/blog/', '') : null
      setActivePost(slug)
      setIsArchive(window.location.hash === '#/blog')
      if (slug || window.location.hash === '#/blog') window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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

  const selectedPost = blogPosts.find((post) => post.slug === activePost)
  if (selectedPost) return <BlogPost post={selectedPost} />
  if (isArchive) return <BlogArchive />

  return (
    <main>
      <audio ref={audioRef} src="/assets/site-soundtrack.ogg" loop preload="metadata" />
      <section className="hero" id="home">
        <img className="hero-media" src="/neuron-hero.webp" alt="Gold neuron microscopy image" fetchPriority="high" decoding="async" />
        <div className="hero-wash" />
        <nav className="nav shell">
          <a className="brand" href="#home">CZH <span>|</span> PKU</a>
          <div className="nav-links">
            <a href="#about">ABOUT</a><a href="#notes">NOTES</a><a href="#blog">BLOG</a><a href="#strengths">STRENGTHS</a>
            <button className={`music-toggle${isMusicPlaying ? ' is-playing' : ''}`} type="button" onClick={toggleMusic} aria-pressed={isMusicPlaying} aria-label={isMusicPlaying ? 'Pause background music' : 'Play background music'}>
              MUSIC <span className="music-status" aria-hidden="true" />
            </button>
            <a href="#contact">CONTACT</a>
          </div>
          <a className="nav-contact" href="mailto:2500012848@stu.pku.edu.cn">LET'S TALK <ArrowUpRight size={16} /></a>
        </nav>
        <div className="hero-content shell">
          <p className="eyebrow light"><Sparkles size={14} /> ZHUHUAN CHEN'S HOMEPAGE · PKU</p>
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
            <h2>陈主寰<br /><i>Zhuhuan Chen</i></h2>
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

      <section className="blog section shell" id="blog">
        <div className="section-head blog-head">
          <div><div className="section-label"><span>03</span> FROM THE BLOG</div><h2>Ideas in progress,<br /><i>made visible.</i></h2></div>
          <p>Essays on intelligence, neural signals, learning, and the questions I want to keep following.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.slice(0, 3).map((post) => <a className="blog-card" href={`#/blog/${post.slug}`} key={post.slug}>
            <div className="blog-card-top"><span>{post.no}</span><span>{post.category}</span></div>
            <div>
              <div className="blog-date">{post.date} · {post.readTime}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <span className="blog-action">READ STORY <ArrowUpRight size={17} /></span>
          </a>)}
        </div>
        <div className="blog-view-all"><a href="#/blog">VIEW ALL STORIES <ArrowUpRight size={18} /></a></div>
      </section>

      <div className="section-divider shell" aria-hidden="true" />
      <section className="strengths section shell" id="strengths">
        <div className="section-label"><span>04</span> WHAT I BRING</div>
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
          <div className="footer-bottom"><span>ZHUHUAN CHEN © 2026</span><span>BEIJING · CHINA</span><a href="#home">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  )
}

export default App
