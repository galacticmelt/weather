import { useEffect, useState, useCallback } from "react"

export const useScrollPosition = () => {

  const [scrollTop, setScrollTop] = useState()
  const [scrollBottom, setScrollBottom] = useState();

  const [isOnTop, setIsOnTop] = useState();
  const [isAtBottom, setIsAtBottom] = useState();

  const handleScroll = useCallback((event) => {
    const {currentTarget} = event
    setScrollTop(currentTarget.scrollTop)
    setScrollBottom(
      currentTarget.scrollHeight - currentTarget.scrollTop - currentTarget.clientHeight
    );
  }, [])

  useEffect(() => {
    console.log(scrollTop, scrollBottom)
    console.log(isOnTop, isAtBottom)
    if(scrollTop === 0) {
      setIsOnTop(true)
      setIsAtBottom(false)
    }
    if (scrollBottom === 0) {
      setIsAtBottom(true)
      setIsOnTop(false)
    } 
    if (scrollTop !== 0 && scrollBottom !== 0) {
      setIsOnTop(false)
      setIsAtBottom(false)
    }
  }, [isAtBottom, isOnTop, scrollBottom, scrollTop])

  return [isOnTop, isAtBottom, handleScroll]
}