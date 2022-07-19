import {mount} from 'marketing/MarketingApp'
import React, {useRef, useEffect,useState} from 'react'

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref} />
}