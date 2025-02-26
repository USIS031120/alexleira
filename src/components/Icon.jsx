
import React from 'react'
import { Facebook } from './Facebook'
import { Instagram } from './Instagram'
import { Twitter } from './Twitter'
import { Youtube } from './Youtube'
import { TikTok } from './TikTok'

export const Icon = ({ facebok, instagram, twitter, youtube, tiktok }) => {
  return (
    <div className='inline-block ml-8'>
       { facebok && <Facebook /> }
       { instagram && <Instagram /> }
       { twitter && <Twitter /> }
       { youtube && <Youtube /> }
       { tiktok && <TikTok /> }

    </div>
  )
}
