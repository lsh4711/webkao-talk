import ProfileDetail from "~pages/profile/profile-detail";
import ProfileEdit from "~pages/profile/profile-edit";
import ProfileList from "~pages/profile/profile-list";

export const PROFILE_ROUTE = [
	{
		path: "/profile-list",
		element: <ProfileList />,
	},
	{
		path: "/profile:profileId",
		element: <ProfileDetail />,
	},
	{
		path: "/profile-edit",
		element: <ProfileEdit />,
	},
];
