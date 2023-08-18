import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[0]};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100, some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarely = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  ratingArray.forEach((element, index) => {
    ratingArray[index] = index;
  });

  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover
          source={{
            uri: photos[0],
          }}
        />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((number) => (
                <SvgXml xml={star} width={20} height={20} key={number} />
              ))}
            </Rating>
            <SectionEnd>
              <Spacer position="left" size="medium">
                {isClosedTemporarely && (
                  <Text variant="label" style={{ color: "red" }}>
                    CLOSED TEMPORARELY{" "}
                  </Text>
                )}
              </Spacer>
              <Spacer position="left" size="medium">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image style={{ width: 20, height: 20 }} src={icon} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address variant="titleLarge">{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
