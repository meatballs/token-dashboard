import {
  BodyMd,
  Stack,
  Image,
  VStack,
  Card,
  BoxProps,
} from "@threshold-network/components"
import ButtonLink from "../../components/ButtonLink"
import santaIsComing from "../../static/images/santa-is-coming.png"
import noBridgeFeesText from "../../static/images/no-bridge-fees-text.svg"
import { FC } from "react"

export const NoBridgeFeesBanner: FC<BoxProps> = ({ ...props }) => {
  return (
    <Card
      p={{ base: 6, xl: 10 }}
      backgroundImage={santaIsComing}
      backgroundSize={"cover"}
      backgroundPosition={{ base: "25%", xl: "center" }}
      border={"none"}
      boxShadow={"none"}
      {...props}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        alignItems={{ base: "start", xl: "center" }}
        justifyContent={{ base: "left", xl: "space-between" }}
      >
        <VStack alignItems={"start"}>
          <Image
            src={noBridgeFeesText}
            maxHeight={{ base: "60px", xl: "initial" }}
          />
          <BodyMd color="white" fontSize={{ base: 14, xl: 21 }}>
            until February 10, 2024!
          </BodyMd>
        </VStack>
        <ButtonLink to={"/tBTC"} px={"6"} maxWidth={"150px"}>
          Start Minting
        </ButtonLink>
      </Stack>
    </Card>
  )
}
