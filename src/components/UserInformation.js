import { currentUser } from "@clerk/nextjs/server";

const UserInformation = async () => {
	const user = await currentUser();

	return (
		<div>
			{user && (
				<div>
					<div>
						{user.firstName} {user.lastName}
					</div>
					<div>{user.emailAddresses[0].emailAddress}</div>
				</div>
			)}
		</div>
	);
};

export default UserInformation;
