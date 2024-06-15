import React from 'react';
import Projects from './1Projects';

function Project() {
  return (
    <article className="project active" data-page="project">
  <header>
    <h2 className="h2 article-title">Projeler</h2>
  </header>
    <Projects />
</article>
  );
}

export default Project;