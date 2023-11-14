import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Gang de mouettes',
			defaultLocale: 'root',
			tableOfContents: false,
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			social: {
				github: 'https://github.com/clemlatz/gang-de-mouettes',
			},
			customCss: [
				'./src/styles.css',
			],
			sidebar: [
				{
					label: 'Introduction',
					link: '/introduction/'
				},
				{
					label: 'Règles',
					autogenerate: { directory: 'regles' },
				},
				{
					label: 'Cartes',
					link: '/cartes/',
				},
				{
					label: 'Télécharger',
					link: '/telecharger/',
				}
			],
		}),
	],
});
