// global.ts
const theme = {
    breakpoints: {
      sm: '640px',
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: '#3C95A9',
      secondary: '#F3B801',
      white: '#FFFFFF',
      black: '#000000',
    },
    typography: {
      fontFamily: {
        body: "'Inter', sans-serif",
        heading: "'Roboto', sans-serif",
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
      },
    },
    spacing: {
      px: '1px',
      0: '0px',
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      8: '2rem', // 32px
      10: '2.5rem', // 40px
      12: '3rem', // 48px
      16: '4rem', // 64px
      20: '5rem', // 80px
      24: '6rem', // 96px
      32: '8rem', // 128px
      40: '10rem', // 160px
      48: '12rem', // 192px
      56: '14rem', // 224px
      64: '16rem', // 256px
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem', // 2px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      full: '9999px',
    },
  };
  
  export default theme;
  