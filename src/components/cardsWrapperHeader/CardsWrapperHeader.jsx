import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IconBtn } from "../index.js";

const CardsWrapperHeader = ({
  wrapperTitle,
  fontColor,
  WrapperGoToIcon,
  WrapperPseudoIconId,
  showBtnOnAllSizes,
  style,
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
      style={style}
    >
      <Typography
        component="h2"
        fontSize={{ xs: "16px", md: "34px" }}
        fontWeight="600"
        lineHeight={{ xs: "16px", md: "44px" }}
        color={fontColor}
      >
        {wrapperTitle}
      </Typography>
      <Box>
        {WrapperGoToIcon && WrapperPseudoIconId && showBtnOnAllSizes && (
          <Link to="/product-details" style={{ textDecoration: "none" }}>
            <Stack direction="row" alignItems="center">
              <Typography
                whiteSpace="nowrap"
                width="100%"
                variant="caption"
                fontWeight="600"
                fontSize="14px"
                lineHeight={{ xs: "18px", md: "24px" }}
                color={theme.palette.primary.main}
              >
                View All
              </Typography>
              <IconBtn
                Icon={WrapperGoToIcon}
                pseudoIconId={WrapperPseudoIconId}
                btnStyle={{
                  padding: "0",
                  color: [`${theme.palette.primary.main}`, fontColor],
                }}
                iconStyle={{ fontSize: ["20px", "30px"] }}
                pseudoType={"&:hover"}
                pseudoStyle={{ backgroundColor: "transparent" }}
              />
            </Stack>
          </Link>
        )}
      </Box>
    </Stack>
  );
};

export default CardsWrapperHeader;
