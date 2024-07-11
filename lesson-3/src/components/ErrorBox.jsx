const ErrorBox = ({ error }) => {
  return (
    <>
        {
            error && (
                <div>
                    <p>Error during data fetching...</p>
                </div>
            )
        }
    </>
  )
}

export default ErrorBox