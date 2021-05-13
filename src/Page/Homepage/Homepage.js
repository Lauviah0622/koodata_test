import React from "react";
import styled from "styled-components";

import Category from "../../Components/Category";

const PageWrapper = styled.div``;

export default function HomePage() {
  return (
    <PageWrapper>
      <Category
        title="熱門電影"
        key="pop"
        endpoint="get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US"
        name="pop"
      />
      <Category
        title="即將上映電影"
        key="comming"
        endpoint="get-coming-soon-movies"
        name="comming"
      />
    </PageWrapper>
  );
}
