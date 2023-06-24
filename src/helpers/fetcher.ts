// @ts-ignore
import useUserStore from '@/src/stores/userStore';
import useSWR from 'swr';

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
				pageSize: 5,
				searchText: '',
			}),
		}).then(res => res.json());

	const { data, error, isLoading } = useSWR(url, fetcher);

	return { data, error, isLoading };
};

export default useFetcher;
