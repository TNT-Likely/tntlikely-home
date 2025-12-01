<template>
  <div class="github-projects">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>{{ t('projects.loading') }}</p>
    </div>

    <div v-else-if="error" class="error">
      <Icon name="mdi:alert-circle" class="error-icon" />
      <p>{{ error }}</p>
    </div>

    <div v-else-if="repos.length === 0" class="no-projects">
      <Icon name="mdi:folder-open" class="empty-icon" />
      <p>{{ t('projects.noProjects') }}</p>
    </div>

    <div v-else class="projects-grid">
      <a
        v-for="(repo, index) in repos"
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card glass"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="project-header">
          <Icon name="mdi:folder-outline" class="project-icon" />
          <div class="project-stats">
            <span class="stat" v-if="repo.stargazers_count > 0">
              <Icon name="mdi:star" />
              {{ repo.stargazers_count }}
            </span>
            <span class="stat" v-if="repo.forks_count > 0">
              <Icon name="mdi:source-fork" />
              {{ repo.forks_count }}
            </span>
          </div>
        </div>

        <h3 class="project-name">{{ repo.name }}</h3>
        <p class="project-description">{{ repo.description }}</p>

        <div class="project-footer">
          <span v-if="repo.language" class="language">
            <span class="language-dot" :style="{ background: getLanguageColor(repo.language) }"></span>
            {{ repo.language }}
          </span>
          <span class="updated">
            {{ formatDate(repo.updated_at) }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  username: string
  maxRepos?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxRepos: 6
})

const { t } = useI18n()

// 默认静态数据，作为后备 - 使用真实的GitHub数据和国际化描述
const getDefaultRepos = () => [
  {
    id: 1,
    name: 'beecount',
    html_url: 'https://github.com/TNT-Likely/beecount',
    description: t('projects.beecount.description'),
    stargazers_count: 673,
    forks_count: 83,
    language: 'Dart',
    updated_at: '2025-12-01T03:09:09Z'
  },
  {
    id: 2,
    name: 'lumina',
    html_url: 'https://github.com/TNT-Likely/lumina',
    description: t('projects.lumina.description'),
    stargazers_count: 14,
    forks_count: 3,
    language: 'TypeScript',
    updated_at: '2025-11-02T00:00:00Z'
  },
  {
    id: 3,
    name: 'xplayer',
    html_url: 'https://github.com/TNT-Likely/xplayer',
    description: t('projects.xplayer.description'),
    stargazers_count: 60,
    forks_count: 14,
    language: 'Dart',
    updated_at: '2025-11-28T00:00:00Z'
  }
]

const repos = ref<any[]>(getDefaultRepos())
const loading = ref(false)
const error = ref('')

// Language colors (GitHub style)
const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c'
}

const getLanguageColor = (language: string) => {
  return languageColors[language] || '#8b949e'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 30) return `${diffDays} days ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

// Fetch GitHub repos - 后台更新，失败时保持默认数据
const fetchRepos = async () => {
  try {
    // 不显示loading，因为已经有默认数据了
    const response = await fetch(
      `https://api.github.com/users/${props.username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    )

    if (!response.ok) {
      // 请求失败时，保持默认数据，不显示错误
      console.warn(`GitHub API request failed: ${response.status}`)
      return
    }

    const data = await response.json()

    // 只保留指定的项目，并按照指定顺序排序
    const projectOrder = ['beecount', 'lumina', 'xplayer']
    const filteredRepos = data.filter((repo: any) =>
      projectOrder.includes(repo.name.toLowerCase())
    )

    // 如果成功获取到数据，保留GitHub的stars/forks但使用国际化描述
    if (filteredRepos.length > 0) {
      const sortedRepos = filteredRepos.sort((a: any, b: any) => {
        return projectOrder.indexOf(a.name.toLowerCase()) - projectOrder.indexOf(b.name.toLowerCase())
      })

      // 保留GitHub的所有数据，只替换描述
      repos.value = sortedRepos.map((repo: any) => ({
        ...repo,
        description: t(`projects.${repo.name.toLowerCase()}.description`)
      }))
    }
    // 如果没有找到指定项目，保持默认数据
  } catch (e: any) {
    // 静默失败，保持默认数据
    console.warn('Error fetching repos:', e.message)
  }
}

// 组件挂载时尝试更新数据
onMounted(() => {
  fetchRepos()
})
</script>

<style scoped lang="scss">
.github-projects {
  min-height: 300px;
}

.loading,
.error,
.no-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--color-text-secondary);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-icon,
.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  animation: fadeIn 0.6s ease-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  text-decoration: none;
  color: var(--color-text);
  transition: var(--transition);
  animation: fadeInUp 0.6s ease-out backwards;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);

    .project-icon {
      color: var(--color-primary);
      transform: scale(1.1);
    }
  }
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-icon {
  font-size: 2rem;
  color: var(--color-text-secondary);
  transition: var(--transition);
}

.project-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.project-description {
  flex: 1;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.language-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.updated {
  font-size: 0.8rem;
}
</style>
