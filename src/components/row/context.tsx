import React, { useContext } from 'react'

export type RowConfig = {
  gutters: [number, number]
}

export const RowContext = React.createContext<RowConfig | null>(null)

export function useRowConfig(): RowConfig | null {
  return useContext(RowContext)
}

export function getGutters(): [number, number] {
  const config = useRowConfig()
  return config ? config.gutters : [0, 0]
}
