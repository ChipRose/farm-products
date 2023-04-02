import React from "react";

import FeatureCard from "/src/components/ui/FeatureCard/FeatureCard";

import { FeatureListView, FeatureItemView } from "./style";

function FeatureList(props) {
  const { features } = props;

  return (
    <>
      {features && features?.length ? (
        <FeatureListView {...props}>
          {features.map((feature, index) => (
            <FeatureItemView key={index}>
              <FeatureCard card={feature} />
            </FeatureItemView>
          ))}
        </FeatureListView>
      ) : null}
    </>
  );
}

export default FeatureList;
