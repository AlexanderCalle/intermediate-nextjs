'use client'

const HomeError = ({error, reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
  <div>
		<h2>Something bad happened :( </h2>
	  <button onClick={() => reset()}>Try again</button>
  </div>
  )
}

export default HomeError