import { Ionicons } from "@expo/vector-icons";
import { AssetsSelector } from "expo-images-picker";
import React from "react";
import styled from "styled-components";

import { theme } from "../config";
import routes from "../navigation/routes";

const { colors, fonts, size, radii } = theme;

const MediaSelectionScreen = ({ navigation }) => {
  const onDone = (data) => {
    navigation.navigate(routes.POST, { data });
    console.log(data);
  };

  return (
    <Container>
      <AssetsSelector
        options={{
          assetsType: ["photo"],
          maxSelections: 4,
          margin: 3,
          portraitCols: 4,
          landscapeCols: 5,
          widgetWidth: 98,
          widgetBgColor: colors.light,
          videoIcon: {
            Component: Ionicons,
            iconName: "play-circle",
            color: colors.white,
            size: 22,
          },
          selectedIcon: {
            Component: Ionicons,
            iconName: "checkmark-circle-outline",
            color: colors.white,
            bg: colors.lightBlue2,
            size: 28,
          },
          defaultTopNavigator: {
            selectedText: "Selected",
            continueText: "Finish",
            goBackText: "Back",
            midTextColor: colors.darkBlue,
            buttonStyle: {
              backgroundColor: colors.blue,
              borderRadius: radii.s2,
            },
            buttonTextStyle: {
              fontFamily: fonts[1],
              fontSize: size.s3,
              color: colors.white,
            },
            backFunction: () => navigation.goBack(),
            doneFunction: (data) => onDone(data),
          },
          noAssets: () => <Container />,
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default MediaSelectionScreen;
