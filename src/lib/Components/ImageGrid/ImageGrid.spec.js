import { getAllByRole, render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ImageGrid from './ImageGrid.svelte';

const images = [
	{ id: 1, imgurl: 'https://via.placeholder.com/150' },
	{ id: 2, imgurl: 'https://via.placeholder.com/150' }
];

describe('<ImageGrid />', () => {
	test('it renders ImageGrid component correctly', () => {
		render(ImageGrid, { props: { images } });
	});

	test('it has a button with the text "Show all photos"', () => {
		const { getByText } = render(ImageGrid, { props: { images } });
		const button = getByText('Show all photos');

		expect(button).toBeInTheDocument();
	});

	test('it "Show all photos" button opens modal to reveal more photos', () => {
		const { getByText, getAllByRole } = render(ImageGrid, { props: { images } });
		const button = getByText('Show all photos');
		const gridImages = getAllByRole('img');

		userEvent.click(button);
		expect(gridImages).toBeTruthy();
	});
});
