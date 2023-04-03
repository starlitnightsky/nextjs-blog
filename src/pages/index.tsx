import { useState, useEffect } from "react";

import { Oval } from "react-loader-spinner";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="container-fluid mt-5">
      <h6 className="mb-3 text-center mb-3">Welcome!</h6>
      <div
        className="row g-5 text-center  border border-secondary rounded"
        //@ts-ignore
        style={{ "--bs-border-opacity": 0.25 }}
      >
        {!loading ? (
          <p>oof</p>
        ) : (
          <div className="d-flex flex-wrap align-items-center justify-content-center mb-2">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>
    </div>
  );
}
