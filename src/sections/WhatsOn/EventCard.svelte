<script lang="ts">
  import type { Event } from "./events";

  const { 
    tape, 
    texture,
    event 
  }: { 
    tape: ImageMetadata, 
    texture: ImageMetadata, 
    event: Event 
  } = $props();

  const ROTATION_MIN = -1;
  const ROTATION_MAX = 1;
  const rotation = Math.random() * (ROTATION_MAX - ROTATION_MIN) + ROTATION_MIN;

  const TAPE_ROTATION_MIN = -2;
  const TAPE_ROTATION_MAX = 2;
  const tapeRotation = Math.random() * (TAPE_ROTATION_MAX - TAPE_ROTATION_MIN) + TAPE_ROTATION_MIN;

  const timeZone = "UTC";

  const timeRangeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", 
    day: "numeric" , 
    weekday: 'short',
    timeZone,
  };

  const pad = (value: number) => String(value).padStart(2, '0');
  const clampMonth = (month: number) => Math.max(0, Math.min(month, 11));

  const timeRangeFormatter = new Intl.DateTimeFormat("en-US", timeRangeOptions);
  const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);

  const buildDateString = ({
    year,
    month,
    monthday,
    startHours,
    startMinutes,
    endHours,
    endMinutes,
  }: Event) => {
    const start = new Date(
      Date.UTC(year, clampMonth(month - 1), monthday, startHours, startMinutes),
    );
    const end = new Date(
      Date.UTC(year, clampMonth(month - 1), monthday, endHours, endMinutes),
    );

    return {
      dateStr: dateFormatter.format(start),      // just assuming all events start and end on the same date
      timeRangeStr: timeRangeFormatter.formatRange(start, end).replace(/\s/gi, ''),
      dateTime: `${year}-${pad(month)}-${pad(monthday)}` // for <time> 
    };
  };

  const { 
    dateStr, 
    timeRangeStr, 
    dateTime
  } = $derived(buildDateString(event));

</script>

<article 
  class="event-card shadow-low" 
  style:--rotation={`${rotation}deg`}
  style:--tapeRotation={`${tapeRotation}deg`}
  style:--texture={`url("${texture.src}")`}>
  <div aria-hidden class="event-card__tape">
    <img src={tape.src} width={tape.width} height={tape.height} alt=""/>
  </div>
  <div class="event-card--image">
    <img alt={event.imageAlt} src={event.image.src} />
  </div>
  <div class="event-card__content">
  <div class="event-card__datetime">
    <time datetime={dateTime}>{ dateStr }</time> <span>•</span> { timeRangeStr }
  </div>
  <h3 class="event-card__title">{ event.title }</h3>
  <div class="event-card__description">
    {@html event.description}
  </div>
 <div class="event-card__category">
    { event.category }
  </div>
  </div>
   
</article>

<style>
  .event-card {
    aspect-ratio: 4 / 5;
    --card-radius: .15rem; 
    transform: rotate(var(--rotation));
    padding-inline: var(--space-xs);
    padding-block-end: var(--space-xs);
    padding-block-start: var(--space-md);
    border-radius: var(--card-radius);
    display: flex; 
    flex-direction: column;
    gap: var(--space-2xs);
    background: 
    /* var(--texture), */
      oklch(98.6% 0.02 86.42);
      /* background-blend-mode: overlay;  */
      position: relative; 
    background-size: 100% 100%; 
  }

  .event-card__content {
    display: flex;
    flex-direction: column;
    flex: 1; 
    gap: var(--space-2xs);
    min-height: 0;
  }

  .event-card__description {
    line-height: 1.3; 
    font-size: var(--fs-s);
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  }

  .event-card__tape {
    width: 33%; 
    position: absolute; 
    top: -5%; 
    left: 50%; 
    transform: translateX(-50%);
    rotate: var(--tapeRotation);
  }
  .event-card__title {
    font-size: var(--fs-lg);
    line-height: 1; 
  }

  .event-card__datetime {
    display: flex; 
    gap: var(--space-2xs);
    font-family: var(--font-typewriter);
    color: var(--color-accent);
    text-transform: uppercase;
    font-size: var(--fs-s);
  }

  .event-card--image {
    aspect-ratio: 16 / 9; 
    overflow: hidden;
    border-radius: var(--card-radius);
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .event-card__category { 
    text-transform: uppercase; 
    color: var(--color-accent);
    font-size: var(--fs-s);
    margin-block-start: auto; 
  }

  @media (width >= 60rem) {
  .event-card {
    aspect-ratio: 3 / 4;
  }

  .event-card__image {
    aspect-ratio: 3 / 2; 
  }
}
</style>
