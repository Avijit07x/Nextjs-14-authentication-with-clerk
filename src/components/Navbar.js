import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
	return (
		<nav className="bg-gray-600 text-white flex justify-between px-10 h-10 items-center">
			<h1 className="font-semibold">Learning Clerk </h1>
			<SignedOut>
				<SignInButton children="Sign In"  />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</nav>
	);
};

export default Navbar;
