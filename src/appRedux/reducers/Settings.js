const initialSettings = {
  pathname: '/',
  width: window.innerWidth,
  isDirectionRTL: false,
  'mobileMenuOpen' : false,
  'isMobileMenu' : false,
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case 'Test':
      return {
        ...state,
        pathname: action.payload.location.pathname,
        navCollapsed: false
      };
    default:
      return state;
  }
};

export default settings;
