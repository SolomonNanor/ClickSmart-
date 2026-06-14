'use client';

import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';

import { submitEvaluationScore } from '@/lib/api';
import type { EvaluationQuestionsResponse, EvaluationScoreResponse } from '@/lib/types';

type ScoreMap = Record<string, number>;

export default function EvaluationMatrixForm({ questions }: { questions: EvaluationQuestionsResponse }) {
  const initialScores = useMemo(() => {
    const scores: ScoreMap = {};
    Object.values(questions.areas).forEach((group) => {
      group.forEach((item) => {
        scores[item.id] = 2;
      });
    });
    return scores;
  }, [questions]);

  const [scores, setScores] = useState<ScoreMap>(initialScores);
  const [result, setResult] = useState<EvaluationScoreResponse | null>(null);
  const [loading, setLoading] = useState(false);

  function setScore(id: string, value: number) {
    setScores((current) => ({ ...current, [id]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const payload = {
      areas: Object.fromEntries(
        Object.entries(questions.areas).map(([area, items]) => [
          area,
          items.map((item) => ({
            ...item,
            score: scores[item.id] ?? 0,
          })),
        ])
      ),
    };

    try {
      const score = await submitEvaluationScore(payload);
      setResult(score);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="stack">
      <form onSubmit={handleSubmit} className="stack">
        {Object.entries(questions.areas).map(([area, items]) => (
          <section key={area} className="app-panel p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold app-heading">{area}</h2>
              <span className="text-sm app-muted">0 to 4</span>
            </div>
            <div className="stack">
              {items.map((item) => (
                <label key={item.id} className="stack-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold app-heading">{item.name}</span>
                    <span className="app-badge">{scores[item.id] ?? 0}</span>
                  </div>
                  <p className="text-sm leading-6 app-muted">{item.rationale}</p>
                  <input
                    type="range"
                    min={0}
                    max={4}
                    step={1}
                    value={scores[item.id] ?? 0}
                    onChange={(event) => setScore(item.id, Number(event.target.value))}
                    className="w-full"
                  />
                </label>
              ))}
            </div>
          </section>
        ))}

        <div>
          <button type="submit" className="app-btn-primary" disabled={loading}>
            {loading ? 'Scoring...' : 'Score evaluation'}
          </button>
        </div>
      </form>

      {result ? (
        <section className="app-panel p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="app-badge">{result.level}</span>
            <p className="text-lg font-semibold app-heading">{result.percentage}% overall</p>
            <p className="app-muted">Color: {result.color}</p>
          </div>
          <p className="mt-3 app-muted">
            Total score {result.total_score} of {result.total_possible}
          </p>
        </section>
      ) : null}
    </div>
  );
}
