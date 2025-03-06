'use client'
import styled from 'styled-components';

import { Counter } from '@/components/counter';
import { title } from '@/components/primitives';
import useStore from '@/store';
import { Alert } from '@heroui/alert';

const StyleWrapper =  styled.div`
  border: 1px solid red;
  padding: 20px;
`;

export default function DocsPage() {
  const bears = useStore((state) => state.bears)
  return (
    <StyleWrapper>
      <div className='space-y-5'>
        <h1 className={title()}>Docs test {bears}</h1>
        <Alert
          hideIconWrapper
          color="secondary"
          description="This is a bordered variant alert"
          title="Bordered Alert"
          variant="bordered"
        />
        <Counter />
      </div>
    </StyleWrapper>
  );
}
