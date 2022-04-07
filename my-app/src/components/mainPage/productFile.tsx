import { FC } from 'react'
import LazyLoad from 'react-lazyload'

import styled from 'styled-components'

type ProductFileProps = {
    src: string
}

const Video = styled.video`
    position: absolute;
    width: 20vw;
`
const Image = styled.img`
    position: absolute;
    width: 20vw;
`

const ProductFile: FC<ProductFileProps> = ({
    src
}) => {
    const video = src.match(/^https:..cdn.artisant.io.api.files.*mp4$/gm)
    if (video) {
        return (
            <LazyLoad height={200} offset={10}>
                <Video playsInline autoPlay loop muted controls={false} src={src}></Video>
            </LazyLoad>
        )
    }
    return (
        <LazyLoad height={200} offset={10}>
            <Image src={src} loading="lazy" alt="productImage" />
        </LazyLoad>
    )
}

export default ProductFile