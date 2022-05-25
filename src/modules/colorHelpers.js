/**
 * Get the contrasting color for any hex color
 * @param  {String} hexcolor A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
export function getContrast(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // Convert to RGB value
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? 'black' : 'white';
}

// color lookup table
const colors = {
  red: '#ce0000',
  green: '#0f480c',
  yellow: '#dcd138',
  geel: '#dcd138',
  orange: '#ff7200',
  black: '#000000',
  pink: '#ff00ed',
  blue: '#0093ff',
  purple: '#822fe0',
  lime: '#05ff00',
  white: '#ffffff',
};

export function getRouteColor(climb_id, groups, styleVar = false) {
  // if group has color use that insead of lookup

  // filter groups arr > climb_group > climb_id > if match get name
  let name = groups.filter((el, i) => {
    for (const item of el.climb_groups) {
      if (item.climb_id == climb_id) {
        return el;
      } else {
        false;
      }
    }
  });

  if (name.length < 1) {
    name = '';
  } else {
    if (name[0].color != undefined) {
      return name[0].color.toLowerCase();
    } else {
      name = name[0].name;
    }
  }

  name = name.toLowerCase();

  if (name.split('/').length > 1) {
    const cols = name.split('/');

    if (styleVar) {
      return `linear-gradient(315deg, ${colors[cols[0]]} 50%, ${
        colors[cols[1]]
      } 50%)`;
    }

    name = cols[0];
  }

  // color fallback if not defined
  const col = colors[name] ? colors[name] : '#0000ff';

  if (styleVar) {
    return col;
  }

  return col;
}
