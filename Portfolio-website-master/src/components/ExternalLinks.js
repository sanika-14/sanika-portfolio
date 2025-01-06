import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

const ExternalLinks = ({ githubLink, leetcodeLink, openLink }) => {
  return (
    <div className="external-links">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon
          style={{
            fontSize: 20,
            color: "var(--lightest-slate)"
          }}
        ></GitHubIcon>
      </a>
      {openLink && (
        <a className="open-icon" href={openLink}>
          <OpenInBrowserIcon
            style={{
              fontSize: 25,
              color: "var(--lightest-slate)"
            }}
          ></OpenInBrowserIcon>
        </a>
      )}
    </div>
  );
};

export default ExternalLinks;
