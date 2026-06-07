"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import Shell from '@/components/layout/Shell';
import LeftPanel from '@/components/dashboard/LeftPanel';
import CenterPanel from '@/components/dashboard/CenterPanel';
import RightPanel from '@/components/dashboard/RightPanel';

const MIN_WIDTH = 180;
const DIVIDER_W = 5;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftW, setLeftW] = useState(300);
  const [rightW, setRightW] = useState(300);
  const dragging = useRef<null | 'left' | 'right'>(null);
  const startX = useRef(0);
  const startW = useRef(0);

  const onMouseDown = useCallback((side: 'left' | 'right') => (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = side;
    startX.current = e.clientX;
    startW.current = side === 'left' ? leftW : rightW;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [leftW, rightW]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current || !containerRef.current) return;
      const totalW = containerRef.current.offsetWidth;
      const delta = e.clientX - startX.current;

      if (dragging.current === 'left') {
        const next = Math.max(MIN_WIDTH, Math.min(startW.current + delta, totalW - rightW - MIN_WIDTH - DIVIDER_W * 2));
        setLeftW(next);
      } else {
        const next = Math.max(MIN_WIDTH, Math.min(startW.current - delta, totalW - leftW - MIN_WIDTH - DIVIDER_W * 2));
        setRightW(next);
      }
    };
    const onMouseUp = () => {
      dragging.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [leftW, rightW]);

  return (
    <Shell>
      {/* Resizable panel container — replaces the CSS grid */}
      <div
        ref={containerRef}
        style={{ display: 'flex', flex: 1, overflow: 'hidden', width: '100%' }}
      >
        {/* Left panel */}
        <div style={{ width: leftW, minWidth: MIN_WIDTH, flexShrink: 0, overflow: 'hidden', borderRight: '1px solid var(--border-color)' }}>
          <LeftPanel />
        </div>

        {/* Left divider */}
        <div
          onMouseDown={onMouseDown('left')}
          title="Drag to resize"
          style={{
            width: DIVIDER_W,
            flexShrink: 0,
            cursor: 'col-resize',
            background: 'var(--border-color)',
            transition: 'background 0.15s',
            position: 'relative',
            zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-color)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--border-color)')}
        />

        {/* Center panel — takes remaining space */}
        <div style={{ flex: 1, overflow: 'hidden', minWidth: MIN_WIDTH }}>
          <CenterPanel />
        </div>

        {/* Right divider */}
        <div
          onMouseDown={onMouseDown('right')}
          title="Drag to resize"
          style={{
            width: DIVIDER_W,
            flexShrink: 0,
            cursor: 'col-resize',
            background: 'var(--border-color)',
            transition: 'background 0.15s',
            position: 'relative',
            zIndex: 10,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-color)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--border-color)')}
        />

        {/* Right panel */}
        <div style={{ width: rightW, minWidth: MIN_WIDTH, flexShrink: 0, overflow: 'hidden' }}>
          <RightPanel />
        </div>
      </div>
    </Shell>
  );
}
