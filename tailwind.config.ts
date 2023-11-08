import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  theme: {
    extend: {
      button: {
        primary: {
          'button':'w-full mt-[16px] border-0 outline-0 no-underline flex justify-center items-center my-2 rounded-md p-2 sm:w-auto sm:p-4 md:w-40 md:p-3 bg-primary-500 hover:bg-primary-300 text-white hover:shadow-md transition-all duration-300 ease-in-out'
        },
        secundary: {
          'button':'flex justify-center items-center my-2 rounded-md p-2 sm:w-auto sm:p-4 md:w-40 md:p-3 bg-neutral-500 hover:bg-neutral-300 text-white hover:shadow-md transition-all duration-300 ease-in-out'
        }
      },

      colors: {
        warning: {
          '050': '#FFFBEA',
          '100': '#FFF3C4',
          '200': '#FCE588',
          '300': '#FADB5F',
          '400': '#F7C948',
          '500': '#F0B429',
          '600': '#DE911D',
          '700': '#CB6E17',
          '800': '#B44D12',
          '900': '#8D2B0B',
        },
        negative: {
          '050': '#FFE3E3',
          '100': '#FFBDBD',
          '200': '#FF9B9B',
          '300': '#F86A6A',
          '400': '#EF4E4E',
          '500': '#E12D39',
          '600': '#CF1124',
          '700': '#AB091E',
          '800': '#8A041A',
          '900': '#610316',
        },
        positive: {
          '050': '#E3F9E5',
          '100': '#C1F2C7',
          '200': '#91E697',
          '300': '#51CA58',
          '400': '#31B237',
          '500': '#18981D',
          '600': '#0F8613',
          '700': '#0E7817',
          '800': '#07600E',
          '900': '#014807',
        },
        neutral: {
          '000': '#FFFFFF',
          '050': '#F7F7F7',
          '100': '#E1E1E1',
          '200': '#CFCFCF',
          '300': '#B1B1B1',
          '400': '#9E9E9E',
          '500': '#7E7E7E',
          '600': '#626262',
          '700': '#515151',
          '800': '#3B3B3B',
          '900': '#222222',
          '999': '#111111',
        },
        accent: {
          '050': '#FFE3EC',
          '100': '#FFB8D2',
          '200': '#FF8CBA',
          '300': '#F364A2',
          '400': '#E8368F',
          '500': '#DA127D',
          '600': '#BC0A6F',
          '700': '#A30664',
          '800': '#870557',
          '900': '#620042',
        },
        primary: {
          '050': '#FFE8D9',
          '100': '#FFD0B5',
          '200': '#FFB088',
          '300': '#FF9466',
          '400': '#F9703E',
          '500': '#F35627',
          '600': '#DE3A11',
          '700': '#C52707',
          '800': '#AD1D07',
          '900': '#841003',
        },
      },
    },
  },

  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
  plugins: [ ],
};

export default config;
