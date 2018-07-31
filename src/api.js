import axios from 'axios';

export const API = axios.create({
	baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
	// Set commmon parameters for each request to the API.
	config.params.APPID = '80cbd7c1a5fac120ee4b31bf2e561ec5';
	config.params.units = 'imperial';

	return config;
}, function (error) {
	return Promise.reject(error);
});
