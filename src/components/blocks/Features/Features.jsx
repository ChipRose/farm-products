import React from "react";

import routesData from "/src/mocks/routesData";
import Title from "/src/components/ui/Title/Title";
import FeatureList from "/src/components/ui/FeatureList/FeatureList";
import Button from "/src/components/ui/Button/Button";
import { useFeatures } from "/src/context/FeaturesHook";

import { FeaturesSectionView, FeaturesContainerView } from "./style";

function Features({ mb = 0 }) {
  const { features } = useFeatures();

  return (
    <FeaturesSectionView mb={mb}>
      <FeaturesContainerView>
        {features?.length ? (
          <>
            <Title align={"center"} mb={64}>
              Почему фермерские продукты лучше?
            </Title>
            <FeatureList mb={44} features={features} />
          </>
        ) : null}
        <Button width={260} link={routesData.ORDER}>
          Купить
        </Button>
      </FeaturesContainerView>
    </FeaturesSectionView>
  );
}

export default Features;
