<template>
  <div class="paper-site">
    <nav class="nav">
      <div class="nav-logo"><span class="dot" /> <span>{{ t('name') }}</span> / likely</div>
      <div class="nav-right">
        <div class="nav-links">
          <a href="#products">{{ t('nav.products') }}</a>
          <a href="#projects">{{ t('nav.projects') }}</a>
          <a href="#articles">{{ t('nav.articles') }}</a>
          <a href="#contact">{{ t('nav.contact') }}</a>
        </div>
        <div class="lang-switch" role="group" aria-label="language">
          <button
            v-for="l in langOptions"
            :key="l.code"
            :class="{ active: locale === l.code }"
            @click="setLocale(l.code)"
          >{{ l.label }}</button>
        </div>
      </div>
    </nav>

    <div class="wrap">
      <!-- HERO -->
      <section class="hero">
        <div class="portrait-wrap">
          <div class="tape" style="top:-12px; left:28px; transform: rotate(-8deg);" />
          <div class="tape" style="top:-10px; right:22px; transform: rotate(12deg);" />
          <div class="portrait">
            <img src="/avatar.jpeg" alt="孙笑笑" />
            <div class="portrait-caption">{{ t('hero.portraitCaption') }}</div>
          </div>
          <div class="sticker hi">{{ t('hero.hi') }}</div>
        </div>

        <div class="hero-text">
          <div class="hero-eyebrow">{{ t('hero.eyebrow') }}</div>
          <h1>
            <span>{{ t('hero.nameA') }}</span><span class="accent">{{ t('hero.nameB') }}</span><span>{{ t('hero.nameC') }}</span>
            <span class="en-sub">{{ t('hero.nameSub') }}</span>
          </h1>
          <p class="hero-bio">
            <span class="hl">{{ t('hero.bioMain') }}</span><br />
            <span>{{ t('hero.bioBody') }}</span>
            <span v-if="t('hero.bioDim')" class="dim">{{ t('hero.bioDim') }}</span>
          </p>

          <div class="hero-stats">
            <div class="stat"><div class="num red">50+</div><div class="lbl">{{ t('hero.statOss') }}</div></div>
            <div class="stat">
              <div class="num">{{ beeStars }}<span style="font-size: 22px;">★</span></div>
              <div class="lbl">{{ t('hero.statBee') }}</div>
            </div>
            <div class="stat"><div class="num">10+</div><div class="lbl">{{ t('hero.statYears') }}</div></div>
          </div>
        </div>

        <div class="about-note">
          <h3>{{ t('about.title') }}</h3>
          <p>{{ t('about.body') }}</p>
          <p v-if="t('about.bodyEn')" class="en">{{ t('about.bodyEn') }}</p>
        </div>
      </section>

      <svg class="arrow" style="top: 640px; left: 46%; width: 90px; height: 64px; transform: rotate(12deg);" viewBox="0 0 90 64">
        <path d="M5 30 Q 35 5, 80 32" stroke="#1a1814" stroke-width="2.2" fill="none" stroke-linecap="round" />
        <path d="M68 22 L 82 30 L 70 40" stroke="#1a1814" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        <text x="10" y="58" font-family="Bradley Hand, cursive" font-size="15" fill="#8a8173">{{ t('scrollHint') }}</text>
      </svg>

      <!-- PRODUCTS -->
      <section id="products">
        <div class="sec-head visible">
          <h2><span>{{ t('sections.products') }}</span><span class="en-sub">{{ t('sections.productsSub') }}</span></h2>
          <div class="sticker sticker-inline">{{ t('products.familySticker') }}</div>
        </div>
        <div class="products reveal-stagger visible">
          <a class="product" href="https://beecount.youths.cc" target="_blank" rel="noopener">
            <div class="product-arrow">↗</div>
            <div class="product-head">
              <div class="product-logo"><img src="/products/beecount_logo.png" alt="BeeCount" /></div>
              <div>
                <div class="product-name">{{ t('products.beecount.name') }}</div>
                <div class="product-tag">{{ t('products.beecount.tag') }}</div>
              </div>
            </div>
            <p>{{ t('products.beecount.desc') }}</p>
            <div class="product-badges">
              <span class="badge new">{{ t('products.badges.new') }}</span>
              <span class="badge filled">{{ t('products.badges.oss') }}</span>
              <span class="badge">iOS</span>
              <span class="badge">Android</span>
              <span class="badge red">{{ t('products.badges.noAds') }}</span>
            </div>
          </a>

          <a class="product" href="https://beedns.youths.cc" target="_blank" rel="noopener">
            <div class="product-arrow">↗</div>
            <div class="product-head">
              <div class="product-logo"><img src="/products/beedns_logo.png" alt="BeeDNS" /></div>
              <div>
                <div class="product-name">{{ t('products.beedns.name') }}</div>
                <div class="product-tag">{{ t('products.beedns.tag') }}</div>
              </div>
            </div>
            <p>{{ t('products.beedns.desc') }}</p>
            <div class="product-badges">
              <span class="badge filled">iOS</span>
              <span class="badge filled">Android</span>
              <span class="badge red">{{ t('products.badges.noAds') }}</span>
            </div>
          </a>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="projects">
        <div class="sec-head visible">
          <h2><span>{{ t('sections.projects') }}</span><span class="en-sub">{{ t('sections.projectsSub') }}</span></h2>
          <div class="sticker sticker-inline" style="background: var(--sun); transform: rotate(-3deg);">{{ topSticker }}</div>
        </div>
        <div class="projects reveal-stagger visible">
          <a
            v-for="p in repos"
            :key="p.repo"
            class="project"
            :href="`https://github.com/${p.repo}`"
            target="_blank"
            rel="noopener"
          >
            <div class="project-head">
              <div class="project-name">{{ p.name }}</div>
              <div class="project-stars">★ {{ formatK(p.stars) }}</div>
            </div>
            <div class="project-desc">{{ t(`projects.desc.${p.key}`) }}</div>
            <div class="project-foot">
              <span class="project-lang" :class="p.langCls">{{ p.lang }}</span>
              <span class="project-forks">{{ p.forks === null ? 'CLI' : `⑂ ${formatK(p.forks)}` }}</span>
            </div>
          </a>

          <a class="project project-more" href="https://github.com/TNT-Likely?tab=repositories" target="_blank" rel="noopener">
            {{ t('projects.seeAll') }}
          </a>
        </div>
      </section>

      <!-- ARTICLES + CONTACT -->
      <div class="two-col">
        <section id="articles">
          <div class="sec-head visible" style="margin-top: 32px;">
            <h2 style="font-size: 48px;"><span>{{ t('sections.articles') }}</span><span class="en-sub" style="font-size: 22px;">{{ t('sections.articlesSub') }}</span></h2>
          </div>
          <div class="platform-links reveal-stagger visible">
            <a class="platform-card zh" href="https://www.zhihu.com/people/likely-10" target="_blank" rel="noopener">
              <div class="platform-badge">知乎</div>
              <div class="platform-name">Zhihu</div>
              <div class="platform-meta">{{ t('articles.zhihuMeta') }}</div>
              <div class="platform-arrow">→</div>
            </a>
            <a class="platform-card jj" href="https://juejin.cn/user/2629687543598200" target="_blank" rel="noopener">
              <div class="platform-badge">掘金</div>
              <div class="platform-name">Juejin</div>
              <div class="platform-meta">{{ t('articles.juejinMeta') }}</div>
              <div class="platform-arrow">→</div>
            </a>
          </div>
          <div class="articles-note">{{ t('articles.note') }}</div>
        </section>

        <section id="contact">
          <div class="sec-head visible" style="margin-top: 32px;">
            <h2 style="font-size: 48px;"><span>{{ t('sections.contact') }}</span><span class="en-sub" style="font-size: 22px;">{{ t('sections.contactSub') }}</span></h2>
          </div>
          <p class="contact-body">{{ t('contact.body') }}</p>
          <div class="social-grid reveal-stagger visible">
            <a class="social" href="https://github.com/TNT-Likely" target="_blank" rel="noopener">
              <div class="social-icon">GH</div> GitHub
            </a>
            <a class="social" href="https://xhslink.com/m/8K1ekg7EFOq" target="_blank" rel="noopener">
              <div class="social-icon">小</div> <span>{{ t('contact.xiaohongshu') }}</span>
            </a>
            <a class="social" href="https://v.douyin.com/YG7tUweYYyQ/" target="_blank" rel="noopener">
              <div class="social-icon">抖</div> <span>{{ t('contact.douyin') }}</span>
            </a>
          </div>
        </section>
      </div>
    </div>

    <footer class="foot">
      <div class="foot-inner">
        <div class="foot-mark">
          <span class="foot-dot" />
          <span class="foot-sig">孙笑笑 · likely</span>
        </div>
        <div class="foot-copy">{{ t('footer.copy') }}</div>
        <a class="foot-beian" href="https://beian.miit.gov.cn" target="_blank" rel="noopener">浙ICP备2025214907号-1</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()

const langOptions = [
  { code: 'zh-CN', label: '中' },
  { code: 'en', label: 'EN' }
]

interface Repo {
  key: string
  name: string
  repo: string
  stars: number
  forks: number | null
  lang: string
  langCls: string
}

const repos = ref<Repo[]>([
  { key: 'beecount', name: 'BeeCount', repo: 'TNT-Likely/BeeCount', stars: 1400, forks: 195, lang: 'Dart', langCls: 'dart' },
  { key: 'panwatch', name: 'PanWatch', repo: 'TNT-Likely/PanWatch', stars: 259, forks: 77, lang: 'Python', langCls: 'py' },
  { key: 'xplayer', name: 'xplayer', repo: 'TNT-Likely/xplayer', stars: 99, forks: 19, lang: 'Dart', langCls: 'dart' },
  { key: 'lumina', name: 'Lumina', repo: 'TNT-Likely/Lumina', stars: 19, forks: 3, lang: 'TypeScript', langCls: 'ts' },
  { key: 'killport', name: 'killport', repo: 'TNT-Likely/killport', stars: 6, forks: null, lang: 'Go', langCls: 'go' }
])

const beeStars = computed(() => formatK(repos.value[0]?.stars ?? 1400))
const topSticker = computed(() => `BeeCount ★ ${formatK(repos.value[0]?.stars ?? 1400)}`)

function formatK(n: number | null) {
  if (n == null) return '—'
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k'
  return String(n)
}

async function fetchRepo(slug: string): Promise<{ stars: number; forks: number } | null> {
  try {
    const key = 'gh:' + slug
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null
    const cached = raw ? JSON.parse(raw) : null
    if (cached && Date.now() - cached.t < 30 * 60 * 1000) return cached.d
    const r = await fetch('https://api.github.com/repos/' + slug)
    if (!r.ok) return null
    const j = await r.json()
    const d = { stars: j.stargazers_count, forks: j.forks_count }
    try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), d })) } catch {}
    return d
  } catch {
    return null
  }
}

onMounted(async () => {
  // live update stars/forks
  await Promise.all(
    repos.value.map(async (r, i) => {
      const d = await fetchRepo(r.repo)
      if (!d) return
      repos.value[i] = { ...r, stars: d.stars, forks: r.forks === null ? null : d.forks }
    })
  )

  // subtle cursor-follow tilt
  document.querySelectorAll('.paper-site .stat, .paper-site .product, .paper-site .project').forEach((el) => {
    const node = el as HTMLElement
    node.addEventListener('mousemove', (e: MouseEvent) => {
      const r = node.getBoundingClientRect()
      const dx = (e.clientX - r.left - r.width / 2) / r.width
      const dy = (e.clientY - r.top - r.height / 2) / r.height
      node.style.transform = `rotate(0deg) translate(${dx * 4}px, ${dy * 4}px) translateY(-4px)`
    })
    node.addEventListener('mouseleave', () => { node.style.transform = '' })
  })

  // smooth anchor scroll
  document.querySelectorAll<HTMLAnchorElement>('.paper-site a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href') || ''
      if (id.length > 1) {
        const target = document.querySelector(id) as HTMLElement | null
        if (target) {
          e.preventDefault()
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' })
        }
      }
    })
  })
})

useHead({
  title: '孙笑笑 · Sun Xiaoxiao — Fullstack Engineer & OSS Maker',
  meta: [
    { name: 'description', content: '孙笑笑的个人网站 — fullstack engineer, 做开源, 做产品' }
  ]
})
</script>

<style lang="scss">
.paper-site {
  --paper: #f4ead5;
  --paper-2: #fef4a8;
  --ink: #1a1814;
  --ink-2: #3a362e;
  --muted: #8a8173;
  --pink: #ff8ba7;
  --mint: #b8e0d2;
  --sun: #ffd166;
  --sky: #9ecaff;
  --red: #e85d4a;
  --amber: #d97706;

  background: var(--paper);
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  min-height: 100vh;
  overflow-x: hidden;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(0,0,0,0.045) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 60%, rgba(0,0,0,0.03) 0 1px, transparent 1px),
    radial-gradient(circle at 40% 85%, rgba(0,0,0,0.025) 0 1px, transparent 1px);
  background-size: 12px 12px, 18px 18px, 22px 22px;

  a { color: inherit; text-decoration: none; }

  .wrap { max-width: 1200px; margin: 0 auto; padding: 48px 56px 80px; position: relative; }

  .nav {
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px 56px; max-width: 1200px; margin: 0 auto;
    font-family: "SF Mono", Menlo, monospace; font-size: 12px;
    gap: 16px;
  }
  .nav-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; }
  .nav-logo .dot { width: 10px; height: 10px; background: var(--red); border-radius: 50%; animation: ps-pulse 2.2s infinite; }
  @keyframes ps-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .55; transform: scale(.85); } }
  .nav-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
  .nav-links { display: flex; gap: 6px; }
  .nav-links a { padding: 4px 10px; border-radius: 14px; transition: all .2s; }
  .nav-links a:hover { background: var(--ink); color: var(--paper); transform: rotate(-1deg); }

  .lang-switch {
    display: inline-flex; align-items: center;
    border: 1.5px solid var(--ink); border-radius: 16px; overflow: hidden;
    font-family: "SF Mono", Menlo, monospace; font-size: 11px; font-weight: 700;
    background: #fff; cursor: pointer; margin-left: 12px;
  }
  .lang-switch button {
    border: none; background: transparent; padding: 5px 12px;
    font: inherit; color: var(--ink); cursor: pointer; transition: all .15s;
  }
  .lang-switch button.active { background: var(--ink); color: var(--paper); }

  .hero { display: grid; grid-template-columns: 360px 1fr; gap: 64px; align-items: start; padding-top: 32px; position: relative; }

  .portrait-wrap { position: relative; transform: rotate(-2.2deg); }
  .tape {
    position: absolute; width: 78px; height: 24px;
    background: rgba(255, 232, 120, 0.6);
    border: 1px solid rgba(180,150,40,0.15);
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    z-index: 3;
  }
  .portrait {
    width: 100%; aspect-ratio: 1 / 1;
    padding: 12px 12px 60px;
    background: #fff;
    box-shadow: 6px 8px 0 rgba(0,0,0,0.1), 0 12px 40px rgba(0,0,0,0.06);
    border: 1px solid #e4dcc5;
    position: relative;
  }
  .portrait img { width: 100%; aspect-ratio: 1 / 1; object-fit: cover; filter: contrast(1.02) saturate(0.95); display: block; }
  .portrait-caption { font-family: "Bradley Hand", cursive; font-size: 18px; color: var(--ink-2); text-align: center; margin-top: 10px; }
  .sticker {
    display: inline-block;
    padding: 7px 14px;
    background: var(--sun);
    border: 2px solid var(--ink);
    border-radius: 22px;
    font-family: "Bradley Hand", cursive;
    font-weight: 700; font-size: 18px;
    color: var(--ink);
    box-shadow: 2px 2px 0 var(--ink);
    transform: rotate(-4deg);
    position: absolute;
  }
  .sticker.hi { background: var(--pink); bottom: -14px; left: -20px; transform: rotate(-8deg); z-index: 4; }

  .hero-text { padding-top: 16px; }
  .hero-eyebrow {
    font-family: "SF Mono", Menlo, monospace; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase;
    color: var(--red); display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
  }
  .hero-eyebrow::after { content: ''; flex: 1; height: 1.5px; background: var(--ink); opacity: .2; }
  .hero h1 {
    font-family: Georgia, serif;
    font-size: clamp(72px, 10vw, 128px); line-height: .88; letter-spacing: -3px;
    font-weight: 700;
  }
  .hero h1 .accent { color: var(--red); font-style: italic; display: inline-block; transform: rotate(-2deg); }
  .hero h1 .en-sub { display: block; font-family: "Bradley Hand", cursive; font-size: 0.33em; color: var(--muted); margin-top: 14px; letter-spacing: 0; transform: rotate(-1deg); transform-origin: left; }

  .hero-bio {
    margin-top: 28px; font-size: 18px; line-height: 1.65; max-width: 440px;
    font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }
  .hero-bio .hl { background: linear-gradient(transparent 60%, var(--sun) 60% 92%, transparent 92%); padding: 0 2px; }
  .hero-bio .dim { color: var(--muted); font-size: 15px; margin-top: 8px; display: block; }

  .hero-stats { display: flex; gap: 20px; margin-top: 32px; flex-wrap: wrap; }
  .stat {
    padding: 12px 18px 10px;
    border: 2px solid var(--ink); border-radius: 8px;
    background: #fff;
    box-shadow: 3px 3px 0 var(--ink);
    transition: transform .2s;
  }
  .stat:nth-child(1) { transform: rotate(-1.5deg); }
  .stat:nth-child(2) { transform: rotate(1deg); }
  .stat:nth-child(3) { transform: rotate(-0.5deg); }
  .stat:hover { transform: rotate(0) translateY(-4px); }
  .stat .num { font-family: Georgia, serif; font-size: 36px; font-weight: 800; line-height: 1; letter-spacing: -1px; }
  .stat .num.red { color: var(--red); }
  .stat .lbl { font-family: "SF Mono", monospace; font-size: 10px; letter-spacing: 1.5px; color: var(--muted); text-transform: uppercase; margin-top: 4px; }

  .about-note {
    position: absolute; top: 40px; right: -10px;
    width: 260px;
    padding: 20px 22px 22px;
    background: var(--paper-2);
    border: 2px solid var(--ink);
    border-radius: 6px;
    box-shadow: 4px 5px 0 rgba(0,0,0,0.18);
    transform: rotate(3deg);
    z-index: 2;
  }
  .about-note h3 { font-family: "Bradley Hand", cursive; font-size: 24px; margin-bottom: 8px; }
  .about-note p { font-size: 13px; line-height: 1.6; font-family: -apple-system, system-ui, sans-serif; }
  .about-note .en { color: var(--muted); margin-top: 8px; }

  .arrow { position: absolute; pointer-events: none; }

  .sec-head { display: flex; align-items: baseline; gap: 20px; margin: 96px 0 36px; flex-wrap: wrap; }
  .sec-head h2 {
    font-family: Georgia, serif; font-size: 64px; font-weight: 800; letter-spacing: -1.5px; line-height: 1;
  }
  .sec-head h2 .en-sub { font-family: "Bradley Hand", cursive; font-size: 30px; color: var(--muted); margin-left: 12px; font-weight: 400; }
  .sec-head .sticker-inline { position: static; transform: rotate(3deg); background: var(--mint); }

  .products { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .product {
    position: relative;
    background: #fff;
    border: 2px solid var(--ink);
    border-radius: 10px;
    padding: 24px;
    box-shadow: 6px 8px 0 var(--ink);
    transition: all .25s cubic-bezier(.2,.7,.3,1);
    color: inherit;
    overflow: hidden;
    display: block;
  }
  .product:nth-child(1) { transform: rotate(-1deg); background: linear-gradient(135deg, #fff 0%, #fff7d6 100%); }
  .product:nth-child(2) { transform: rotate(0.8deg); background: linear-gradient(135deg, #fff 0%, #e6f4f0 100%); }
  .product:hover { transform: rotate(0) translateY(-6px); box-shadow: 8px 14px 0 var(--ink); }
  .product-head { display: flex; gap: 16px; align-items: center; margin-bottom: 16px; }
  .product-logo {
    width: 64px; height: 64px; border-radius: 14px;
    background: #fff; border: 2px solid var(--ink);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
  }
  .product-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .product-name { font-family: Georgia, serif; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
  .product-tag { font-family: "SF Mono", monospace; font-size: 11px; letter-spacing: 1.5px; color: var(--muted); text-transform: uppercase; }
  .product p { font-size: 14px; line-height: 1.55; color: var(--ink-2); margin-bottom: 16px; min-height: 44px; }
  .product-badges { display: flex; gap: 8px; flex-wrap: wrap; }
  .badge {
    font-family: "SF Mono", monospace; font-size: 10px; letter-spacing: 1px;
    padding: 4px 10px; border: 1.5px solid var(--ink); border-radius: 12px;
  }
  .badge.filled { background: var(--ink); color: var(--paper); }
  .badge.red { background: var(--red); color: #fff; border-color: var(--red); }
  .badge.new { background: var(--sun); border-color: var(--ink); }
  .product-arrow {
    position: absolute; top: 20px; right: 20px;
    width: 32px; height: 32px; border-radius: 50%;
    border: 2px solid var(--ink); display: flex; align-items: center; justify-content: center;
    font-family: "Bradley Hand", cursive; font-size: 18px;
    transition: all .2s;
  }
  .product:hover .product-arrow { background: var(--ink); color: var(--paper); transform: rotate(-45deg); }

  .projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .project {
    background: #fff;
    border: 2px solid var(--ink);
    border-radius: 8px;
    padding: 18px;
    box-shadow: 3px 4px 0 var(--ink);
    transition: all .2s;
    display: flex; flex-direction: column;
    min-height: 170px;
    position: relative;
    color: inherit;
  }
  .project:nth-child(odd) { transform: rotate(-1deg); }
  .project:nth-child(even) { transform: rotate(1.2deg); }
  .project:nth-child(3n) { transform: rotate(-0.6deg); }
  .project:hover { transform: rotate(0) translateY(-4px); box-shadow: 5px 7px 0 var(--ink); }
  .project-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 8px; }
  .project-name { font-family: "SF Mono", monospace; font-size: 16px; font-weight: 700; letter-spacing: -0.3px; }
  .project-stars { font-family: "Bradley Hand", cursive; font-size: 18px; color: var(--amber); white-space: nowrap; }
  .project-desc { font-size: 13px; line-height: 1.5; color: var(--ink-2); flex: 1; margin-bottom: 12px; }
  .project-foot { display: flex; justify-content: space-between; align-items: center; }
  .project-lang { font-family: "SF Mono", monospace; font-size: 10px; padding: 3px 8px; background: var(--ink); color: var(--paper); border-radius: 3px; letter-spacing: 0.5px; }
  .project-lang.ts { background: #3178c6; }
  .project-lang.dart { background: #00b4ab; }
  .project-lang.py { background: #3572a5; }
  .project-lang.go { background: #00add8; }
  .project-forks { font-family: "SF Mono", monospace; font-size: 11px; color: var(--muted); }

  .project-more {
    align-items: center; justify-content: center;
    background: transparent; border: 2px dashed var(--ink);
    font-family: "Bradley Hand", cursive; font-size: 20px; text-decoration: underline wavy; text-underline-offset: 4px;
    transition: all .2s; text-align: center;
  }
  .project-more:hover { background: var(--ink); color: var(--paper); text-decoration: none; transform: rotate(0) scale(1.02); }

  .platform-links {
    display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 8px;
  }
  .platform-card {
    position: relative;
    padding: 26px 24px 22px;
    background: #fff;
    border: 2.5px solid var(--ink);
    border-radius: 14px;
    box-shadow: 5px 5px 0 var(--ink);
    color: var(--ink);
    transition: transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s;
    display: flex; flex-direction: column; gap: 4px;
    overflow: hidden;
  }
  .platform-card.zh { transform: rotate(-1deg); }
  .platform-card.jj { transform: rotate(0.8deg); }
  .platform-card::before {
    content: ''; position: absolute; inset: auto -20% -30% auto;
    width: 140px; height: 140px; border-radius: 50%;
    opacity: .18;
  }
  .platform-card.zh::before { background: #0066ff; }
  .platform-card.jj::before { background: #1e80ff; }
  .platform-card:hover {
    transform: rotate(0deg) translate(-2px, -2px);
    box-shadow: 7px 7px 0 var(--ink);
  }
  .platform-badge {
    display: inline-block; align-self: flex-start;
    font-family: "Bradley Hand", cursive; font-weight: 700; font-size: 22px;
    padding: 3px 12px; border-radius: 20px; color: #fff;
    margin-bottom: 8px;
    transform: rotate(-3deg);
  }
  .platform-card.zh .platform-badge { background: #0066ff; }
  .platform-card.jj .platform-badge { background: #1e80ff; }
  .platform-name {
    font-family: Georgia, serif; font-size: 32px; font-weight: 700;
    letter-spacing: -0.5px; line-height: 1;
  }
  .platform-meta {
    font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
    color: var(--ink-2); margin-top: 6px;
  }
  .platform-arrow {
    position: absolute; bottom: 16px; right: 20px;
    font-family: Georgia, serif; font-size: 28px;
    color: var(--red);
    transition: transform .25s;
  }
  .platform-card:hover .platform-arrow { transform: translateX(6px); }

  .articles-note { font-size: 11px; color: var(--muted); margin-top: 14px; font-family: 'SF Mono', monospace; }
  .contact-body { font-family: -apple-system, system-ui, sans-serif; font-size: 14px; line-height: 1.6; max-width: 380px; color: var(--ink-2); }

  .social-grid { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 24px; }
  .social {
    padding: 14px 20px;
    border: 2px solid var(--ink);
    border-radius: 50px;
    background: #fff;
    box-shadow: 3px 3px 0 var(--ink);
    transition: all .2s;
    display: flex; align-items: center; gap: 10px;
    font-family: -apple-system, system-ui, sans-serif;
    font-size: 15px; font-weight: 600;
  }
  .social:nth-child(1) { background: var(--sun); transform: rotate(-2deg); }
  .social:nth-child(2) { background: var(--pink); transform: rotate(1.5deg); }
  .social:nth-child(3) { background: var(--mint); transform: rotate(-1deg); }
  .social:hover { transform: rotate(0) translateY(-4px) scale(1.05); box-shadow: 5px 5px 0 var(--ink); }
  .social-icon {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--ink); color: var(--paper);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-weight: 700;
  }

  .two-col { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; margin-top: 40px; align-items: start; }

  .foot {
    margin-top: 120px;
    padding: 40px 48px 32px;
    border-top: 2.5px solid var(--ink);
    background:
      repeating-linear-gradient(
        -45deg,
        transparent 0 14px,
        rgba(26,24,20,0.025) 14px 15px
      ),
      var(--paper);
    position: relative;
  }
  .foot::before {
    content: ''; position: absolute; left: 0; right: 0; top: -8px;
    height: 10px;
    background-image:
      radial-gradient(circle at 8px 8px, var(--paper) 7px, transparent 7.5px);
    background-size: 16px 10px; background-position: 0 -5px;
  }
  .foot-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
    font-family: "SF Mono", Menlo, monospace; font-size: 11px; letter-spacing: 0.8px;
    color: var(--ink-2);
  }
  .foot-mark { display: flex; align-items: center; gap: 10px; font-weight: 600; color: var(--ink); }
  .foot-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 0 2px var(--paper), 0 0 0 3.5px var(--ink);
    animation: ps-pulseDot 2.4s ease-in-out infinite;
  }
  @keyframes ps-pulseDot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.25); opacity: .8; }
  }
  .foot-sig { font-family: "Bradley Hand", cursive; font-weight: 700; font-size: 16px; letter-spacing: 0; }
  .foot-copy { text-align: center; flex: 1; min-width: 200px; opacity: .8; }
  .foot-beian { color: var(--muted); text-decoration: none; transition: color .2s; border-bottom: 1px dashed transparent; padding-bottom: 1px; }
  .foot-beian:hover { color: var(--ink); border-bottom-color: var(--ink); }

  @media (max-width: 1080px) {
    .wrap, .nav { padding-left: 32px; padding-right: 32px; }
    .hero { grid-template-columns: 300px 1fr; gap: 40px; }
    .about-note { width: 230px; right: -4px; top: 20px; }
    .projects { grid-template-columns: repeat(2, 1fr); }
    .two-col { grid-template-columns: 1fr; gap: 40px; }
    .hero h1 { font-size: clamp(56px, 9vw, 96px); }
    .sec-head h2 { font-size: 52px; }
  }

  @media (max-width: 780px) {
    .wrap { padding: 32px 22px 60px; }
    .nav { padding: 14px 22px; flex-wrap: wrap; gap: 10px; }
    .nav-links { gap: 2px; }
    .nav-links a { padding: 4px 8px; font-size: 11px; }
    .hero { grid-template-columns: 1fr; gap: 28px; padding-top: 8px; }
    .portrait-wrap { max-width: 280px; margin: 0 auto; }
    .about-note {
      position: relative; top: 0; right: 0; width: 100%;
      transform: rotate(-1deg); margin-top: 24px;
    }
    .hero h1 { font-size: clamp(56px, 13vw, 88px); letter-spacing: -1.5px; }
    .hero h1 .en-sub { font-size: 0.28em; margin-top: 8px; }
    .hero-bio { font-size: 16px; max-width: 100%; }
    .hero-stats { gap: 12px; }
    .stat { padding: 10px 14px 8px; flex: 1; min-width: 90px; }
    .stat .num { font-size: 28px; }
    .stat .lbl { font-size: 9px; }
    .sec-head { margin: 64px 0 24px; gap: 12px; }
    .sec-head h2 { font-size: 40px; }
    .sec-head h2 .en-sub { font-size: 22px; margin-left: 8px; }
    .products { grid-template-columns: 1fr; gap: 22px; }
    .products .product:nth-child(n) { transform: rotate(-0.6deg); }
    .projects { grid-template-columns: 1fr 1fr; gap: 14px; }
    .project { padding: 14px; min-height: 150px; }
    .project-name { font-size: 14px; }
    .project-desc { font-size: 12px; }
    .arrow { display: none; }
    .foot { padding: 28px 20px 24px; margin-top: 72px; }
    .foot-inner { font-size: 10px; }
    .foot-copy { text-align: left; flex-basis: 100%; }
  }

  @media (max-width: 480px) {
    .wrap { padding: 24px 18px 48px; }
    .nav { padding: 12px 18px; justify-content: center; }
    .nav-logo { font-size: 11px; }
    .nav-links { order: 3; width: 100%; justify-content: center; margin-top: 6px; }
    .lang-switch { margin-left: 0; }
    .hero h1 { font-size: 64px; }
    .hero-eyebrow { font-size: 10px; letter-spacing: 1.8px; }
    .hero-stats { gap: 8px; }
    .stat { padding: 8px 10px 6px; min-width: 0; }
    .stat .num { font-size: 22px; }
    .sec-head h2 { font-size: 32px; }
    .sec-head h2 .en-sub { font-size: 18px; display: block; margin-left: 0; margin-top: 4px; }
    .projects { grid-template-columns: 1fr; }
    .product-head { flex-wrap: wrap; }
    .product-logo { width: 52px; height: 52px; }
    .product-name { font-size: 22px; }
    .social { padding: 12px 16px; font-size: 13px; }
    .about-note h3 { font-size: 20px; }
    .about-note p { font-size: 12px; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}
</style>
