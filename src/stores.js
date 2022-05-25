import { writable } from 'svelte/store';

// gyms store
const storedGyms = JSON.parse(localStorage.getItem('gyms'));
export const gyms = writable(storedGyms);
gyms.subscribe((value) => {
  if (typeof value === 'object' && value != null) {
    localStorage.setItem('gyms', JSON.stringify(value));
  }
});

// selected gym
export const gym = writable(JSON.parse(localStorage.getItem('gym')));
gym.subscribe((value) => {
  if (typeof value === 'object' && value != null) {
    localStorage.setItem('gym', JSON.stringify(value));
  }
});

export const gradeSystem = writable(undefined);

// TODO add stores for routes, svg and groups
// export const map = svg

// store map
// store routes

// store gyms

// store checkmarked routes?
