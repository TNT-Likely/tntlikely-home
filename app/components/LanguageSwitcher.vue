<template>
  <div class="language-switcher">
    <button
      @click="toggleDropdown"
      class="language-button"
      :aria-label="$t('language.switch')"
      :title="$t('language.switch')"
    >
      <Icon name="mdi:translate" class="icon" />
      <span class="current-lang">{{ currentLocaleName }}</span>
      <Icon name="mdi:chevron-down" class="chevron" :class="{ open: isOpen }" />
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="language-dropdown">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="() => changeLocale(locale.code)"
          class="language-option"
          :class="{ active: locale.code === currentLocale }"
        >
          {{ locale.name }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)
const currentLocaleName = computed(() => {
  const current = availableLocales.value.find(l => l.code === currentLocale.value)
  return current?.name || 'Language'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLocale = async (code: string) => {
  await setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('.language-switcher')) {
      isOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped lang="scss">
.language-switcher {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 48px;
  height: 48px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: var(--color-primary);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    transform: scale(1.15);
    box-shadow:
      0 8px 30px rgba(6, 182, 212, 0.4),
      0 0 40px rgba(6, 182, 212, 0.3);
  }

  &:active {
    transform: scale(1);
  }

  .icon {
    font-size: 1.4rem;
    filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.3));
  }

  .current-lang {
    display: none;
  }

  .chevron {
    display: none;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    .icon {
      font-size: 1.3rem;
    }
  }
}

.language-dropdown {
  position: absolute;
  bottom: calc(100% + 1rem);
  right: 0;
  min-width: 160px;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  border-radius: 16px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 0 40px rgba(6, 182, 212, 0.1);
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(20px);
}

.language-option {
  display: block;
  width: 100%;
  padding: 1rem 1.25rem;
  border: none;
  background: transparent;
  color: var(--color-text);
  text-align: left;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    transform: translateX(5px);
    padding-left: 1.5rem;
  }

  &.active {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    font-weight: 600;
  }

  & + & {
    border-top: 1px solid rgba(226, 232, 240, 0.1);
  }
}

// Dropdown transition
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
