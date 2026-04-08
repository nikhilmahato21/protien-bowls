import { useInView } from '../../hooks/useInView';

interface MacroBarProps {
  label: string;
  value: number;
  color: string;
  suffix: string;
}

export function MacroBar({ label, value, color, suffix }: MacroBarProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <div ref={ref} className="macro-row">
      <div className="macro-meta">
        <span>{label}</span>
        <strong>
          {value}
          {suffix}
        </strong>
      </div>
      <div className="macro-track">
        <div
          className={`macro-fill ${isInView ? 'is-visible' : ''}`}
          style={{
            width: `${Math.min(value * 2, 100)}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 18px ${color}88`,
          }}
        />
      </div>
    </div>
  );
}
