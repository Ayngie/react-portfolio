import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../../services/fetchRepos';
import type { Repo as RepoType } from '../../services/fetchRepos';
import Repo from '../Repo/Repo';
import Loader from '../Loader/Loader';
import Card from '../Cards/Card/Card';
import SubCard from '../Cards/SubCard/SubCard';
import './RepoList.scss';

// List of allowed repositories to display
const ALLOWED_REPOS = [
  'react-portfolio',
  'natural-guide-to-gestational-diabetes',
  'health-guide',
  'portfolio2.0',
];

// Custom repository information for display purposes
// Update for new repositories as needed
const CUSTOM_REPO_INFO: Record<
  string,
  { displayName?: string; techniques?: string; liveUrl?: string }
> = {
  'react-portfolio': {
    displayName: 'React Portfolio',
    techniques:
      'React/TypeScript, Vite, ESLint, SCSS, Axios, Flexbox, WCAG Guidelines',
    liveUrl: 'https://ayngie.github.io/react-portfolio/projects',
  },
  'natural-guide-to-gestational-diabetes': {
    displayName: 'Natural Guide to Gestational Diabetes',
    techniques:
      'React/TypeScript, Vite, Styled Components, Lazy Loading, Cypress',
    liveUrl: 'https://ayngie.github.io/natural-guide-to-gestational-diabetes/',
  },
  'health-guide': {
    displayName: 'Health Guide Template',
    techniques: 'React/TypeScript, Vite, i18next, TailwindCSS',
    liveUrl: 'https://ayngie.github.io/health-guide/',
  },
  'portfolio2.0': {
    displayName: 'Previous portfolio',
    techniques: 'VanillaJS/TypeScript, Vite, ESLint, SCSS, Axios',
    liveUrl: 'https://ayngie.github.io/portfolio2.0/',
  },
};

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRepos = async () => {
      try {
        setLoading(true);
        const data = await fetchRepos();
        const filtered = data
          .filter((repo) => ALLOWED_REPOS.includes(repo.name))
          .sort(
            (a, b) =>
              ALLOWED_REPOS.indexOf(a.name) - ALLOWED_REPOS.indexOf(b.name)
          );
        setRepos(filtered);
        console.log('Fetched repositories:', data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };
    getRepos();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return (
      <div role="alert" className="fetch-error">
        {error}
      </div>
    );
  if (repos.length === 0)
    return <div className="fetch-empty">No repositories found.</div>;

  return (
    <Card aria-labelledby="github-repos-heading">
      <h2 id="github-repos-heading">My top GitHub Repositories</h2>
      <section className="repo-list">
        {repos.map((repo) => {
          const custom = CUSTOM_REPO_INFO[repo.name] || {};
          return (
            <SubCard key={repo.id} className="repo">
              <Repo
                repo={repo}
                customRepoName={custom.displayName}
                customRepoTechniquesInfo={custom.techniques}
                liveUrl={custom.liveUrl}
              />
            </SubCard>
          );
        })}{' '}
      </section>
      <section className="main-github-link">
        <p>
          Visit{' '}
          <a
            href="https://github.com/Ayngie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub page (opens in new tab)">
            my GitHub
          </a>{' '}
          page for all public repos.
        </p>
      </section>
    </Card>
  );
};

export default RepoList;
