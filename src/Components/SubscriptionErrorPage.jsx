import React from 'react'

function SubscriptionErrorPage() {
  return (
    <div className="bg-muted container-xxl py-5 d-flex flex-column justify-content-center align-items-center rounded rounded-3 border my-4 w-50">
      <h2 className="">Error!</h2>
      <p className="w-50 text-center fs-6">
        There was a problem with your subscription. Please try again later.
      </p>
      <button className="btn bg-primary text-muted rounded rounded-3 text-md ">
        Okay
      </button>
    </div>
  );
}

export default SubscriptionErrorPage
