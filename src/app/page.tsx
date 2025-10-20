"use client";

import { useEffect, useState } from "react";
import { Dino } from "./types";
import Link from "next/link";

export default function Home() {
  const [domains, setdomains] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/domains`);
      const alldomains = await response.json() as Dino[];
      setdomains(alldomains);
    })();
  }, []);

  return (
    <main>
      <h1>Welcome to the domain app</h1>
      <p>Click on a domain below to learn more.</p>
      {domains.map((domain: Dino) => {
        return (
          <Link key={domain.name} className="btn-primary" href={`/${domain.name.toLowerCase()}`}>
            {domain.name}
          </Link>
        );
      })}
    </main>
  );
}
