import Link from 'next/link';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Download } from 'react-feather';

const CristalBtn = ({ text, href, blank = false, download = false }: { text: string, href: string, blank: boolean, download: boolean }) => {
  return (
    <CardBody className='w-[fit-content]'>
      <CardContainer>
        <Link href={href} target={blank ? '_blank' : ''} download={download ? true : false}>
          <CardItem
            translateZ='20'
            className='download_button flex rounded-full border bg-[rgb(255,255,255,0.1)] px-6 py-3 backdrop-blur-xl transition-all md:hover:bg-[rgb(255,255,255,0.3)]'>
            {text}
          </CardItem>
        </Link>
      </CardContainer>
    </CardBody>
  )
}

export default CristalBtn;