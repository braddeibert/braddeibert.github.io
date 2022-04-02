import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/braddeibert/braddeibert.github.io',
		user: {
			name: 'Brad Deibert',
			email: 'bradeibert7@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
