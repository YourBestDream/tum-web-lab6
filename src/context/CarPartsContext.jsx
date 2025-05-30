import { createContext, useContext, useState, useEffect } from 'react'

const CarPartsContext = createContext()

const initialParts = [
  {
    id: 1,
    name: 'Brake Pads',
    category: 'Brakes',
    price: 49.99,
    description: 'High-performance ceramic brake pads for optimal stopping power',
    image: 'https://placehold.co/300x200',
    inStock: true,
    likes: 0,
  },
  {
    id: 2,
    name: 'Oil Filter',
    category: 'Engine',
    price: 12.99,
    description: 'Premium oil filter for maximum engine protection',
    image: 'https://placehold.co/300x200',
    inStock: true,
    likes: 0,
  },
  {
    id: 3,
    name: 'Spark Plugs Set',
    category: 'Engine',
    price: 24.99,
    description: 'Set of 4 iridium spark plugs for improved fuel efficiency',
    image: 'https://placehold.co/300x200',
    inStock: false,
    likes: 0,
  },
]

export function CarPartsProvider({ children }) {
  const [parts, setParts] = useState(() => {
    const savedParts = localStorage.getItem('carParts')
    return savedParts ? JSON.parse(savedParts) : initialParts
  })

  useEffect(() => {
    localStorage.setItem('carParts', JSON.stringify(parts))
  }, [parts])

  const addPart = (newPart) => {
    setParts(currentParts => [...currentParts, { ...newPart, id: Date.now(), likes: 0 }])
  }

  const removePart = (id) => {
    setParts(currentParts => currentParts.filter(part => part.id !== id))
  }

  const toggleLike = (id) => {
    setParts(currentParts =>
      currentParts.map(part =>
        part.id === id ? { ...part, likes: part.likes + 1 } : part
      )
    )
  }

  const value = {
    parts,
    addPart,
    removePart,
    toggleLike,
  }

  return (
    <CarPartsContext.Provider value={value}>
      {children}
    </CarPartsContext.Provider>
  )
}

export function useCarParts() {
  const context = useContext(CarPartsContext)
  if (!context) {
    throw new Error('useCarParts must be used within a CarPartsProvider')
  }
  return context
} 