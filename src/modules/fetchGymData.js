const baseUrl = 'https://api.toplogger.nu/v1';

function svgUrl(gymName) {
  return `https://cdn1.toplogger.nu/images/gyms/${gymName}/floorplan.svg`;
}

function climbsUrl(gymId) {
  const filters = {
    filters: {
      deleted: false,
      live: true,
    },
  };

  return `${baseUrl}/gyms/${gymId}/climbs?json_params=${encodeURIComponent(
    JSON.stringify(filters)
  )}`;
}

function groupsUrl(gymId) {
  const filters = {
    filters: {
      gym_id: gymId,
      deleted: false,
      live: true,
      score_system: 'none',
    },
    includes: ['climb_groups'],
  };

  return `${baseUrl}/groups?json_params=${encodeURIComponent(
    JSON.stringify(filters)
  )}`;
}

export async function fetchGymData(gymId, idName) {
  const [climbs, groups, gymSvg] = await Promise.all([
    fetch(climbsUrl(gymId)),
    fetch(groupsUrl(gymId)),
    fetch(svgUrl(idName)),
  ])
    .then((res) => {
      return Promise.all([res[0].json(), res[1].json(), res[2].text()]);
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });

  return [climbs, groups, gymSvg];
}
