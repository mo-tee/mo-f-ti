import { css } from 'styled-components';

const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => css`
  font-family: 'Pretendard';
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
    Title1: fontGenerator(700, 26, 140, -2),
    Title2: fontGenerator(700, 24, 140, -1),
    Title3: fontGenerator(700, 20, 140, -1),
    Title4: fontGenerator(700, 16, 140, -1),

    Body1: fontGenerator(400, 16, 160, 0),
    Body2: fontGenerator(400, 14, 160, 0),

    Headline1: fontGenerator(600, 16, 140, -1),
    Headline2: fontGenerator(600, 14, 140, -1),

    Label1: fontGenerator(500, 18, 100, 0),
    Label2: fontGenerator(500, 14, 140, 0),
    Label3: fontGenerator(500, 12, 100, 0),

    Caption1: fontGenerator(400, 12, 100, 0),
};

export default font;