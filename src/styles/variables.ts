export enum LayoutSize {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
}

export const colors = {
  white: '#FFF',
  black: '#000',
  green: '#45B649',
  red: '#F5222D',
  blue: '#1890FF',
  orange: '#F29718',
  darkGray: '#262626',
  gray: '#BFBFBF',
  paleGray: '#E8E8E8',
}

export const layout = {
  [LayoutSize.MOBILE]: 768,
  [LayoutSize.TABLET]: 992,
  [LayoutSize.LAPTOP]: 1080
}
