const baseUrl = 'https://api.toplogger.nu/v1';

function svgUrl(gymName) {
  const url = `https://cdn1.toplogger.nu/images/gyms/${gymName}/floorplan.svg`;
  return url;
}

function climbsUrl(gymId) {
  const filters = {
    filters: {
      deleted: false,
      live: true,
    },
  };

  const url = `${baseUrl}/gyms/${gymId}/climbs?json_params=${encodeURIComponent(
    JSON.stringify(filters)
  )}`;

  return url;
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

  const url = `${baseUrl}/groups?json_params=${encodeURIComponent(
    JSON.stringify(filters)
  )}`;

  return url;
}

export default async function fetchGymData(gymId, idName) {
  const [climbs, groups, gymSvg] = await Promise.all([
    fetch(climbsUrl(gymId)),
    fetch(groupsUrl(gymId)),
    fetch(svgUrl(idName)),
  ])
    .then((res) => {
      return Promise.all([res[0].json(), res[1].json(), res[2].text()]);
    })
    .then((data) => {
      // gymSvg = data[2];
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });

  return { svg: gymSvg, climbs: climbs, groups: groups };
}
