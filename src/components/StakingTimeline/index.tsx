import { FC } from "react"
import {
  BodyMd,
  BodySm,
  BoxLabel,
  ChecklistGroup,
  FlowStep,
  FlowStepStatus,
  Stack,
  useColorModeValue,
  StackProps,
} from "@threshold-network/components"
import { ExternalHref } from "../../enums"
import Link from "../Link"
import { featureFlags } from "../../constants"
import { Box } from "@chakra-ui/react"

const STAKING_PROVIDER_URL = "/staking/how-it-works/providers"
const APPLICATION_DOCS_URL = "/staking/how-it-works/applications"

export const StakingDepositStepsNonMAS: FC = () => {
  return (
    <ChecklistGroup
      title="Step 1 - Staking Deposit"
      checklistItems={[
        {
          itemId: "staking_deposit__0",
          itemTitle:
            "Provider Node address (Operator), Beneficiary, and Authorizer addresses",
          itemSubTitle: (
            <BodySm color={useColorModeValue("gray.500", "gray.300")}>
              These will be automatically set up to your wallet address. If you
              want to use a Staking Provider check{" "}
              <Link isExternal href={ExternalHref.tacoStakingProvidersList}>
                this
              </Link>
            </BodySm>
          ),
        },
      ]}
    />
  )
}

export const LegacyStakesDepositSteps: FC = () => {
  if (featureFlags.MULTI_APP_STAKING) {
    return (
      <Stack spacing={6}>
        <FlowStep
          status={FlowStepStatus.active}
          preTitle="Step 1"
          title="Authorize T staking contract"
          size="sm"
          margin="0 !important"
        >
          <Stack spacing={0}>
            <BodyMd>
              Authorize NuCypher legacy stakes{" "}
              <Link isExternal href={ExternalHref.nuDapp}>
                here
              </Link>
            </BodyMd>
            <BodyMd>
              Authorize Keep Network legacy stakes{" "}
              <Link isExternal href={ExternalHref.keepDapp}>
                here
              </Link>
            </BodyMd>
          </Stack>
        </FlowStep>
        <FlowStep
          status={FlowStepStatus.active}
          preTitle="Step 2"
          title="Stake Tokens"
          size="sm"
        >
          <BodyMd>
            Enter the Provider, Beneficiary, and Authorizer addresses. These
            will be automatically set to your wallet address. If you want to use
            a Staking Provider, here is{" "}
            <Link to={STAKING_PROVIDER_URL}>a list</Link>.
          </BodyMd>
        </FlowStep>

        <FlowStep
          status={FlowStepStatus.active}
          preTitle="Step 3"
          title="Authorize Apps"
          size="sm"
        >
          <BodyMd>
            For each stake, there are three applications available. To authorize
            tBTC, Random Beacon, and TACo, go to the{" "}
            <Link to="/staking">Staking Page</Link> and select “Configure
            Stake”.
          </BodyMd>
        </FlowStep>

        <FlowStep
          status={FlowStepStatus.active}
          preTitle="Step 4"
          title="Set up node"
          size="sm"
        >
          You will need to run a node for applications that you have authorized
          to earn rewards. If you don’t have one, learn how to do it{" "}
          <Link to={APPLICATION_DOCS_URL}>here</Link> or contact{" "}
          <Link to={STAKING_PROVIDER_URL}>a Staking Provider</Link>.
        </FlowStep>
      </Stack>
    )
  }

  return (
    <Box>
      <ChecklistGroup
        mb={8}
        title="Step 1 - T Staking Contract Authorization"
        checklistItems={[
          {
            itemId: "t_staking_contract_auth__0",
            itemTitle: (
              <BodyMd>
                Authorize your NuCypher legacy stake{" "}
                <Link isExternal href={ExternalHref.nuDapp}>
                  here
                </Link>
              </BodyMd>
            ),
          },
          {
            itemId: "t_staking_contract_auth__1",
            itemTitle: (
              <BodyMd>
                Authorize your Keep Network legacy stake{" "}
                <Link isExternal href={ExternalHref.keepDappAuthPage}>
                  here
                </Link>
              </BodyMd>
            ),
          },
        ]}
      />
      <TacoSetupSteps />
    </Box>
  )
}

export const TacoSetupSteps: FC = () => {
  return (
    <ChecklistGroup
      title="Step 2 - TACo Setup"
      checklistItems={[
        {
          itemId: "run_a_taco_node__0",
          itemTitle: "Run a TACo Node",
          itemSubTitle: (
            <BodySm color={useColorModeValue("gray.500", "gray.300")}>
              You will need to run a TACo node to get rewards. If you don’t have
              one, learn how to do it here{" "}
              <Link isExternal href={ExternalHref.tacoNodeSetup}>
                here
              </Link>
              , or contact{" "}
              <Link isExternal href={ExternalHref.tacoStakingProvidersList}>
                a staking provider
              </Link>
            </BodySm>
          ),
        },
        {
          itemId: "run_a_taco_node__1",
          itemTitle: "TACo Operator address",
          itemSubTitle: (
            <BodySm color={useColorModeValue("gray.500", "gray.300")}>
              Make sure you add your TACo Operator address{" "}
              <Link isExternal href={ExternalHref.tacoNodeSetup}>
                here
              </Link>{" "}
              to gain rewards.
            </BodySm>
          ),
        },
      ]}
    />
  )
}

const StakingTimeline: FC<{ statuses?: FlowStepStatus[] } & StackProps> = ({
  statuses = [],
  ...restProps
}) => {
  if (featureFlags.MULTI_APP_STAKING) {
    return (
      <Stack spacing={6} {...restProps}>
        <BoxLabel status="secondary">Staking Timeline</BoxLabel>
        <FlowStep
          size="sm"
          title="Stake Tokens"
          preTitle="Step 1"
          status={statuses[0] ?? FlowStepStatus.active}
          isDescriptionArrowHidden
        >
          <BodySm>
            Enter the Provider, Beneficiary, and Authorizer addresses. These
            will
          </BodySm>
          be automatically set to your wallet address. If you want to use a
          Staking Provider, here is{" "}
          <Link to={STAKING_PROVIDER_URL}>a list</Link>.
        </FlowStep>
        <FlowStep
          size="sm"
          title="Authorize Apps"
          preTitle="Step 2"
          status={statuses[1] ?? FlowStepStatus.inactive}
          isDescriptionArrowHidden
        >
          For each stake, there are three applications available. To authorize{" "}
          <Link to={"https://docs.threshold.network/applications/tbtc-v2"}>
            tBTC
          </Link>
          ,{" "}
          <Link
            to={"https://docs.threshold.network/app-development/random-beacon"}
          >
            Random Beacon
          </Link>
          , and{" "}
          <Link
            to={
              "https://docs.threshold.network/applications/threshold-access-control"
            }
          >
            TACo
          </Link>
          , go to the <Link to="/staking">Staking page</Link> and select
          “Configure Stake”.
        </FlowStep>
        <FlowStep
          size="sm"
          title="Set up node"
          preTitle="Step 3"
          status={statuses[2] ?? FlowStepStatus.inactive}
          isDescriptionArrowHidden
        >
          <BodySm>
            You will need to run a node for applications that you have
            authorized to earn rewards. If you don’t have one, learn how to do
            it <Link to={APPLICATION_DOCS_URL}>here</Link> or contact a{" "}
            <Link to={STAKING_PROVIDER_URL}>Staking Provider</Link>.
          </BodySm>
        </FlowStep>
      </Stack>
    )
  }

  return (
    <Stack {...restProps}>
      <Box mb={6}>
        <StakingDepositStepsNonMAS />
      </Box>
      <Box>
        <TacoSetupSteps />
      </Box>
    </Stack>
  )
}

export default StakingTimeline
