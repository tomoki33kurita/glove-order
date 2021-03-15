import React from 'react'
import { useDebounce } from 'use-debounce'
import { Action, Embroidery } from 'src/types'
import { SET_EMBROIDERIES } from 'src/constants/ActionTypes'

export const embroideriesReducer = (embroideries: Embroidery[], newEmbroideries: Embroidery, i: number): Embroidery[] => {
  return embroideries.reduce((a, c) => {
    if (c.id === i) a.push(newEmbroideries)
    if (c.id !== i) a.push(c)
    return a
  }, [])
}

export const useEmbroideryContent = (dispatch: (value: Action) => void, embroideries: Embroidery[]): ((content: string, i: number) => void) => {
  const [content, setContent] = React.useState('')
  const [contentNum, setContentNum] = React.useState(0)
  const [delayedValue] = useDebounce(content, 500)
  const handleContentAndNum = (content: string, i: number) => {
    setContent(content)
    setContentNum(i)
  }

  const updateEmbroContent = (delayedValue: string, i: number) => {
    const newEmbroideries = { ...embroideries[i], embroideryContent: delayedValue }
    return embroideriesReducer(embroideries, newEmbroideries, i)
  }

  React.useEffect(() => {
    dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroContent(delayedValue, contentNum) })
  }, [delayedValue])
  return handleContentAndNum
}
