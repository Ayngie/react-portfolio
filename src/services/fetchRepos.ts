import axios from 'axios';

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export const fetchRepos = async (): Promise<Repo[]> => {
  const username = 'ayngie';
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await axios.get<Repo[]>(url);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to fetch repositories.'
      );
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};
