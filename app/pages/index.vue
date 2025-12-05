<template>
  <div class="page-wrapper">
    <!-- Animated background -->
    <div class="animated-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="particles">
        <div class="particle" v-for="i in 50" :key="i" :style="getParticleStyle(i)"></div>
      </div>
      <div class="grid-bg"></div>
    </div>

    <!-- Floating Controls -->
    <div class="floating-controls">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>

    <!-- Hero Section with 3D Effect -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge fade-in">
            <Icon name="mdi:code-tags" />
            <span>{{ t('hero.title') }}</span>
          </div>

          <h1 class="hero-title fade-in-up" ref="heroTitle">
            <span class="hero-greeting">{{ t('hero.greeting') }}</span>
            <br />
            <span class="hero-name gradient-text glow-text">{{ t('hero.name') }}</span>
          </h1>

          <p class="hero-description fade-in-up">{{ t('hero.description') }}</p>
          <p class="hero-subtitle fade-in-up">{{ t('hero.subtitle') }}</p>

          <!-- Stats -->
          <div class="hero-stats fade-in-up">
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">开源项目</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">1K+</div>
              <div class="stat-label">Github Stars</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">年开发经验</div>
            </div>
          </div>

          <div class="hero-cta fade-in-up">
            <a href="#projects" class="btn btn-primary">
              <Icon name="mdi:rocket-launch" />
              <span>{{ t('projects.title') }}</span>
              <Icon name="mdi:arrow-right" class="arrow" />
            </a>
            <a href="#social" class="btn btn-glass">
              <Icon name="mdi:heart" />
              <span>{{ t('social.title') }}</span>
            </a>
          </div>

          <!-- Scroll Indicator -->
          <div class="scroll-indicator">
            <Icon name="mdi:mouse" />
            <span>{{ t('footer.scrollDown') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section with Cards -->
    <section id="about" class="section about-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('nav.about') }}</span>
          <h2 class="section-title">{{ t('about.title') }}</h2>
          <p class="section-subtitle">{{ t('about.description') }}</p>
        </div>

        <div class="feature-grid">
          <div
            class="feature-card glass"
            v-for="(feature, i) in features"
            :key="i"
            :style="{ animationDelay: `${i * 0.1}s` }"
          >
            <div class="feature-icon">
              <Icon :name="feature.icon" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('projects.tag') }}</span>
          <h2 class="section-title">{{ t('projects.title') }}</h2>
        </div>
        <GithubProjects username="TNT-Likely" />
      </div>
    </section>

    <!-- Social Section with Hover Effects -->
    <section id="social" class="section social-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('social.tag') }}</span>
          <h2 class="section-title">{{ t('social.title') }}</h2>
        </div>

        <div class="social-grid">
          <a
            href="https://github.com/TNT-Likely"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card github"
          >
            <div class="social-card-bg"></div>
            <Icon name="mdi:github" class="social-icon" />
            <div class="social-info">
              <h3 class="social-name">{{ t('social.github') }}</h3>
              <p class="social-desc">{{ t('social.githubDesc') }}</p>
            </div>
            <Icon name="mdi:arrow-top-right" class="social-arrow" />
          </a>

          <a
            href="https://xhslink.com/m/8K1ekg7EFOq"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card xiaohongshu"
          >
            <div class="social-card-bg"></div>
            <Icon name="mdi:book-open-page-variant" class="social-icon" />
            <div class="social-info">
              <h3 class="social-name">{{ t('social.xiaohongshu') }}</h3>
              <p class="social-desc">{{ t('social.xiaohongshuDesc') }}</p>
            </div>
            <Icon name="mdi:arrow-top-right" class="social-arrow" />
          </a>

          <a
            href="https://v.douyin.com/YG7tUweYYyQ/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card douyin"
          >
            <div class="social-card-bg"></div>
            <Icon name="mdi:music-note" class="social-icon" />
            <div class="social-info">
              <h3 class="social-name">{{ t('social.douyin') }}</h3>
              <p class="social-desc">{{ t('social.douyinDesc') }}</p>
            </div>
            <Icon name="mdi:arrow-top-right" class="social-arrow" />
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <span class="logo-icon">⚡</span>
            <span class="logo-text gradient-text">{{ t('hero.name') }}</span>
          </div>
          <p class="footer-text">
            &copy; {{ new Date().getFullYear() }} {{ t('hero.name') }}. {{ t('footer.madeWith') }}
          </p>
          <div class="footer-links">
            <a href="#about">{{ t('nav.about') }}</a>
            <a href="#projects">{{ t('nav.projects') }}</a>
            <a href="#social">{{ t('nav.social') }}</a>
          </div>
          <div class="footer-beian">
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
              浙ICP备2025214907号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const features = [
  {
    icon: 'mdi:code-braces',
    title: t('features.cleanCode'),
    desc: t('features.cleanCodeDesc')
  },
  {
    icon: 'mdi:rocket-launch',
    title: t('features.fastPerformance'),
    desc: t('features.fastPerformanceDesc')
  },
  {
    icon: 'mdi:palette',
    title: t('features.beautifulDesign'),
    desc: t('features.beautifulDesignDesc')
  },
  {
    icon: 'mdi:lightning-bolt',
    title: t('features.innovation'),
    desc: t('features.innovationDesc')
  }
]

// Particle animation styles
const getParticleStyle = (i: number) => {
  const size = Math.random() * 4 + 1
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * -20
  const x = Math.random() * 100
  const y = Math.random() * 100

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    opacity: Math.random() * 0.5 + 0.2
  }
}

// 3D tilt effect on hero title
const heroTitle = ref<HTMLElement | null>(null)

onMounted(() => {
  if (heroTitle.value) {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroTitle.value!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      heroTitle.value!.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      heroTitle.value!.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    heroTitle.value.addEventListener('mousemove', handleMouseMove)
    heroTitle.value.addEventListener('mouseleave', handleMouseLeave)
  }
})

useHead({
  title: '孙笑笑 - 全栈开发者 & 开源爱好者',
  meta: [
    { name: 'description', content: '孙笑笑的个人网站，全栈开发者，10+年开发经验，热爱开源和技术分享' }
  ]
})
</script>

<style scoped lang="scss">
.page-wrapper {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

// Animated Background
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--color-bg);
}

// Grid Background
.grid-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.4;
  animation: gridMove 20s linear infinite;

  .dark & {
    background-image:
      linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
    opacity: 0.6;
  }
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

// Particles
.particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.6), transparent);
  border-radius: 50%;
  pointer-events: none;
  animation: particleFloat 15s infinite ease-in-out;

  .dark & {
    background: radial-gradient(circle, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.5), transparent);
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.8);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-100px) translateX(50px);
  }
  50% {
    transform: translateY(-50px) translateX(-50px);
  }
  75% {
    transform: translateY(-150px) translateX(100px);
  }
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;

  .dark & {
    opacity: 0.4;
    filter: blur(120px);
  }
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
  bottom: -10%;
  right: -10%;
  animation-delay: 2s;
}

.orb-3 {
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
  top: 40%;
  left: 40%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

// Floating Controls
.floating-controls {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 1s ease-out 0.5s backwards;

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    gap: 0.75rem;
  }
}

// Hero Section
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
  border: 2px solid var(--color-primary);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  animation-delay: 0.2s;
  box-shadow:
    0 10px 30px rgba(6, 182, 212, 0.2),
    0 0 40px rgba(6, 182, 212, 0.1);
  animation: pulse 3s ease-in-out infinite;

  .dark & {
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15));
    box-shadow:
      0 10px 30px rgba(6, 182, 212, 0.3),
      0 0 50px rgba(6, 182, 212, 0.2);
  }
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  animation-delay: 0.4s;
  transition: transform 0.3s ease;
  cursor: default;
  letter-spacing: -0.02em;
}

.glow-text {
  text-shadow:
    0 0 10px rgba(6, 182, 212, 0.3),
    0 0 20px rgba(6, 182, 212, 0.2),
    0 0 30px rgba(6, 182, 212, 0.1);
  animation: glow 2s ease-in-out infinite;

  .dark & {
    text-shadow:
      0 0 20px rgba(6, 182, 212, 0.8),
      0 0 40px rgba(6, 182, 212, 0.6),
      0 0 60px rgba(6, 182, 212, 0.4),
      0 0 80px rgba(6, 182, 212, 0.2);
  }
}

@keyframes glow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}

.hero-greeting {
  display: block;
  font-size: 0.5em;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.hero-name {
  display: block;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #0ea5e9 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 6s ease infinite;
}

.hero-description {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: var(--color-text);
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.7;
  animation-delay: 0.6s;
  font-weight: 500;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--color-text-secondary);
  max-width: 650px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  animation-delay: 0.8s;
  font-weight: 400;
}

// Hero Stats - Compact inline design
.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 2rem;
  margin: 2rem auto 2.5rem;
  animation-delay: 1s;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
  border: 2px solid rgba(6, 182, 212, 0.2);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--color-primary);
    box-shadow:
      0 8px 25px rgba(6, 182, 212, 0.3),
      0 0 30px rgba(6, 182, 212, 0.2);
  }

  .dark & {
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15));
    border-color: rgba(6, 182, 212, 0.3);
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.6rem 1.5rem;
    margin: 1.5rem auto 2rem;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-divider {
  width: 1px;
  height: 2rem;
  background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.5), transparent);

  @media (max-width: 768px) {
    height: 1.5rem;
  }
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.2;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.stat-label {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-top: 0.2rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation-delay: 1.2s;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:active::after {
    width: 300px;
    height: 300px;
  }

  .arrow {
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &:hover .arrow {
    transform: translateX(8px) rotate(45deg);
  }
}

.btn-primary {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: white;
  box-shadow:
    0 10px 30px rgba(6, 182, 212, 0.3),
    0 0 40px rgba(6, 182, 212, 0.2);
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow:
      0 20px 50px rgba(6, 182, 212, 0.5),
      0 0 60px rgba(6, 182, 212, 0.3);
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }
}

.btn-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid var(--color-border);
  color: var(--color-text);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(6, 182, 212, 0.1);
    border-color: var(--color-primary);
    transform: translateY(-5px) scale(1.05);
    box-shadow:
      0 15px 40px rgba(6, 182, 212, 0.2),
      0 0 30px rgba(6, 182, 212, 0.1);
  }

  .dark & {
    background: rgba(15, 23, 42, 0.5);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  animation: bounce 2s infinite;

  @media (max-width: 768px) {
    display: none;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

// Sections
.section {
  padding: 8rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-text), var(--color-text-secondary));
  -webkit-background-clip: text;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

// Feature Grid
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  padding: 2.5rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: default;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out backwards;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-15px) scale(1.05) rotateX(5deg);
    box-shadow:
      0 20px 60px rgba(6, 182, 212, 0.3),
      0 0 40px rgba(6, 182, 212, 0.1);

    &::before {
      width: 300px;
      height: 300px;
    }

    .feature-icon {
      transform: scale(1.2) rotate(360deg);
      box-shadow: 0 0 30px rgba(6, 182, 212, 0.6);
    }
  }
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border-radius: 20px;
  transition: all 0.5s ease;
  position: relative;
  z-index: 1;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.feature-desc {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

// Social Grid
.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.social-card {
  position: relative;
  padding: 3rem;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.1));
    opacity: 0;
    transition: opacity 0.4s;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(6, 182, 212, 0.3),
      transparent 60deg
    );
    animation: rotate 4s linear infinite;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-20px) scale(1.05);
    box-shadow:
      0 25px 80px rgba(6, 182, 212, 0.3),
      0 0 60px rgba(6, 182, 212, 0.2);
    border-color: var(--color-primary);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }

    .social-icon {
      transform: scale(1.3) rotate(360deg);
      filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.8));
    }

    .social-arrow {
      transform: translate(10px, -10px) rotate(45deg);
      opacity: 1;
    }

    .social-card-bg {
      transform: scale(1.2) rotate(45deg);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.social-card-bg {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent 70%);
  transition: transform 0.6s ease;
}

.social-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: block;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  position: relative;
  z-index: 1;
}

.social-info {
  position: relative;
  z-index: 1;
}

.social-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.social-desc {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.social-arrow {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  opacity: 0.5;
}

.github .social-icon {
  color: var(--color-text);
}

.xiaohongshu .social-icon {
  color: var(--color-primary);
}

.douyin .social-icon {
  color: var(--color-text);
}

// Footer
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 3rem 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
}

.footer-text {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 2rem;

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition);

    &:hover {
      color: var(--color-primary);
    }
  }
}

.footer-beian {
  margin-top: 0.5rem;

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    transition: var(--transition);

    &:hover {
      color: var(--color-primary);
    }
  }
}

// Animations
.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out backwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
