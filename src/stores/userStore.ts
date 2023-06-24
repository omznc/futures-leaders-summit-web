import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '@interfaces/interfaces';

type UserStoreType = {
	user: IUser | null;
	login: (_: string, __: string) => Promise<boolean>;
	clearUser: () => void;
};

// A persist version of the store
const useUserStore = create(
	persist<UserStoreType>(
		set => ({
			user: null,
			login: async (email: string, password: string) => {
				const response = await fetch(
					'https://fls-backend.herokuapp.com/user/authenticate',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email,
							password,
						}),
					}
				);
				const data = (await response.json()) as IUser;
				if (data?.token) {
					set({ user: data });
					return true;
				}
				return false;
			},
			clearUser: () => set({ user: null }),
		}),
		{
			name: 'user-storage',
		}
	)
);

export default useUserStore;
