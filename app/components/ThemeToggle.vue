<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="t('theme.toggle')"
    :title="t('theme.toggle')"
  >
    <Icon v-if="colorMode.value === 'dark'" name="mdi:weather-sunny" class="icon" />
    <Icon v-else name="mdi:weather-night" class="icon" />
  </button>
</template>

<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: var(--color-bg-secondary);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border: 2px solid var(--color-border);
  backdrop-filter: blur(10px);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.1),
    0 0 0 0 rgba(6, 182, 212, 0);

  &:hover {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    transform: rotate(180deg) scale(1.15);
    border-color: var(--color-primary);
    box-shadow:
      0 8px 30px rgba(6, 182, 212, 0.4),
      0 0 40px rgba(6, 182, 212, 0.3);
  }

  &:active {
    transform: rotate(180deg) scale(1);
  }

  .icon {
    font-size: 1.4rem;
    filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.3));
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    .icon {
      font-size: 1.3rem;
    }
  }
}
</style>
