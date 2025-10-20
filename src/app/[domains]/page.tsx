"use client";

import { useEffect, useState } from "react";
import { Dino } from "../types";
import Link from "next/link";

type RouteParams = { params: Promise<{ domain: string }> };

export default function domain({ params }: RouteParams) {
    const selecteddomain = params.then((params) => params.domain);
    const [domain, setDino] = useState<Dino>({ name: "", description: "" });

    useEffect(() => {
        (async () => {
            const resp = await fetch(`/api/domains/${await selecteddomain}`);
            const dino = await resp.json() as Dino;
            setDino(dino);
        })();
    }, []);
    return (
        <main>
            <h1>{domain.name}</h1>
            <p>{domain.description}</p>
            <Link href="/" className="btn-secondary">Back to all domains</Link>
        </main>
    );
}
