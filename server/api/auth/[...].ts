
import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
	providers: [
		// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
		GithubProvider.default({
			clientId: 'Ov23liEQHwp4CLKpcqmB',
			clientSecret: '1bc3cefce589ecb87b1b84666cb276889b8916c2'
		}),
		// @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
		Auth0Provider.default({
			clientId: 'bjl8qpeCndwVW5lGQocoGvHsplTf3DN3',
			clientSecret: 'wZrP_q0qMtZl82tUIYNydwYeMJ9PApbSRIvAqZQD-9W86dagXvCs_eK3lc2rCEO2',
			issuer: 'https://dev-qivrv0gvaen6ozbs.us.auth0.com'
		})
	],
	secret: "6ANXROkGzT2zCg01Hqwdp4uMy0+36ptKdNr/DatZ4tw="
})