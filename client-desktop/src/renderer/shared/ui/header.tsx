type HeaderProps = {
	description?: string;
};

export function Header({ description }: HeaderProps) {
	return (
		<header className="flex flex-col items-center gap-2 mb-20">
			<h1 className="text-2xl font-bold text-white">WEBKAO TALK</h1>
			{description && <p className="text-white">{description}</p>}
		</header>
	);
}
