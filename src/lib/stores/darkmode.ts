import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const getIsDarkMode = () => {
	let isDarkMode: boolean | undefined = undefined;

	if (browser) {
		if ('darkMode' in localStorage) {
			isDarkMode = localStorage.getItem('darkMode') === 'true';
		} else {
			isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
	}

	return isDarkMode ?? true;
};

export const darkMode = writable(getIsDarkMode());

darkMode.subscribe((newValue) => {
	if (browser) {
		if (newValue) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.setItem('darkMode', newValue.toString());
	}
});
