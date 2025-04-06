import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user, account }) {
			const provider = account?.provider;
			const uid = user?.id;
			const name = user?.name;
			const email = user?.email;

			// console.log('signIn', user, account);
			// console.log('checkpoint');
			// console.log(provider, uid, name, email);
			// console.log(`${apiUrl}/auth/${provider}/callback`);
			// console.log('checkpoint');

			try {
				const response = await fetch(
					`${apiUrl}/api/v1/auth/${provider}/callback`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							provider,
							uid,
							name,
							email,
						}),
					}
				);

			if (response.ok) return true;

			} catch (error) {
				console.log('どういうエラーか確認', error);
				return false;
			}

			return true;
		},
	},
});
export { handler as GET, handler as POST };

