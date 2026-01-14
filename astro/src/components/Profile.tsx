import { h } from 'preact';

export default function Profile() {
  return (
    <div>
      <h1>Brad Deibert</h1>
      <p>Software Engineer based in Missoula, MT.</p>
      <p>Interests: React, TypeScript, Go.</p>
      <p>
        <a href="https://github.com/braddeibert" target="_blank" rel="noopener noreferrer">GitHub</a>
        {" | "}
        <a href="https://www.linkedin.com/in/bradleydeibert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  );
}
