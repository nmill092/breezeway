<script lang="ts">
  import { prefersReducedMotion } from "svelte/motion";
  import { SvelteSet } from "svelte/reactivity";
  import { fade } from "svelte/transition";

  import EventCard from "./EventCard.svelte";
  import EventChip from "./EventChip.svelte";

  import type { Event, EventCategory } from "./events";

  const {
    tape,
    texture,
    events,
  }: { tape: ImageMetadata; texture: ImageMetadata; events: Event[] } =
    $props();

  const categories: Set<EventCategory> = $derived(
    new Set(events.map((ev) => ev.category)),
  );
  const selectedCategories = $state(new SvelteSet());

  const filteredEvents = $derived.by(() => {
    return events.filter((ev) => {
      return !selectedCategories.size
        ? ev
        : selectedCategories.has(ev.category);
    });
  });

  const toggleSelectedCategories = (category: EventCategory) => {
    selectedCategories.has(category)
      ? selectedCategories.delete(category)
      : selectedCategories.add(category);
  };

  const clearFilters = () => selectedCategories.clear();

</script>

<div class="events__wrapper">
<div class="events__filters">
  <div class="events__chips" role="group" aria-label="Filter events">
    <EventChip onClick={clearFilters} category={"All"} isActive={selectedCategories.size === 0} />
    {#each categories as category}
      <EventChip
        {category}
        isActive={selectedCategories.has(category)}
        onClick={() => toggleSelectedCategories(category)}
      />
    {/each}
  </div>
  </div>

  <ul class="events__grid">
    {#each filteredEvents as event (event.id)}
      <li 
        in:fade={{ duration: prefersReducedMotion.current ? 0 : 300 }}
        >
        <EventCard {tape} {texture} {event} />
      </li>
    {/each}
  </ul>
</div>

<style>
  .events__wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  .events__filters {
  position: sticky;
  top: calc(var(--nav-gap) + var(--header-h));
  z-index: 10;

  padding-block: var(--space-s);
  isolation: isolate;
}

.events__filters::before {
  content: "";
  position: absolute;
  z-index: -1;

  inset-block: 0;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);

  background-color: var(--color-paper);
}

.events__chips {
  display: flex;
  gap: var(--space-2xs);
  overflow-x: auto;
}

  .events__grid {
    --card-size: 18rem;
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(100%, var(--card-size)), 1fr)
    );
    gap: var(--space-s);
    row-gap: var(--space-l);
  }
</style>
