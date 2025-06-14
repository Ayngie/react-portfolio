import React from 'react';
import type { Repo as RepoType } from '../../services/fetchRepos';
import './Repo.scss';

interface RepoProps {
  repo: RepoType;
  customRepoName?: string;
  customRepoTechniquesInfo?: string;
  liveUrl?: string;
  image?: string;
}

const Repo: React.FC<RepoProps> = ({
  repo,
  customRepoName,
  customRepoTechniquesInfo,
  liveUrl,
  image,
}) => {
  return (
    <>
      {image && (
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Go to GitHub repository for ${
            customRepoName ?? repo.name
          } (opens in new tab)`}
          title={`Go to GitHub repository for ${customRepoName ?? repo.name}`}>
          <img
            src={image}
            alt={`Screenshot of ${customRepoName ?? repo.name} project`}
            className="repo-screenshot"
          />
        </a>
      )}
      <h3 className="title">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-name-and-link"
          aria-label={`Go to GitHub repository for ${
            customRepoName ?? repo.name
          } (opens in new tab)`}
          title={`Go to GitHub repository for ${customRepoName ?? repo.name}`}>
          {customRepoName ?? repo.name}
        </a>
      </h3>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      {customRepoTechniquesInfo && (
        <span className="repo-language">
          Techniques: {customRepoTechniquesInfo ?? repo.language}
        </span>
      )}
      {liveUrl && (
        <div>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-live-link"
            aria-label={`View live site for ${
              customRepoName ?? repo.name
            } (opens in new tab)`}
            title={`View live site for ${customRepoName ?? repo.name}`}>
            View Live
          </a>
        </div>
      )}
    </>
  );
};

export default Repo;
