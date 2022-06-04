<script>
  import { getContrast, getRouteColor } from '../modules/colorHelpers';
  import { gradeConverter } from '../modules/gradeConverter';

  import {
    zoomLevel,
    gradeSystem,
    selectedClimb,
    showRouteData,
  } from '../stores';

  export let climb;
  export let groups;

  export let x;
  export let y;
</script>

<foreignObject
  class="cursor-pointer overflow-visible"
  width="40"
  height="40"
  {x}
  {y}
  on:click|stopPropagation={() => {
    $selectedClimb = climb;
    $showRouteData = true;
  }}
>
  <div
    class="w-[40px] h-[40px] rounded-full relative"
    style:color={getContrast(getRouteColor(climb.id, groups, false))}
    style:transform="scale({(1 / $zoomLevel) * 1})"
    style:background-color={getRouteColor(climb.id, groups, true)}
  >
    {gradeConverter(
      climb.grade,
      $gradeSystem ? $gradeSystem : 'french_boulder'
    )}
  </div>
</foreignObject>

<style>
  div {
    background: var(--dot-col);

    text-align: center;
    vertical-align: middle;
    line-height: 38px;

    box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);

    transform: scale(var(--dot-scale));
  }
</style>
