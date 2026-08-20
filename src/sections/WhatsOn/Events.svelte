<script lang="ts">
  import { SvelteSet } from "svelte/reactivity";
  import { fade, fly } from "svelte/transition";
  import { flip } from "svelte/animate";

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
  <div class="events__chips">
    <EventChip onClick={clearFilters} category={"All"} isActive={selectedCategories.size === 0} />
    {#each categories as category}
      <EventChip
        {category}
        isActive={selectedCategories.has(category)}
        onClick={() => toggleSelectedCategories(category)}
      />
    {/each}
  </div>

  <ul class="events__grid">
    {#each filteredEvents as event (event.id)}
      <li 
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 200 }}
        animate:flip={{ duration: 350 }}>
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

  .events__chips {
    display: flex;
    gap: var(--space-2xs);
    justify-content: start;
    background-color: var(--color-paper);
    position: sticky; 
    top: calc(var(--nav-gap) + var(--header-h));
    padding-block-end: var(--space-md);
    z-index: 999;
    overflow-x: scroll;
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
