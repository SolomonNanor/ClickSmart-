import { AppPage, Panel, SectionHeader } from '@/components/AppShell';
import EvaluationMatrixForm from '@/components/EvaluationMatrixForm';
import { getEvaluationQuestions } from '@/lib/api';

export default async function EvaluationPage() {
  const questions = await getEvaluationQuestions();

  return (
    <AppPage>
      <div className="stack">
        <SectionHeader
          eyebrow="Evaluation matrix"
          title="Score the prototype"
          description="Rate each indicator from 0 to 4. The page then calculates the percentage and the support level."
        />

        <Panel className="space-y-4">
          <EvaluationMatrixForm questions={questions} />
        </Panel>
      </div>
    </AppPage>
  );
}
