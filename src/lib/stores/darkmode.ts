import { browser } from '$app/env';
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

const createDarkModeStorage = () => {
	return writable(getIsDarkMode());
};

export const darkMode = createDarkModeStorage();

darkMode.subscribe((value) => {
	if (browser) {
		localStorage.setItem('darkMode', value.toString());
	}
});
