import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

const InfiniteScroll = () => {
    useInfiniteQuery({
        queryKey:['scroll'],
        queryFn:fetUsers
    })
  return (
    <div>InfiniteScroll</div>
  )
}

export default InfiniteScroll