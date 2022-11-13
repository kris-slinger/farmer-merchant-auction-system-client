import React from "react"
import { NextPage } from "next/types"
import Image from "next/image"
interface Props {
	children: JSX.Element
}
const Auth: NextPage<Props> = ({ children }) => {
	return (
		<div>
			<div className="flex flex-row min-h-screen">
				<div className="w-full">
					<div className="m-auto w-1/2 mt-20 space-y-10 ">{children}</div>
				</div>
				<div className="w-full relative min-h-screen">
					<Image src="/fruits.jpg" layout="fill" />
				</div>
			</div>
		</div>
	)
}

export default Auth
