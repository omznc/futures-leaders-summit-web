import useUserStore from '@/src/stores/userStore';
import useSWR from 'swr';

/**
 * Custom hook to fetch data from the server. This needs more work as it currently does not support:
 * - Pagination
 * - Custom properties
 * - Method type
 * @param url
 * @returns The data (untyped), error and loading state
 */
const useFetcher = (url: string) => {
	const user = useUserStore(state => state.user);
	const fetcher = (...args: any[]) =>
		// @ts-ignore
		fetch(...args, {
			headers: {
				Authorization: user?.token ?? '',
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				discountName: '',
				pageNumber: 0,
				pageSize: 20,
				searchText: '',
			}),
		}).then(res => res.json());

	const { data, error, isLoading } = useSWR(url, fetcher, {
		refreshInterval: 0,
		revalidateOnReconnect: true,
		revalidateOnFocus: false,
		refreshWhenHidden: false,
	});

	return { data, error, isLoading };
};

export default useFetcher;
