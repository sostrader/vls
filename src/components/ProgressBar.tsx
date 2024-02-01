"use client";
import './progressbar.css';
import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  isPlaying: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isPlaying }) => {
  const [progress, setProgress] = useState(0);
  const totalTime = 7 * 60 * 1000; // 7 minutos em milissegundos
  let fastPhaseEndTime = 0; // Guarda o tempo em que a fase rápida termina

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isPlaying) {
      // Define o tempo para atualizações de progresso
      const updateInterval = 1000; // atualiza a cada segundo
      const fastSpeedMultiplier = 4; // Velocidade 4x até 70%
      const fastPhaseTarget = 70; // Target para mudar a velocidade

      interval = setInterval(() => {
        setProgress((prevProgress) => {
          // Calcula o progresso baseado na fase
          if (prevProgress < fastPhaseTarget) {
            // Calcula o tempo que passou desde o início até agora
            let timeSinceStart = (prevProgress / fastPhaseTarget) * (totalTime / fastSpeedMultiplier);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            fastPhaseEndTime = timeSinceStart;
            // Incremento 4x mais rápido
            return Math.min(prevProgress + (updateInterval * fastSpeedMultiplier * 100) / totalTime, fastPhaseTarget);
          } else {
            // Calcula o incremento para os 30% finais baseado no tempo restante
            let slowPhaseTime = totalTime - fastPhaseEndTime;
            let timeSinceFastPhaseEnd = (prevProgress - fastPhaseTarget) / (100 - fastPhaseTarget) * slowPhaseTime;
            let nextIncrement = (updateInterval / slowPhaseTime) * (100 - fastPhaseTarget);
            return Math.min(prevProgress + nextIncrement, 100);
          }
        });
      }, updateInterval);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
