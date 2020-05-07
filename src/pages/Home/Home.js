import React from "react";

import { Header, Heading, Paragraph, LinkGit } from "./Home.css";

function Home() {
  return (
    <Header>
      <Heading>Witam na mojej budżetowej stronie!</Heading>

      <Paragraph>
        Nazywam się Krystian Bieniek i jestem programistą samoukiem. Apkę
        napisałem dzięki Damianowi z Mentorzy IT. Kod do aplikacji znajdziecie
        na moim koncie{" "}
        <LinkGit href="https://github.com/Krystian2017/Budget-app">
          Github
        </LinkGit>{" "}
      </Paragraph>
      <Paragraph>
        Podczas pisania Budget-app wykorzystałem takie biblioteki i rozwiązania
        jak:
      </Paragraph>
      <ul>
        <li>Styled-components</li>
        <li>Redux</li>
        <li>
          Redux middlewares (logger, notyfikacje, akcje asynchroniczne, obsługa
          błędów)
        </li>
        <li>React hooks</li>
        <li>React.memo</li>
        <li>Code-splitting z użyciem React.lazy i Suspense</li>
        <li>Portals</li>
        <li>React Query</li>
        <li>React Final Form</li>
        <li>Context API</li>
        <li>JSON Server</li>
      </ul>
    </Header>
  );
}

export default Home;
