declare module '*.png';
declare module '*.webm';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.mp4';
declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui';

  const presets: Record<'tailwind', Theme>;

  export = presets
}
