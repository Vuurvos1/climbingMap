Reverse engineering the Toplogger api

### API base url

`https://api.toplogger.nu/v1/`

## Gym related data

### List of registered gyms

`baseurl/gyms`

### Single climbing gym

`baseurl/gyms/:gym id`
`baseurl/gyms/:gym slug`

gym id can be found in the gyms list

### Gyms floor plan

`https://cdn1.toplogger.nu/images/gyms/:id_name/floorplan.svg`

id_name can be found in the gyms list
note that the svg is semi broken and you need the first `<g>` element in the SVG to actually see the svg

<!-- there is a chance you can't see the svg because it is very big -->

## Climbing related data

### List of climbs at a specific gym

`baseurl/gyms/:gym id/climbs`

(this is a list of all the climbs at a gym, even removed ones)

climbs can be filtered using `json_params`

example:

```js
// fetch all climbs that are currently in a gym
async function fetchClimbs() {
  const baseUrl = 'https://api.toplogger.nu/v1';
  const filters = {
    filters: {
      deleted: false,
      live: true,
    },
  };

  // create url to fetch
  // turn filters into a string and URI encode it so it works in a url
  const url = `${baseUrl}/gyms/8/climbs?json_params=${encodeURIComponent(
    JSON.stringify(filters)
  )}`;

  const res = await fetch(url);
  const data = await res.json();

  // return the climbs in a gym
  return data;
}
```

list of possible filters:

- deleted, boolean
- live, boolean

### Single climb data

`baseurl/gyms/:gym id/climbs/:climb id`

climb/route id can be found in the list of climbs of a gym

### Climbs sorted in groups

<!-- https://api.toplogger.nu/v1/groups?json_params=%7B%22filters%22:%7B%22gym_id%22:8,%22score_system%22:%22none%22,%22live%22:true%7D,%22includes%22:[%22climb_groups%22]%7D -->

`baseurl/groups?json_params`
