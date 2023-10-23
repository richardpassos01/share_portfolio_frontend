const Size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const Tokens = {
  mobile: `only screen and (max-width: ${Size.mobile})`,
  tablet: `only screen and (max-width: ${Size.tablet})`,
  desktop: `only screen and (max-width: ${Size.desktop})`,
};

export default Tokens;
