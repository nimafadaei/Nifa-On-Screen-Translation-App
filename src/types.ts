export interface Bounds {
  top: number;    // percentage from top (e.g. 15)
  left: number;   // percentage from left (e.g. 10)
  width: number;  // percentage width (e.g. 80)
  height: number; // percentage height (e.g. 5)
}

export interface AccessibilityNode {
  id: string;
  text: string;
  type: 'text' | 'button' | 'title' | 'input' | 'header' | 'game-hud';
  bounds: Bounds;
  translations: {
    [langCode: string]: string;
  };
}

export interface AppScreen {
  id: string;
  name: string;
  iconName: string;
  appName: string;
  statusBarColor: string;
  backgroundColor: string;
  nodes: AccessibilityNode[];
}

export type TranslationMode = 'original' | 'inline' | 'micro-pin' | 'hud-split' | 'fade-to-translate';

export interface Language {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
}
