export type Browser = {
  getUrl: () => string;
  waitUntil: (callback: () => boolean, timeout: number, message: string) => void;
  url: (url: string) => void;
  touchScroll: (x: number, y: number) => void;
  getCookies: (names: string[]) => { name: string }[];
  getTitle: () => string;
  pause: (timeout: number) => void;
}