import { writable } from 'svelte/store';

// gyms store
const storedGyms = JSON.parse(localStorage.getItem('gyms'));
export const gyms = writable(storedGyms);
gyms.subscribe((value) => {
  if (typeof value === 'object' && value != null) {
    localStorage.setItem('gyms', JSON.stringify(value));
  }
});

export const gym = writable({});
gym.subscribe((value) => {
  if (typeof value === 'object' && value != null) {
    localStorage.setItem('gym', JSON.stringify(value));
  }
});

export const gradeSystem = writable(undefined);

// selected gym

// TODO add stores for routes, svg and groups
// export const map = svg
