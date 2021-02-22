export const isInIos = () => [
  'iPad Simulator',
  'iPhone Simulator',
  'iPod Simulator',
  'iPad',
  'iPhone',
  'iPod'
].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)