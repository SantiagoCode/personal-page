import Link from 'next/link'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const DownloadCV = () => {
  return (
    <CardBody className='w-[fit-content]'>
      <CardContainer>
          <CardItem
            translateZ="20"
            className='flex bg-[rgb(255,255,255,0.1)] hover:bg-[rgb(255,255,255,0.2)] transition-all backdrop-blur-xl border rounded-full py-3 px-6'>
            <Link href="CV/Santiago_Salazar-FrontEnd_Dev.pdf" target="_blank" download>
                    Descargar CV
            </Link>
          </CardItem>
      </CardContainer>
    </CardBody>
  )
}

export default DownloadCV