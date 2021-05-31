import React from 'react'

export const LoadMore = (props: any) => {
  return (
    <div className="row justify-content-center mt-2">
      <div className="col-auto">
        <button className="btn btn-outline-success" onClick={props.loadMore}>Load more</button>
      </div>
    </div>
  )
}
