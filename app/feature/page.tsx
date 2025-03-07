'use client'
import styled from 'styled-components';

import BoxWrapper from '@/components/BoxWrapper';
import FeatRainbowkit from '@/components/FeatRainbowkit';
import FeatZustand from '@/components/FeatZustand';
import useStore from '@/store';

const StyleWrapper =  styled.div`
  padding: 20px 0;
`;

export default function DocsPage() {
  const bears = useStore((state) => state.bears)
  return (
    <StyleWrapper className="grid md:grid-cols-2 gap-4">

      <BoxWrapper title='🐻 Zustand' url='https://zustand.docs.pmnd.rs/getting-started/introduction'>
        <FeatZustand/>
      </BoxWrapper>

      <BoxWrapper title='🌈 Rainbowkit' url='https://www.rainbowkit.com/'>
        <FeatRainbowkit/>
      </BoxWrapper>

    </StyleWrapper>
  );
}
