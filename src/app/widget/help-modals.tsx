"use client";

import { HelpModal } from "@stakekit/widget";
import { Box } from "../../components/atoms/box";
import { Text } from "../../components/atoms/typography";
import { links } from "../style.css";

export const HelpModals = () => (
	<Box
		display="flex"
		justifyContent="center"
		alignItems="center"
		flexDirection="column"
		gap="8"
		marginBottom="14"
	>
		<HelpModal
			modal={{ type: "whatIsStakeKit" }}
			customTrigger={
				<Box className={links}>
					<Text variant={{ size: "supportLink" }}>What is Yield.xyz?</Text>
				</Box>
			}
		/>

		<HelpModal
			modal={{ type: "getInTouch" }}
			customTrigger={
				<Box className={links}>
					<Text variant={{ size: "supportLink" }}>
						Need help or have questions?
					</Text>
				</Box>
			}
		/>

		<Box as="a" href="https://twitter.com/stakekit" target="_blank">
			<Text variant={{ size: "supportLink" }}>Follow us on Twitter</Text>
		</Box>

		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="8"
			marginTop="8"
		>
			<Box
				as="a"
				href="https://docs.stakek.it/docs/terms-of-use"
				target="_blank"
			>
				<Text>Terms & Conditions</Text>
			</Box>

			<Box
				as="a"
				href="https://docs.stakek.it/docs/privacy-policy"
				target="_blank"
			>
				<Text>Privacy Policy</Text>
			</Box>
		</Box>
	</Box>
);
