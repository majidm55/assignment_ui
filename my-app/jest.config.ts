import type {Config} from '@jest/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    "transform": {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
   },
  };
};
