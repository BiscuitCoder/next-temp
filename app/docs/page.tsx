'use client'
import styled from 'styled-components';

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
        <h1>Docs test {bears}</h1>
        <Alert
          hideIconWrapper
          color="secondary"
          description="This is a bordered variant alert"
          title="Bordered Alert"
          variant="bordered"
        />
      </div>
    </StyleWrapper>
  );
}
