import {
  type DesignSystem,
  MorphElement,
  type Page,
  type SlideMeta,
  type SlideTransition,
  Step,
  Steps,
} from '@open-slide/core';
import type { CSSProperties, PropsWithChildren } from 'react';

export const meta: SlideMeta = {
  title: 'Simplifying approvals',
  createdAt: '2026-11-25T08:43:49.127Z',
};

export const design: DesignSystem = {
  palette: { bg: '#f7f0df', text: '#101010', accent: '#e64327' },
  fonts: {
    display: 'Calibri, Carlito, Arial, sans-serif',
    body: 'Calibri, Carlito, Arial, sans-serif',
  },
  typeScale: { hero: 124, body: 40 },
  radius: 0,
};

const paper = 'var(--osd-bg)';
const ink = 'var(--osd-text)';
const accent = 'var(--osd-accent)';

const stage: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 110,
  boxSizing: 'border-box',
  overflow: 'hidden',
};

const artwork: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
};

const headline: CSSProperties = {
  position: 'relative',
  width: 720,
  margin: 0,
  fontFamily: 'var(--osd-font-display)',
  fontSize: 'var(--osd-size-hero)',
  fontWeight: 700,
  lineHeight: 1.15,
  letterSpacing: -2,
};

const approvalContour =
  'M769 55 C712 55 684 91 696 132 C708 173 748 216 784 260 ' +
  'C816 297 823 310 827 331 C831 346 850 361 863 382 C874 399 861 405 846 406 ' +
  'C827 406 828 419 832 427 C839 437 818 444 820 451 C820 455 836 460 829 468 ' +
  'C821 478 832 491 820 505 C803 527 775 512 763 538 C751 569 770 592 747 607 ' +
  'C735 616 714 623 692 629 C676 636 671 652 669 665 L1216 665 ' +
  'C1214 652 1209 636 1193 629 C1171 623 1150 616 1138 607 C1115 592 1134 569 1122 538 ' +
  'C1110 512 1082 527 1065 505 C1053 491 1064 478 1056 468 C1049 460 1065 455 1065 451 ' +
  'C1067 444 1046 437 1053 427 C1057 419 1058 406 1039 406 C1024 405 1011 399 1022 382 ' +
  'C1035 361 1054 346 1058 331 C1062 310 1069 297 1101 260 C1137 216 1177 173 1189 132 ' +
  'C1201 91 1173 55 1116 55 Z';

const openingField = 'M595 0 H1280 V720 H525 C551 688 595 633 595 580 Z';
const openPath =
  'M0 0 H606 C635 132 552 248 648 286 H1015 V157 L1221 360 L1015 563 V434 H648 ' +
  'C552 472 635 588 606 720 H0 Z';

function Artwork({ children }: PropsWithChildren) {
  return (
    <svg viewBox="0 0 1280 720" aria-hidden="true" style={artwork}>
      {children}
    </svg>
  );
}

function HandoffMarker({ atStart = false }: { atStart?: boolean }) {
  return (
    <MorphElement id="handoff-marker">
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: atStart ? 915 : 1380,
          top: atStart ? 493.5 : 541.5,
          width: atStart ? 93 : 67.5,
          height: atStart ? 93 : 67.5,
          borderRadius: atStart ? 0 : 33.75,
          background: accent,
        }}
      />
    </MorphElement>
  );
}

const Handoffs: Page = () => (
  <section style={{ ...stage, background: paper, color: ink }}>
    <Artwork>
      <path d={openingField} fill={ink} />
      <path d={approvalContour} fill={paper} />
    </Artwork>
    <h1 style={headline}>
      Too many
      <br /> handoffs
    </h1>
  </section>
);

const Wait: Page = () => (
  <section style={{ ...stage, background: ink, color: paper }}>
    <Artwork>
      <path d={approvalContour} fill={paper} />
    </Artwork>
    <h1 style={headline}>
      The wait is
      <br /> between
      <br /> teams
    </h1>
    <Steps>
      <Step>
        <HandoffMarker />
      </Step>
    </Steps>
  </section>
);

const Owner: Page = () => (
  <section style={{ ...stage, background: ink, color: ink }}>
    <Artwork>
      <path d={openPath} fill={paper} />
    </Artwork>
    <h1 style={headline}>
      Give one
      <br /> team
      <br /> ownership
    </h1>
    <HandoffMarker atStart />
  </section>
);

const dissolve: SlideTransition = {
  duration: 250,
  exit: { keyframes: [{ opacity: 1 }, { opacity: 1 }] },
  enter: {
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
  },
};

Wait.transition = dissolve;
Owner.transition = {
  ...dissolve,
  morph: { duration: 850, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};

export const notes = [
  '試諗一份申請交咗出去，一隊睇完，交畀下一隊。你可能先見到兩個人對望。停一停，望吓兩張面中間嗰個空位，然後翻頁。',
  '撳下一步，望住紅點。兩張面之間嗰個空位就似一個沙漏。喺呢個假設例子，份申請要等下一隊接手先可以繼續。翻下一頁時，留意粒紅點去咗邊。',
  '紅色標記移去箭嘴嘅起點，代表一個清楚嘅負責單位。由同一隊跟進到有結果。其他團隊可以提供意見，申請人都知道搵邊個。',
];

export default [Handoffs, Wait, Owner] satisfies Page[];
