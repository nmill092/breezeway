<script lang="ts">
  import type { EventCategory } from "./events";

  const { 
    category, 
    isActive,
    onClick
  }: { 
    category: EventCategory | 'All', 
    isActive: boolean, 
    onClick: () => void 
  } = $props(); 

</script>

<button 
  aria-pressed={isActive}
  class="events__chip"
  class:events__chip--active={isActive}
  onclick={onClick}
  >
  { category }
</button>

<style>
.events__chip {
  color: var(--color-accent);
  border-radius: var(--radius-pill); 
  font-size: var(--fs-s);
  text-transform: uppercase; 
  border: 1px solid; 
  padding-inline: var(--space-2xs);
  text-wrap: nowrap; 
  transition: background-color .2s ease, color .2s ease, scale .2s cubic-bezier(.99,0,.23,2.04);

  &.events__chip--active {
    color: var(--color-paper-text);
    background: var(--color-accent);
    scale: .98;
  }
}

</style>