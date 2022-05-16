import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/braddeibert/braddeibert.github.io',
		dotfiles: true,
		user: {
			name: 'Brad Deibert',
			email: 'bradeibert7@gmail.com'
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
